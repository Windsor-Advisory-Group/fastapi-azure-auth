import pytest
from fastapi import Depends, FastAPI
from httpx2 import ASGITransport, AsyncClient
from pydantic import model_validator

from demo_project.core.config import settings
from fastapi_azure_auth import (
    B2CMultiTenantAuthorizationCodeBearer,
    MultiTenantAzureAuthorizationCodeBearer,
    SingleTenantAzureAuthorizationCodeBearer,
)
from fastapi_azure_auth.user import User
from tests.utils import build_access_token


class CustomUser(User):
    """
    Example of a project-specific user model, adding a field derived from the token claims.
    """

    display_name: str = ''

    @model_validator(mode='after')
    def set_display_name(self) -> 'CustomUser':
        self.display_name = self.name or ''
        return self


def test_single_tenant_defaults_to_user_class():
    scheme = SingleTenantAzureAuthorizationCodeBearer(
        app_client_id=settings.APP_CLIENT_ID,
        tenant_id=settings.TENANT_ID,
    )
    assert scheme.user_object is User


def test_single_tenant_accepts_custom_user_object():
    scheme = SingleTenantAzureAuthorizationCodeBearer(
        app_client_id=settings.APP_CLIENT_ID,
        tenant_id=settings.TENANT_ID,
        user_object=CustomUser,
    )
    assert scheme.user_object is CustomUser


def test_multi_tenant_accepts_custom_user_object():
    scheme = MultiTenantAzureAuthorizationCodeBearer(
        app_client_id=settings.APP_CLIENT_ID,
        validate_iss=False,
        user_object=CustomUser,
    )
    assert scheme.user_object is CustomUser


def test_b2c_multi_tenant_accepts_custom_user_object():
    scheme = B2CMultiTenantAuthorizationCodeBearer(
        app_client_id=settings.APP_CLIENT_ID,
        validate_iss=False,
        user_object=CustomUser,
    )
    assert scheme.user_object is CustomUser


custom_user_app = FastAPI()

custom_user_scheme = SingleTenantAzureAuthorizationCodeBearer(
    app_client_id=settings.APP_CLIENT_ID,
    tenant_id=settings.TENANT_ID,
    scopes={f'api://{settings.APP_CLIENT_ID}/user_impersonation': 'User impersonation'},
    user_object=CustomUser,
)


@custom_user_app.get('/whoami')
async def whoami(user: CustomUser = Depends(custom_user_scheme)) -> dict:
    return {'type': type(user).__name__, 'display_name': user.display_name, 'roles': user.roles}


@pytest.mark.anyio
async def test_custom_user_object_is_used_end_to_end(mock_openid_and_keys):
    """
    A `user_object` override should be the type attached to `request.state.user` and returned from the
    dependency, complete with any extra fields/behavior the subclass adds.
    """
    async with AsyncClient(
        transport=ASGITransport(app=custom_user_app),
        base_url='http://test',
        headers={'Authorization': f'Bearer {build_access_token()}'},
    ) as ac:
        response = await ac.get('/whoami')
    assert response.status_code == 200
    assert response.json() == {
        'type': 'CustomUser',
        'display_name': 'Jonas Krüger Svensson / Vibber AS',
        'roles': ['AdminUser'],
    }

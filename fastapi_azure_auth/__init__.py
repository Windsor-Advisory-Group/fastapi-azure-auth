from fastapi_azure_auth.auth import (
    B2CMultiTenantAuthorizationCodeBearer as B2CMultiTenantAuthorizationCodeBearer,
    MultiTenantAzureAuthorizationCodeBearer as MultiTenantAzureAuthorizationCodeBearer,
    SingleTenantAzureAuthorizationCodeBearer as SingleTenantAzureAuthorizationCodeBearer,
)
from fastapi_azure_auth.openid_config import HttpClientConfig as HttpClientConfig

__version__ = '5.3.0'

__all__ = [
    'B2CMultiTenantAuthorizationCodeBearer',
    'HttpClientConfig',
    'MultiTenantAzureAuthorizationCodeBearer',
    'SingleTenantAzureAuthorizationCodeBearer',
]

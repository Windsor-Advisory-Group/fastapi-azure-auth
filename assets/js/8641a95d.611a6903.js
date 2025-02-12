"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[545],{340:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=t(4848),s=t(8453),o=t(72);const r={title:"FastAPI configuration",sidebar_position:2},a=void 0,l={id:"b2c/fastapi_configuration",title:"FastAPI configuration",description:"We'll do the simplest setup possible in these docs, through a one-file main.py.",source:"@site/docs/b2c/fastapi_configuration.mdx",sourceDirName:"b2c",slug:"/b2c/fastapi_configuration",permalink:"/fastapi-azure-auth/b2c/fastapi_configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/Intility/FastAPI-Azure-Auth/edit/main/docs/docs/b2c/fastapi_configuration.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"FastAPI configuration",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Azure configuration",permalink:"/fastapi-azure-auth/b2c/azure_setup"},next:{title:"Accessing the user object",permalink:"/fastapi-azure-auth/usage-and-faq/accessing_the_user"}},d={},c=[{value:"Getting started",id:"getting-started",level:2},{value:"Add your settings",id:"add-your-settings",level:2},{value:"Configure <code>CORS</code>",id:"configure-cors",level:2},{value:"Configure OpenAPI Documentation",id:"configure-openapi-documentation",level:2},{value:"Implementing FastAPI-Azure-Auth",id:"implementing-fastapi-azure-auth",level:2},{value:"Add loading of OpenID Configuration on startup",id:"add-loading-of-openid-configuration-on-startup",level:2},{value:"Adding authentication to our view",id:"adding-authentication-to-our-view",level:2},{value:"Testing it out",id:"testing-it-out",level:2},{value:"Last thing..",id:"last-thing",level:3}];function p(n){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.p,{children:["We'll do the ",(0,i.jsx)(e.strong,{children:"simplest setup possible"})," in these docs, through a one-file ",(0,i.jsx)(e.code,{children:"main.py"}),".\nHowever, it's highly recommended that you read the chapters about bigger applications\n",(0,i.jsx)(e.a,{href:"https://fastapi.tiangolo.com/tutorial/bigger-applications/",children:"here"}),", and invest in a good project structure."]}),"\n",(0,i.jsxs)(e.p,{children:["We assume you've done the FastAPI tutorial and have dependencies installed, such as ",(0,i.jsx)(e.code,{children:"FastAPI"})," and ",(0,i.jsx)(e.code,{children:"Gunicorn"}),"."]}),"\n",(0,i.jsxs)(e.p,{children:['For a more "real life" project example, look at the\n',(0,i.jsx)(e.a,{href:"https://github.com/Intility/fastapi-azure-auth/tree/main/demo_project",children:"demo_project"})," on GitHub."]}),"\n",(0,i.jsx)(e.h2,{id:"getting-started",children:"Getting started"}),"\n",(0,i.jsxs)(e.p,{children:["First, either create your ",(0,i.jsx)(e.code,{children:".env"})," file and fill out your variables or insert them directly in your settings later."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",metastring:'title=".env"',children:"TENANT_NAME=\nAPP_CLIENT_ID=\nOPENAPI_CLIENT_ID=\nAUTH_POLICY_NAME=\n"})}),"\n",(0,i.jsxs)(e.p,{children:["Create your ",(0,i.jsx)(e.code,{children:"main.py"})," file:"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",metastring:'title="main.py"',children:'from fastapi import FastAPI\nimport uvicorn\n\napp = FastAPI()\n\n\n@app.get("/")\nasync def root():\n    return {"message": "Hello World"}\n\nif __name__ == \'__main__\':\n    uvicorn.run(\'main:app\', reload=True)\n'})}),"\n",(0,i.jsxs)(e.p,{children:["Run your application and ensure that everything works on ",(0,i.jsx)(e.a,{href:"http://localhost:8000/docs",children:"http://localhost:8000/docs"})]}),"\n",(0,i.jsx)(e.admonition,{type:"info",children:(0,i.jsxs)(e.p,{children:["You need to run the application on the configured port in Azure Entra ID B2C for the next steps to work! If you are unsure,\nrevisit the previous chapter or review the Azure Entra ID B2C configuration under ",(0,i.jsx)(e.code,{children:"App Registrations"})," -> ",(0,i.jsx)(e.code,{children:"Authentication"}),"."]})}),"\n",(0,i.jsx)(e.h2,{id:"add-your-settings",children:"Add your settings"}),"\n",(0,i.jsxs)(e.p,{children:["First, add your settings to the application. We'll need these later. The way I've set it up will look for a ",(0,i.jsx)(e.code,{children:".env"}),"-file\nto populate your settings, but you can also just set a ",(0,i.jsx)(e.code,{children:"default"})," value directly."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",metastring:'{3-4,7-19} title="main.py"',children:'import uvicorn\nfrom fastapi import FastAPI\nfrom pydantic import AnyHttpUrl\nfrom pydantic_settings import BaseSettings, SettingsConfigDict\n\n\nclass Settings(BaseSettings):\n    BACKEND_CORS_ORIGINS: list[str | AnyHttpUrl] = [\'http://localhost:8000\']\n    TENANT_NAME: str = ""\n    APP_CLIENT_ID: str = ""\n    OPENAPI_CLIENT_ID: str = ""\n    AUTH_POLICY_NAME: str = ""\n    SCOPE_DESCRIPTION: str = "user_impersonation"\n\n    model_config = SettingsConfigDict(\n        env_file=\'.env\',\n        env_file_encoding=\'utf-8\',\n        case_sensitive=True\n    )\n\nsettings = Settings()\n\napp = FastAPI()\n\n@app.get("/")\nasync def root():\n    return {"message": "Hello World"}\n\n\nif __name__ == \'__main__\':\n    uvicorn.run(\'main:app\', reload=True)\n'})}),"\n",(0,i.jsxs)(e.h2,{id:"configure-cors",children:["Configure ",(0,i.jsx)(e.code,{children:"CORS"})]}),"\n",(0,i.jsxs)(e.p,{children:["Now, let's configure our ",(0,i.jsx)(e.code,{children:"CORS"}),". Without ",(0,i.jsx)(e.code,{children:"CORS"})," your OpenAPI docs won't work as expected:"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",metastring:'{3,26-33} title="main.py"',children:'import uvicorn\nfrom fastapi import FastAPI\nfrom fastapi.middleware.cors import CORSMiddleware\nfrom pydantic import AnyHttpUrl\nfrom pydantic_settings import BaseSettings, SettingsConfigDict\n\n\nclass Settings(BaseSettings):\n    BACKEND_CORS_ORIGINS: list[str | AnyHttpUrl] = [\'http://localhost:8000\']\n    TENANT_NAME: str = ""\n    APP_CLIENT_ID: str = ""\n    OPENAPI_CLIENT_ID: str = ""\n    AUTH_POLICY_NAME: str = ""\n    SCOPE_DESCRIPTION: str = "user_impersonation"\n\n    model_config = SettingsConfigDict(\n        env_file=\'.env\',\n        env_file_encoding=\'utf-8\',\n        case_sensitive=True\n    )\n\nsettings = Settings()\n\napp = FastAPI()\n\nif settings.BACKEND_CORS_ORIGINS:\n    app.add_middleware(\n        CORSMiddleware,\n        allow_origins=[str(origin) for origin in settings.BACKEND_CORS_ORIGINS],\n        allow_credentials=True,\n        allow_methods=[\'*\'],\n        allow_headers=[\'*\'],\n    )\n\n\n@app.get("/")\nasync def root():\n    return {"message": "Hello World"}\n\n\nif __name__ == \'__main__\':\n    uvicorn.run(\'main:app\', reload=True)\n'})}),"\n",(0,i.jsx)(e.h2,{id:"configure-openapi-documentation",children:"Configure OpenAPI Documentation"}),"\n",(0,i.jsxs)(e.p,{children:["In order for our OpenAPI documentation to work, we have to configure a few settings directly in the ",(0,i.jsx)(e.code,{children:"FastAPI"})," application."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",metastring:'{24-30} title="main.py"',children:"import uvicorn\nfrom fastapi import FastAPI\nfrom fastapi.middleware.cors import CORSMiddleware\nfrom pydantic import AnyHttpUrl\nfrom pydantic_settings import BaseSettings, SettingsConfigDict\n\n\nclass Settings(BaseSettings):\n    BACKEND_CORS_ORIGINS: list[str | AnyHttpUrl] = ['http://localhost:8000']\n    TENANT_NAME: str = \"\"\n    APP_CLIENT_ID: str = \"\"\n    OPENAPI_CLIENT_ID: str = \"\"\n    AUTH_POLICY_NAME: str = \"\"\n    SCOPE_DESCRIPTION: str = \"user_impersonation\"\n\n    model_config = SettingsConfigDict(\n        env_file='.env',\n        env_file_encoding='utf-8',\n        case_sensitive=True\n    )\n\nsettings = Settings()\n\napp = FastAPI(\n    swagger_ui_oauth2_redirect_url='/oauth2-redirect',\n    swagger_ui_init_oauth={\n        'usePkceWithAuthorizationCodeGrant': True,\n        'clientId': settings.OPENAPI_CLIENT_ID,\n    },\n)\n\nif settings.BACKEND_CORS_ORIGINS:\n    app.add_middleware(\n        CORSMiddleware,\n        allow_origins=[str(origin) for origin in settings.BACKEND_CORS_ORIGINS],\n        allow_credentials=True,\n        allow_methods=['*'],\n        allow_headers=['*'],\n    )\n\n\n@app.get(\"/\")\nasync def root():\n    return {\"message\": \"Hello World\"}\n\n\nif __name__ == '__main__':\n    uvicorn.run('main:app', reload=True)\n"})}),"\n",(0,i.jsxs)(e.p,{children:["The ",(0,i.jsx)(e.code,{children:"swagger_ui_oauth2_redirect_url"})," setting for redirect should be as configured in Azure Entra ID.\nThe ",(0,i.jsx)(e.code,{children:"swagger_ui_init_oauth"})," are standard mapped OpenAPI properties. You can find documentation about them ",(0,i.jsx)(e.a,{href:"https://swagger.io/docs/open-source-tools/swagger-ui/usage/oauth2/",children:"here"})]}),"\n",(0,i.jsxs)(e.p,{children:["We've used two flags: ",(0,i.jsx)(e.code,{children:"usePkceWithAuthorizationCodeGrant"}),", which is the authentication flow.\n",(0,i.jsx)(e.code,{children:"clientId"})," is our application Client ID, which will autofill a field for the end users later."]}),"\n",(0,i.jsx)(e.h2,{id:"implementing-fastapi-azure-auth",children:"Implementing FastAPI-Azure-Auth"}),"\n",(0,i.jsx)(e.p,{children:"Now, the fun part begins! \ud83d\ude80"}),"\n",(0,i.jsxs)(e.p,{children:["Import the ",(0,i.jsx)(e.code,{children:"B2CMultiTenantAuthorizationCodeBearer"})," from ",(0,i.jsx)(e.code,{children:"fastapi_azure_auth"})," and configure it. You can use the ",(0,i.jsx)(e.code,{children:"Settings"})," class to compute the required fields:"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",metastring:'{4,6,17-42,70-77} title="main.py"',children:"import uvicorn\nfrom fastapi import FastAPI\nfrom fastapi.middleware.cors import CORSMiddleware\nfrom pydantic import AnyHttpUrl, computed_field\nfrom pydantic_settings import BaseSettings, SettingsConfigDict\nfrom fastapi_azure_auth import B2CMultiTenantAuthorizationCodeBearer\n\n\nclass Settings(BaseSettings):\n    BACKEND_CORS_ORIGINS: list[str | AnyHttpUrl] = ['http://localhost:8000']\n    TENANT_NAME: str = \"\"\n    APP_CLIENT_ID: str = \"\"\n    OPENAPI_CLIENT_ID: str = \"\"\n    AUTH_POLICY_NAME: str = \"\"\n    SCOPE_DESCRIPTION: str = \"user_impersonation\"\n\n    @computed_field\n    @property\n    def SCOPE_NAME(self) -> str:\n        return f'https://{self.TENANT_NAME}.onmicrosoft.com/{self.APP_CLIENT_ID}/{self.SCOPE_DESCRIPTION}'\n\n    @computed_field\n    @property\n    def SCOPES(self) -> dict:\n        return {\n            self.SCOPE_NAME: self.SCOPE_DESCRIPTION\n        }\n\n    @computed_field\n    @property\n    def OPENID_CONFIG_URL(self) -> str:\n        return f'https://{self.TENANT_NAME}.b2clogin.com/{self.TENANT_NAME}.onmicrosoft.com/{self.AUTH_POLICY_NAME}/v2.0/.well-known/openid-configuration'\n\n    @computed_field\n    @property\n    def OPENAPI_AUTHORIZATION_URL(self) -> str:\n        return f'https://{self.TENANT_NAME}.b2clogin.com/{self.TENANT_NAME}.onmicrosoft.com/{self.AUTH_POLICY_NAME}/oauth2/v2.0/authorize'\n\n    @computed_field\n    @property\n    def OPENAPI_TOKEN_URL(self) -> str:\n        return f'https://{self.TENANT_NAME}.b2clogin.com/{self.TENANT_NAME}.onmicrosoft.com/{self.AUTH_POLICY_NAME}/oauth2/v2.0/token'\n\n    model_config = SettingsConfigDict(\n        env_file='.env',\n        env_file_encoding='utf-8',\n        case_sensitive=True\n    )\n\nsettings = Settings()\n\napp = FastAPI(\n    swagger_ui_oauth2_redirect_url='/oauth2-redirect',\n    swagger_ui_init_oauth={\n        'usePkceWithAuthorizationCodeGrant': True,\n        'clientId': settings.OPENAPI_CLIENT_ID,\n        'scopes': settings.SCOPE_NAME,\n    },\n)\n\nif settings.BACKEND_CORS_ORIGINS:\n    app.add_middleware(\n        CORSMiddleware,\n        allow_origins=[str(origin) for origin in settings.BACKEND_CORS_ORIGINS],\n        allow_credentials=True,\n        allow_methods=['*'],\n        allow_headers=['*'],\n    )\n\nazure_scheme = B2CMultiTenantAuthorizationCodeBearer(\n    app_client_id=settings.APP_CLIENT_ID,\n    openid_config_url=settings.OPENID_CONFIG_URL,\n    openapi_authorization_url=settings.OPENAPI_AUTHORIZATION_URL,\n    openapi_token_url=settings.OPENAPI_TOKEN_URL,\n    scopes=settings.SCOPES,\n    validate_iss=False,\n)\n\n\n@app.get(\"/\")\nasync def root():\n    return {\"message\": \"Hello World\"}\n\n\nif __name__ == '__main__':\n    uvicorn.run('main:app', reload=True)\n"})}),"\n",(0,i.jsxs)(e.p,{children:["We pass the ",(0,i.jsx)(e.code,{children:"app_client_id="})," to be our Backend application ID.\nThe ",(0,i.jsx)(e.code,{children:"openid_config_url"})," is composed of our Tenant Name and the Policy name given as a user flow. Lastly our\nscope(s) are composed of the Tenant name as well as the Backend application ID. We'll get back to the scopes later."]}),"\n",(0,i.jsx)(e.h2,{id:"add-loading-of-openid-configuration-on-startup",children:"Add loading of OpenID Configuration on startup"}),"\n",(0,i.jsxs)(e.p,{children:["By adding ",(0,i.jsx)(e.code,{children:"on_event('startup')"})," we're able to load the OpenID configuration immediately, instead of doing it when\nthe first user authenticates. This isn't required, but makes things a bit quicker. When 24 hours has passed, the\nconfiguration will be considered out of date, and update when a user does a request. You can use\n",(0,i.jsx)(e.a,{href:"https://fastapi.tiangolo.com/tutorial/background-tasks/",children:"background tasks"})," to refresh it before that happens if you'd like."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",metastring:'{7,8,54-60} title="main.py"',children:"import uvicorn\nfrom fastapi import FastAPI\nfrom fastapi.middleware.cors import CORSMiddleware\nfrom pydantic import AnyHttpUrl, computed_field\nfrom pydantic_settings import BaseSettings, SettingsConfigDict\nfrom fastapi_azure_auth import B2CMultiTenantAuthorizationCodeBearer\nfrom contextlib import asynccontextmanager\nfrom typing import AsyncGenerator\n\n\nclass Settings(BaseSettings):\n    BACKEND_CORS_ORIGINS: list[str | AnyHttpUrl] = ['http://localhost:8000']\n    TENANT_NAME: str = \"\"\n    APP_CLIENT_ID: str = \"\"\n    OPENAPI_CLIENT_ID: str = \"\"\n    AUTH_POLICY_NAME: str = \"\"\n    SCOPE_DESCRIPTION: str = \"user_impersonation\"\n\n    @computed_field\n    @property\n    def SCOPE_NAME(self) -> str:\n        return f'https://{self.TENANT_NAME}.onmicrosoft.com/{self.APP_CLIENT_ID}/{self.SCOPE_DESCRIPTION}'\n\n    @computed_field\n    @property\n    def SCOPES(self) -> dict:\n        return {\n            self.SCOPE_NAME: self.SCOPE_DESCRIPTION\n        }\n\n    @computed_field\n    @property\n    def OPENID_CONFIG_URL(self) -> str:\n        return f'https://{self.TENANT_NAME}.b2clogin.com/{self.TENANT_NAME}.onmicrosoft.com/{self.AUTH_POLICY_NAME}/v2.0/.well-known/openid-configuration'\n\n    @computed_field\n    @property\n    def OPENAPI_AUTHORIZATION_URL(self) -> str:\n        return f'https://{self.TENANT_NAME}.b2clogin.com/{self.TENANT_NAME}.onmicrosoft.com/{self.AUTH_POLICY_NAME}/oauth2/v2.0/authorize'\n\n    @computed_field\n    @property\n    def OPENAPI_TOKEN_URL(self) -> str:\n        return f'https://{self.TENANT_NAME}.b2clogin.com/{self.TENANT_NAME}.onmicrosoft.com/{self.AUTH_POLICY_NAME}/oauth2/v2.0/token'\n\n    model_config = SettingsConfigDict(\n        env_file='.env',\n        env_file_encoding='utf-8',\n        case_sensitive=True\n    )\n\nsettings = Settings()\n\n@asynccontextmanager\nasync def lifespan(app: FastAPI) -> AsyncGenerator[None, None]:\n    \"\"\"\n    Load OpenID config on startup.\n    \"\"\"\n    await azure_scheme.openid_config.load_config()\n    yield\n\napp = FastAPI(\n    swagger_ui_oauth2_redirect_url='/oauth2-redirect',\n    swagger_ui_init_oauth={\n        'usePkceWithAuthorizationCodeGrant': True,\n        'clientId': settings.OPENAPI_CLIENT_ID,\n        'scopes': settings.SCOPE_NAME,\n    },\n)\n\nif settings.BACKEND_CORS_ORIGINS:\n    app.add_middleware(\n        CORSMiddleware,\n        allow_origins=[str(origin) for origin in settings.BACKEND_CORS_ORIGINS],\n        allow_credentials=True,\n        allow_methods=['*'],\n        allow_headers=['*'],\n    )\n\nazure_scheme = B2CMultiTenantAuthorizationCodeBearer(\n    app_client_id=settings.APP_CLIENT_ID,\n    openid_config_url=settings.OPENID_CONFIG_URL,\n    openapi_authorization_url=settings.OPENAPI_AUTHORIZATION_URL,\n    openapi_token_url=settings.OPENAPI_TOKEN_URL,\n    scopes=settings.SCOPES,\n    validate_iss=False,\n)\n\n\n@app.get(\"/\")\nasync def root():\n    return {\"message\": \"Hello World\"}\n\n\nif __name__ == '__main__':\n    uvicorn.run('main:app', reload=True)\n"})}),"\n",(0,i.jsx)(e.h2,{id:"adding-authentication-to-our-view",children:"Adding authentication to our view"}),"\n",(0,i.jsxs)(e.p,{children:["There's two ways of adding dependencies in FastAPI. You can use ",(0,i.jsx)(e.code,{children:"Depends()"})," or ",(0,i.jsx)(e.code,{children:"Security()"}),". ",(0,i.jsx)(e.code,{children:"Security()"})," has an extra\nproperty called ",(0,i.jsx)(e.code,{children:"scopes"}),". ",(0,i.jsx)(e.code,{children:"FastAPI-Azure-Auth"})," support both, but if you use ",(0,i.jsx)(e.code,{children:"Security()"})," you can also lock down your API\nviews based on the scope."]}),"\n",(0,i.jsx)(e.p,{children:"Let's do that:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",metastring:'{2,89} title="main.py"',children:"import uvicorn\nfrom fastapi import FastAPI, Security\nfrom fastapi.middleware.cors import CORSMiddleware\nfrom pydantic import AnyHttpUrl, computed_field\nfrom pydantic_settings import BaseSettings, SettingsConfigDict\nfrom fastapi_azure_auth import B2CMultiTenantAuthorizationCodeBearer\nfrom contextlib import asynccontextmanager\nfrom typing import AsyncGenerator\n\n\nclass Settings(BaseSettings):\n    BACKEND_CORS_ORIGINS: list[str | AnyHttpUrl] = ['http://localhost:8000']\n    TENANT_NAME: str = \"\"\n    APP_CLIENT_ID: str = \"\"\n    OPENAPI_CLIENT_ID: str = \"\"\n    AUTH_POLICY_NAME: str = \"\"\n    SCOPE_DESCRIPTION: str = \"user_impersonation\"\n\n    @computed_field\n    @property\n    def SCOPE_NAME(self) -> str:\n        return f'https://{self.TENANT_NAME}.onmicrosoft.com/{self.APP_CLIENT_ID}/{self.SCOPE_DESCRIPTION}'\n\n    @computed_field\n    @property\n    def SCOPES(self) -> dict:\n        return {\n            self.SCOPE_NAME: self.SCOPE_DESCRIPTION\n        }\n\n    @computed_field\n    @property\n    def OPENID_CONFIG_URL(self) -> str:\n        return f'https://{self.TENANT_NAME}.b2clogin.com/{self.TENANT_NAME}.onmicrosoft.com/{self.AUTH_POLICY_NAME}/v2.0/.well-known/openid-configuration'\n\n    @computed_field\n    @property\n    def OPENAPI_AUTHORIZATION_URL(self) -> str:\n        return f'https://{self.TENANT_NAME}.b2clogin.com/{self.TENANT_NAME}.onmicrosoft.com/{self.AUTH_POLICY_NAME}/oauth2/v2.0/authorize'\n\n    @computed_field\n    @property\n    def OPENAPI_TOKEN_URL(self) -> str:\n        return f'https://{self.TENANT_NAME}.b2clogin.com/{self.TENANT_NAME}.onmicrosoft.com/{self.AUTH_POLICY_NAME}/oauth2/v2.0/token'\n\n    model_config = SettingsConfigDict(\n        env_file='.env',\n        env_file_encoding='utf-8',\n        case_sensitive=True\n    )\n\nsettings = Settings()\n\n@asynccontextmanager\nasync def lifespan(app: FastAPI) -> AsyncGenerator[None, None]:\n    \"\"\"\n    Load OpenID config on startup.\n    \"\"\"\n    await azure_scheme.openid_config.load_config()\n    yield\n\napp = FastAPI(\n    swagger_ui_oauth2_redirect_url='/oauth2-redirect',\n    swagger_ui_init_oauth={\n        'usePkceWithAuthorizationCodeGrant': True,\n        'clientId': settings.OPENAPI_CLIENT_ID,\n        'scopes': settings.SCOPE_NAME,\n    },\n)\n\nif settings.BACKEND_CORS_ORIGINS:\n    app.add_middleware(\n        CORSMiddleware,\n        allow_origins=[str(origin) for origin in settings.BACKEND_CORS_ORIGINS],\n        allow_credentials=True,\n        allow_methods=['*'],\n        allow_headers=['*'],\n    )\n\nazure_scheme = B2CMultiTenantAuthorizationCodeBearer(\n    app_client_id=settings.APP_CLIENT_ID,\n    openid_config_url=settings.OPENID_CONFIG_URL,\n    openapi_authorization_url=settings.OPENAPI_AUTHORIZATION_URL,\n    openapi_token_url=settings.OPENAPI_TOKEN_URL,\n    scopes=settings.SCOPES,\n    validate_iss=False,\n)\n\n@app.get(\"/\", dependencies=[Security(azure_scheme)])\nasync def root():\n    return {\"message\": \"Hello World\"}\n\n\nif __name__ == '__main__':\n    uvicorn.run('main:app', reload=True)\n"})}),"\n",(0,i.jsx)(e.h2,{id:"testing-it-out",children:"Testing it out"}),"\n",(0,i.jsxs)(e.p,{children:["Head over to your OpenAPI documentation at ",(0,i.jsx)(e.a,{href:"http://localhost:8000/docs",children:"http://localhost:8000/docs"})," and check out your API documentation.\nYou'll see a new button called ",(0,i.jsx)(e.code,{children:"Authorize"}),". Before clicking it, try out your API to see that you're unauthorized."]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.img,{alt:"fastapi_1_authorize_button",src:t(1838).A+"",width:"1481",height:"913"}),"\n",(0,i.jsx)(e.img,{alt:"fastapi_2_not_authenticated",src:t(2760).A+"",width:"495",height:"452"})]}),"\n",(0,i.jsxs)(e.p,{children:["Now, let's authenticate. Click the ",(0,i.jsx)(e.strong,{children:"Authorize"})," button. Check your scope, and leave ",(0,i.jsx)(e.code,{children:"Client secret"})," blank. You do not\nneed that with the PKCE flow."]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"fastapi_3_authenticate",src:t(3563).A+"",width:"651",height:"594"})}),"\n",(0,i.jsx)(e.p,{children:"Consent to the permissions requested:"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"fastapi_4_consent",src:t(9847).A+"",width:"441",height:"634"})}),"\n",(0,i.jsx)(e.admonition,{type:"info",children:(0,i.jsxs)(e.p,{children:["If you get a warning that your redirect URL is wrong, you're probably using ",(0,i.jsx)(e.code,{children:"127.0.0.1"})," instead of ",(0,i.jsx)(e.code,{children:"localhost"})]})}),"\n",(0,i.jsx)(e.p,{children:"Try out your API again to see that it works!"}),"\n",(0,i.jsx)(e.h3,{id:"last-thing",children:"Last thing.."}),"\n",(0,i.jsxs)(e.p,{children:["As discussed earlier, there is a ",(0,i.jsx)(e.code,{children:"scope"})," parameter to the ",(0,i.jsx)(e.code,{children:"Security()"})," version of ",(0,i.jsx)(e.code,{children:"Depends()"}),". If you'd want to lock down\nyour API to only be accessible by those with certain scopes, you can simply pass it into the dependency."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"@app.get(\"/\", dependencies=[Security(azure_scheme, scopes=['wrong_scope'])])\n"})}),"\n",(0,i.jsx)(e.p,{children:"If you do this and try out your API again, you'll see that you're denied."}),"\n",(0,i.jsx)(e.p,{children:"Your users are now safe and secure! Good luck! \ud83d\udd12\ud83d\ude80"}),"\n",(0,i.jsxs)("div",{style:{textAlign:"center"},children:[(0,i.jsx)("h4",{children:"If you like this project, please leave us a star \u2764 \ufe0f\ufe0f"}),(0,i.jsx)(o.A,{href:"https://github.com/intility/fastapi-azure-auth","data-color-scheme":"no-preference: dark_dimmed; light: dark_dimmed; dark: dark_dimmed;","data-icon":"octicon-star","data-size":"large","data-show-count":"true","aria-label":"Star intility/fastapi-azure-auth on GitHub",children:(0,i.jsx)(e.p,{children:"Star"})})]})]})}function u(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(p,{...n})}):p(n)}},1838:(n,e,t)=>{t.d(e,{A:()=>i});const i=t.p+"assets/images/fastapi_1_authorize_button-89218f631f158bcaf32c1a2a8998e4c3.png"},2760:(n,e,t)=>{t.d(e,{A:()=>i});const i=t.p+"assets/images/fastapi_2_not_authenticated-02088064907129c3e4ef1efe4a3799f3.png"},3563:(n,e,t)=>{t.d(e,{A:()=>i});const i=t.p+"assets/images/fastapi_3_authenticate-7973c5e443c1baace990fc914d6169b2.png"},9847:(n,e,t)=>{t.d(e,{A:()=>i});const i=t.p+"assets/images/fastapi_4_consent-a34723e9db6e4dff37233900773fbf50.png"}}]);
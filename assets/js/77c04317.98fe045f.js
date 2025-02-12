"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[283],{7722:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var s=t(4848),i=t(8453);const o={title:"Single-tenant settings",sidebar_position:1},r=void 0,l={id:"settings/single_tenant",title:"Single-tenant settings",description:"appclientid: str",source:"@site/docs/settings/single_tenant.mdx",sourceDirName:"settings",slug:"/settings/single_tenant",permalink:"/fastapi-azure-auth/settings/single_tenant",draft:!1,unlisted:!1,editUrl:"https://github.com/Intility/FastAPI-Azure-Auth/edit/main/docs/docs/settings/single_tenant.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Single-tenant settings",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Troubleshooting",permalink:"/fastapi-azure-auth/usage-and-faq/troubleshooting"},next:{title:"Multi-tenant settings",permalink:"/fastapi-azure-auth/settings/multi_tenant"}},d={},a=[{value:"app_client_id: <code>str</code>",id:"app_client_id-str",level:3},{value:"tenant_id: <code>str</code>",id:"tenant_id-str",level:3},{value:"allow_guest_users: <code>bool</code>",id:"allow_guest_users-bool",level:3},{value:"scopes: <code>Optional[dict[str, str]]</code>",id:"scopes-optionaldictstr-str",level:3},{value:"leeway: int",id:"leeway-int",level:3},{value:"openid_config_use_app_id: <code>bool</code>",id:"openid_config_use_app_id-bool",level:3},{value:"openapi_authorization_url: <code>Optional[str]</code>",id:"openapi_authorization_url-optionalstr",level:3},{value:"openapi_token_url: <code>Optional[str]</code>",id:"openapi_token_url-optionalstr",level:3},{value:"openapi_description: <code>Optional[str]</code>",id:"openapi_description-optionalstr",level:3},{value:"auto_error: <code>bool</code>",id:"auto_error-bool",level:3}];function c(e){const n={a:"a",code:"code",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h3,{id:"app_client_id-str",children:["app_client_id: ",(0,s.jsx)(n.code,{children:"str"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Default"}),": ",(0,s.jsx)(n.code,{children:"None"})]}),"\n",(0,s.jsxs)(n.p,{children:["Your applications client ID. This will be the ",(0,s.jsx)(n.code,{children:"Web app"})," in Azure Entra ID"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.h3,{id:"tenant_id-str",children:["tenant_id: ",(0,s.jsx)(n.code,{children:"str"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"None"})]}),"\n",(0,s.jsx)(n.p,{children:"The Azure Tenant ID"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.h3,{id:"allow_guest_users-bool",children:["allow_guest_users: ",(0,s.jsx)(n.code,{children:"bool"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Default"}),": ",(0,s.jsx)(n.code,{children:"False"})]}),"\n",(0,s.jsxs)(n.p,{children:["Whether to allow guest users in the tenant. Defaults to ",(0,s.jsx)(n.code,{children:"False"}),". See the\n",(0,s.jsx)(n.a,{href:"/fastapi-azure-auth/usage-and-faq/guest_users",children:"guest user documentation"}),"\nfor more details"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.h3,{id:"scopes-optionaldictstr-str",children:["scopes: ",(0,s.jsx)(n.code,{children:"Optional[dict[str, str]]"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"None"})]}),"\n",(0,s.jsx)(n.p,{children:"Scopes, these are the ones you've configured in Azure Entra ID. Key is scope, value is a description."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"{\n    f'api://{settings.APP_CLIENT_ID}/user_impersonation': 'user_impersonation',\n}\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"leeway-int",children:"leeway: int"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"0"})]}),"\n",(0,s.jsx)(n.p,{children:'By adding leeway, you define a tolerance window in terms of seconds, allowing the token to be\nconsidered valid even if it falls within the leeway time before or after the "exp" or "nbf" times.'}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.h3,{id:"openid_config_use_app_id-bool",children:["openid_config_use_app_id: ",(0,s.jsx)(n.code,{children:"bool"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"False"})]}),"\n",(0,s.jsxs)(n.p,{children:["Set this to True if you're using claims-mapping. If you're unsure, leave at False. Read more in the\n",(0,s.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-protocols-oidc#sample-response",children:"Azure docs"}),"."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.h3,{id:"openapi_authorization_url-optionalstr",children:["openapi_authorization_url: ",(0,s.jsx)(n.code,{children:"Optional[str]"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"None"})]}),"\n",(0,s.jsx)(n.p,{children:"Override OpenAPI authorization URL"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.h3,{id:"openapi_token_url-optionalstr",children:["openapi_token_url: ",(0,s.jsx)(n.code,{children:"Optional[str]"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"None"})]}),"\n",(0,s.jsx)(n.p,{children:"Override OpenAPI token URL"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.h3,{id:"openapi_description-optionalstr",children:["openapi_description: ",(0,s.jsx)(n.code,{children:"Optional[str]"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"None"})]}),"\n",(0,s.jsx)(n.p,{children:"Override OpenAPI description"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.h3,{id:"auto_error-bool",children:["auto_error: ",(0,s.jsx)(n.code,{children:"bool"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"True"})]}),"\n",(0,s.jsx)(n.p,{children:"Set this to False if you are using multiple authentication libraries.  This will return rather than\nthrowing authentication exceptions."})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var s=t(6540);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);
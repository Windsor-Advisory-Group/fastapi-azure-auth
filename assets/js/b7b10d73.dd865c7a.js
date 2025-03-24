"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["377"],{4332:function(e,t,n){n.r(t),n.d(t,{default:()=>d,frontMatter:()=>i,metadata:()=>s,assets:()=>u,toc:()=>p,contentTitle:()=>o});var s=JSON.parse('{"id":"usage-and-faq/testing","title":"Testing","description":"See issue 81 for more examples.","source":"@site/docs/usage-and-faq/testing.mdx","sourceDirName":"usage-and-faq","slug":"/usage-and-faq/testing","permalink":"/fastapi-azure-auth/usage-and-faq/testing","draft":false,"unlisted":false,"editUrl":"https://github.com/Intility/FastAPI-Azure-Auth/edit/main/docs/docs/usage-and-faq/testing.mdx","tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"Testing","sidebar_position":7},"sidebar":"tutorialSidebar","previous":{"title":"Approval required on login","permalink":"/fastapi-azure-auth/usage-and-faq/admin_consent_when_logging_in"},"next":{"title":"Troubleshooting","permalink":"/fastapi-azure-auth/usage-and-faq/troubleshooting"}}'),a=n("5893"),r=n("65");let i={title:"Testing",sidebar_position:7},o=void 0,u={},p=[];function c(e){let t={a:"a",code:"code",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["See issue ",(0,a.jsx)(t.a,{href:"https://github.com/Intility/fastapi-azure-auth/issues/81",children:"81"})," for more examples."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",metastring:'title="test_example.py"',children:'import pytest\nfrom httpx import AsyncClient\nfrom demo_project.api.dependencies import azure_scheme\nfrom fastapi import Request\nfrom fastapi_azure_auth.user import User\nfrom demo_project.main import app as fastapi_app\n\n@pytest.fixture\nasync def normal_user_client():\n    async def mock_normal_user(request: Request):\n        user = User(\n            claims={},\n            preferred_username="NormalUser",\n            roles=["role1"],\n            aud="aud",\n            tid="tid",\n            access_token="123",\n            is_guest=False,\n            iat=1537231048,\n            nbf=1537231048,\n            exp=1537234948,\n            iss="iss",\n            aio="aio",\n            sub="sub",\n            oid="oid",\n            uti="uti",\n            rh="rh",\n            ver="2.0",\n        )\n        request.state.user = user\n        return user\n\n    fastapi_app.dependency_overrides[azure_scheme] = mock_normal_user\n    async with AsyncClient(app=fastapi_app, base_url=\'http://test\') as ac:\n        yield ac\n'})})]})}function d(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},65:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return i}});var s=n(7294);let a={},r=s.createContext(a);function i(e){let t=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);
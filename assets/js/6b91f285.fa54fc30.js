"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[168],{6150:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>x,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var s=n(5893),r=n(1151);const i={sidebar_position:3},o="Tunable Text-to-text",l={id:"text-to-text/tunable",title:"Tunable Text-to-text",description:"Tunable text-to-text estimators are estimators that can be tuned to perform a variety of tasks, including but not limited to text summarization, question answering, and text translation. These estimators use the provided data as-is, without any additional preprocessing, or constructing prompts. While this approach allows for more flexibility, it is the user's responsibility to ensure that the data is formatted correctly.",source:"@site/docs/text-to-text/tunable.md",sourceDirName:"text-to-text",slug:"/text-to-text/tunable",permalink:"/scikit-llm-docs/docs/text-to-text/tunable",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Text Translation",permalink:"/scikit-llm-docs/docs/text-to-text/text-translation"},next:{title:"Text Vectorization",permalink:"/scikit-llm-docs/docs/text-vectorization"}},d={},a=[{value:"API Reference",id:"api-reference",level:2},{value:"TunableGPTText2Text",id:"tunablegpttext2text",level:3},{value:"TunableVertexText2Text",id:"tunablevertextext2text",level:3}];function c(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"tunable-text-to-text",children:"Tunable Text-to-text"}),"\n",(0,s.jsx)(t.p,{children:"Tunable text-to-text estimators are estimators that can be tuned to perform a variety of tasks, including but not limited to text summarization, question answering, and text translation. These estimators use the provided data as-is, without any additional preprocessing, or constructing prompts. While this approach allows for more flexibility, it is the user's responsibility to ensure that the data is formatted correctly."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'from skllm.models.gpt.text2text.tunable import TunableGPTText2Text\n\nmodel = TunableGPTText2Text(\n        base_model = "gpt-3.5-turbo-0613",\n        n_epochs = None, # int or None. When None, will be determined automatically by OpenAI\n        system_msg = "You are a text processing model."\n)\n\nmodel.fit(X_train, y_train) # y_train is any desired output text\nout = model.transform(X_test)\n'})}),"\n",(0,s.jsx)(t.h2,{id:"api-reference",children:"API Reference"}),"\n",(0,s.jsx)(t.p,{children:"The following API reference only lists the parameters needed for the initialization of the estimator. The remaining methods follow the syntax of a scikit-learn transformer."}),"\n",(0,s.jsx)(t.h3,{id:"tunablegpttext2text",children:"TunableGPTText2Text"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"from skllm.models.gpt.text2text.tunable import TunableGPTText2Text\n"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Parameter"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Type"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Description"})})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"base_model"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"str"})}),(0,s.jsx)(t.td,{children:'Model to use, by default "gpt-3.5-turbo-0613".'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"key"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"Optional[str]"})}),(0,s.jsx)(t.td,{children:"Estimator-specific API key; if None, retrieved from the global config, by default None."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"org"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"Optional[str]"})}),(0,s.jsx)(t.td,{children:"Estimator-specific ORG key; if None, retrieved from the global config, by default None."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"n_epochs"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"Optional[int]"})}),(0,s.jsx)(t.td,{children:"Number of epochs; if None, determined automatically; by default None."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"custom_suffix"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"Optional[str]"})}),(0,s.jsx)(t.td,{children:'Custom suffix of the tuned model, used for naming purposes only, by default "skllm".'})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"tunablevertextext2text",children:"TunableVertexText2Text"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"from skllm.models.vertex.text2text.tunable import TunableVertexText2Text\n"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Parameter"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Type"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Description"})})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"base_model"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"str"})}),(0,s.jsx)(t.td,{children:'Model to use, by default "text-bison@002".'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"n_update_steps"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"int"})}),(0,s.jsx)(t.td,{children:"Number of epochs, by default 1."})]})]})]})]})}function x(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>o});var s=n(7294);const r={},i=s.createContext(r);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);
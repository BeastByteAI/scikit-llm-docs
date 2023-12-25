"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[739],{3715:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(5893),i=r(1151);const o={sidebar_position:4},s="Text Vectorization",c={id:"text-vectorization",title:"Text Vectorization",description:"LLMs can be used solely for data preprocessing by embedding a chunk of text of arbitrary length to a fixed-dimensional vector, that can be further used with virtually any model (e.g. classification, regression, clustering, etc.).",source:"@site/docs/text-vectorization.md",sourceDirName:".",slug:"/text-vectorization",permalink:"/docs/text-vectorization",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Tunable Text-to-text",permalink:"/docs/text-to-text/tunable"}},d={},l=[{value:"API Reference",id:"api-reference",level:2},{value:"GPTVectorizer",id:"gptvectorizer",level:3}];function a(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"text-vectorization",children:"Text Vectorization"}),"\n",(0,n.jsx)(t.p,{children:"LLMs can be used solely for data preprocessing by embedding a chunk of text of arbitrary length to a fixed-dimensional vector, that can be further used with virtually any model (e.g. classification, regression, clustering, etc.)."}),"\n",(0,n.jsx)(t.p,{children:"Example 1: Embedding the text"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'from skllm.models.gpt.vectorization import GPTVectorizer\n\nvectorizer = GPTVectorizer(batch_size=2)\nX = vectorizer.fit_transform(["This is a text", "This is another text"])\n'})}),"\n",(0,n.jsx)(t.p,{children:"Example 2: Combining the vectorizer with the XGBoost classifier in a scikit-learn pipeline"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'from sklearn.pipeline import Pipeline\nfrom sklearn.preprocessing import LabelEncoder\nfrom xgboost import XGBClassifier\n\nle = LabelEncoder()\ny_train_encoded = le.fit_transform(y_train)\ny_test_encoded = le.transform(y_test)\n\nsteps = [("GPT", GPTVectorizer()), ("Clf", XGBClassifier())]\nclf = Pipeline(steps)\nclf.fit(X_train, y_train_encoded)\nyh = clf.predict(X_test)\n'})}),"\n",(0,n.jsx)(t.h2,{id:"api-reference",children:"API Reference"}),"\n",(0,n.jsx)(t.p,{children:"The following API reference only lists the parameters needed for the initialization of the estimator. The remaining methods follow the syntax of a scikit-learn transformer."}),"\n",(0,n.jsx)(t.h3,{id:"gptvectorizer",children:"GPTVectorizer"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"from skllm.models.gpt.vectorization import GPTVectorizer\n"})}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"Parameter"})}),(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"Type"})}),(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"Description"})})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"model"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"str"})}),(0,n.jsx)(t.td,{children:'Model to use, by default "text-embedding-ada-002".'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"batch_size"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"int"})}),(0,n.jsx)(t.td,{children:"Number of samples per request, by default 1."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"key"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"Optional[str]"})}),(0,n.jsx)(t.td,{children:"Estimator-specific API key; if None, retrieved from the global config, by default None."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"org"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"Optional[str]"})}),(0,n.jsx)(t.td,{children:"Estimator-specific ORG key; if None, retrieved from the global config, by default None."})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},1151:(e,t,r)=>{r.d(t,{Z:()=>c,a:()=>s});var n=r(7294);const i={},o=n.createContext(i);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);
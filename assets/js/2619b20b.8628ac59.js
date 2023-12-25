"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[909],{5882:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>n,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=s(5893),l=s(1151);const r={sidebar_position:1},n="Zero-Shot Text Classification",o={id:"classification/zero-shot-classification",title:"Zero-Shot Text Classification",description:"One of the powerful features of LLMs is the ability to perform text classification without being re-trained. For that, the only requirement is that the labels must be descriptive.",source:"@site/docs/classification/zero-shot-classification.md",sourceDirName:"classification",slug:"/classification/zero-shot-classification",permalink:"/docs/classification/zero-shot-classification",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Text Classification",permalink:"/docs/category/text-classification"},next:{title:"Few-Shot Text Classification",permalink:"/docs/classification/few-show-text-classification"}},d={},c=[{value:"API Reference",id:"api-reference",level:2},{value:"ZeroShotGPTClassifier",id:"zeroshotgptclassifier",level:3},{value:"MultiLabelZeroShotGPTClassifier",id:"multilabelzeroshotgptclassifier",level:3},{value:"ZeroShotVertexClassifier",id:"zeroshotvertexclassifier",level:3},{value:"MultiLabelZeroShotVertexClassifier",id:"multilabelzeroshotvertexclassifier",level:3}];function a(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"zero-shot-text-classification",children:"Zero-Shot Text Classification"}),"\n",(0,i.jsx)(t.p,{children:"One of the powerful features of LLMs is the ability to perform text classification without being re-trained. For that, the only requirement is that the labels must be descriptive."}),"\n",(0,i.jsxs)(t.p,{children:["For example, let's consider a task of classifying a text into one of the following categories: [positive, negative, neutral]. We will use a class ",(0,i.jsx)(t.code,{children:"ZeroShotGPTClassifier"})," and a regular scikit-learn API to perform the classification:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:'from skllm.models.gpt.classification.zero_shot import ZeroShotGPTClassifier\nfrom skllm.datasets import get_classification_dataset\n\n# demo sentiment analysis dataset\n# labels: positive, negative, neutral\nX, y = get_classification_dataset()\n\nclf = ZeroShotGPTClassifier(model="gpt-3.5-turbo")\nclf.fit(X,y)\nlabels = clf.predict(X)\n'})}),"\n",(0,i.jsx)(t.p,{children:"However, in the zero-shot setting, the training data is not required as it is only used for the extraction of the candidate labels. Therefore, it is sufficient to manually provide a list of candidate labels:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:'from skllm.models.gpt.classification.zero_shot import ZeroShotGPTClassifier\nfrom skllm.datasets import get_classification_dataset\n\nX, _ = get_classification_dataset()\n\nclf = ZeroShotGPTClassifier()\nclf.fit(None, ["positive", "negative", "neutral"])\nlabels = clf.predict(X)\n'})}),"\n",(0,i.jsx)(t.p,{children:"Additionally, it is possible to perform the classification in a multi-label setting, where multiple labels can be assigned to a single text at a same time:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:'from skllm.models.gpt.classification.zero_shot import MultiLabelZeroShotGPTClassifier\nfrom skllm.datasets import get_multilabel_classification_dataset\n\nX, _ = get_multilabel_classification_dataset()\ncandidate_labels = [\n    "Quality",\n    "Price",\n    "Delivery",\n    "Service",\n    "Product Variety",\n    "Customer Support",\n    "Packaging",\n    "User Experience",\n    "Return Policy",\n    "Product Information",\n]\nclf = MultiLabelZeroShotGPTClassifier(max_labels=3)\nclf.fit(None, [candidate_labels])\nlabels = clf.predict(X)\n'})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Note:"})," Unlike in a typical supervised setting, the performance of a zero-shot classifier greatly depends on how the label itself is structured. It has to be expressed in natural language, be descriptive and self-explanatory. For example, in the previous semantic classification task, it could be beneficial to transform a label from ",(0,i.jsx)(t.code,{children:"<<SEMANTICS>>"})," to ",(0,i.jsx)(t.code,{children:"the semantics of the provided text is <<SEMANTICS>>"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"api-reference",children:"API Reference"}),"\n",(0,i.jsx)(t.p,{children:"The following API reference only lists the parameters needed for the initialization of the estimator. The remaining methods follow the syntax of a scikit-learn classifier."}),"\n",(0,i.jsx)(t.h3,{id:"zeroshotgptclassifier",children:"ZeroShotGPTClassifier"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"from skllm.models.gpt.classification.zero_shot import ZeroShotGPTClassifier\n"})}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:(0,i.jsx)(t.strong,{children:"Parameter"})}),(0,i.jsx)(t.th,{children:(0,i.jsx)(t.strong,{children:"Type"})}),(0,i.jsx)(t.th,{children:(0,i.jsx)(t.strong,{children:"Description"})})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"model"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"str"})}),(0,i.jsx)(t.td,{children:'Model to use, by default "gpt-3.5-turbo".'})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"default_label"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"str"})}),(0,i.jsx)(t.td,{children:'Default label for failed prediction; if "Random" -> selects randomly based on class frequencies, by default "Random".'})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"prompt_template"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Optional[str]"})}),(0,i.jsx)(t.td,{children:"Custom prompt template to use, by default None."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"key"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Optional[str]"})}),(0,i.jsx)(t.td,{children:"Estimator-specific API key; if None, retrieved from the global config, by default None."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"org"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Optional[str]"})}),(0,i.jsx)(t.td,{children:"Estimator-specific ORG key; if None, retrieved from the global config, by default None."})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"multilabelzeroshotgptclassifier",children:"MultiLabelZeroShotGPTClassifier"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"from skllm.models.gpt.classification.zero_shot import MultiLabelZeroShotGPTClassifier\n"})}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:(0,i.jsx)(t.strong,{children:"Parameter"})}),(0,i.jsx)(t.th,{children:(0,i.jsx)(t.strong,{children:"Type"})}),(0,i.jsx)(t.th,{children:(0,i.jsx)(t.strong,{children:"Description"})})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"model"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"str"})}),(0,i.jsx)(t.td,{children:'Model to use, by default "gpt-3.5-turbo".'})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"default_label"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"str"})}),(0,i.jsx)(t.td,{children:'Default label for failed prediction; if "Random" -> selects randomly based on class frequencies, by default "Random".'})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"max_labels"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Optional[int]"})}),(0,i.jsx)(t.td,{children:"Maximum labels per sample, by default 5."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"prompt_template"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Optional[str]"})}),(0,i.jsx)(t.td,{children:"Custom prompt template to use, by default None."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"key"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Optional[str]"})}),(0,i.jsx)(t.td,{children:"Estimator-specific API key; if None, retrieved from the global config, by default None."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"org"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Optional[str]"})}),(0,i.jsx)(t.td,{children:"Estimator-specific ORG key; if None, retrieved from the global config, by default None."})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"zeroshotvertexclassifier",children:"ZeroShotVertexClassifier"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"from skllm.models.vertex.classification.zero_shot import ZeroShotVertexClassifier\n"})}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:(0,i.jsx)(t.strong,{children:"Parameter"})}),(0,i.jsx)(t.th,{children:(0,i.jsx)(t.strong,{children:"Type"})}),(0,i.jsx)(t.th,{children:(0,i.jsx)(t.strong,{children:"Description"})})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"model"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"str"})}),(0,i.jsx)(t.td,{children:'Model to use, by default "text-bison@002".'})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"default_label"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"str"})}),(0,i.jsx)(t.td,{children:'Default label for failed prediction; if "Random" -> selects randomly based on class frequencies, by default "Random".'})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"prompt_template"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Optional[str]"})}),(0,i.jsx)(t.td,{children:"Custom prompt template to use, by default None."})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"multilabelzeroshotvertexclassifier",children:"MultiLabelZeroShotVertexClassifier"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"from skllm.models.vertex.classification.zero_shot import MultiLabelZeroShotVertexClassifier\n"})}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:(0,i.jsx)(t.strong,{children:"Parameter"})}),(0,i.jsx)(t.th,{children:(0,i.jsx)(t.strong,{children:"Type"})}),(0,i.jsx)(t.th,{children:(0,i.jsx)(t.strong,{children:"Description"})})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"model"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"str"})}),(0,i.jsx)(t.td,{children:'Model to use, by default "text-bison@002".'})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"default_label"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"str"})}),(0,i.jsx)(t.td,{children:'Default label for failed prediction; if "Random" -> selects randomly based on class frequencies, by default "Random".'})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"max_labels"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Optional[int]"})}),(0,i.jsx)(t.td,{children:"Maximum labels per sample, by default 5."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"prompt_template"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Optional[str]"})}),(0,i.jsx)(t.td,{children:"Custom prompt template to use, by default None."})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>o,a:()=>n});var i=s(7294);const l={},r=i.createContext(l);function n(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:n(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);
/*! For license information please see 614.e99f78261185ef894c24.js.LICENSE.txt */
(self.webpackChunkpayload_blog_typescript=self.webpackChunkpayload_blog_typescript||[]).push([[614],{5926:(e,t,r)=>{var n=r(8738);function a(e,t){var r=(t=t||{}).delimiter||".",a=t.maxDepth,s=t.coercion,i=t.filters,o={};return function e(l,c,u){u=u||1,Object.keys(l).forEach((function(d){var f=l[d],p=c?c+r+d:d;const m=function(e,t){if(!s)return t;var r=t;return s.forEach((function(t){r=t.test(e,r)?t.transform(r):r})),r}(d,f);if(function(e,r,s,i){var o=Object.prototype.toString.call(e),l=t.safe&&Array.isArray(e),c=n(e);return r===e&&!l&&!c&&("[object Object]"===o||"[object Array]"===o)&&Object.keys(e).length&&(!t.maxDepth||s<a)}(f,m,u)&&!function(e,t){if(!i)return!1;var r=!1;return i.forEach((function(n){n.test(e,t)&&(r=!0)})),r}(d,f))return e(f,p,u+1);o[p]=m}))}(e),o}e.exports=a,a.flatten=a,a.unflatten=function e(t,r){var a=(r=r||{}).delimiter||".",s=r.overwrite||!1,i={};if(n(t)||"[object Object]"!==Object.prototype.toString.call(t))return t;function o(e){var t=Number(e);return isNaN(t)||-1!==e.indexOf(".")||r.object?e:t}return Object.keys(t).sort((function(e,t){return e.length-t.length})).forEach((function(n){for(var l=n.split(a),c=o(l.shift()),u=o(l[0]),d=i;void 0!==u;){var f=Object.prototype.toString.call(d[c]),p="[object Object]"===f||"[object Array]"===f;if(!s&&!p&&void 0!==d[c])return;(s&&!p||!s&&null==d[c])&&(d[c]="number"!=typeof u||r.object?{}:[]),d=d[c],l.length>0&&(c=o(l.shift()),u=o(l[0]))}d[c]=e(t[n],r)})),i}},8738:e=>{function t(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}e.exports=function(e){return null!=e&&(t(e)||function(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&t(e.slice(0,0))}(e)||!!e._isBuffer)}},1496:e=>{const t=e=>void 0===e,r=e=>Array.isArray(e),n=e=>e&&"number"==typeof e.size&&"string"==typeof e.type&&"function"==typeof e.slice,a=(e,s,i,o)=>((s=s||{}).indices=!t(s.indices)&&s.indices,s.nullsAsUndefineds=!t(s.nullsAsUndefineds)&&s.nullsAsUndefineds,s.booleansAsIntegers=!t(s.booleansAsIntegers)&&s.booleansAsIntegers,s.allowEmptyArrays=!t(s.allowEmptyArrays)&&s.allowEmptyArrays,i=i||new FormData,t(e)||(null===e?s.nullsAsUndefineds||i.append(o,""):(e=>"boolean"==typeof e)(e)?s.booleansAsIntegers?i.append(o,e?1:0):i.append(o,e):r(e)?e.length?e.forEach(((e,t)=>{const r=o+"["+(s.indices?t:"")+"]";a(e,s,i,r)})):s.allowEmptyArrays&&i.append(o+"[]",""):(e=>e instanceof Date)(e)?i.append(o,e.toISOString()):!(e=>e===Object(e))(e)||(e=>n(e)&&"string"==typeof e.name&&("object"==typeof e.lastModifiedDate||"number"==typeof e.lastModified))(e)||n(e)?i.append(o,e):Object.keys(e).forEach((t=>{const n=e[t];if(r(n))for(;t.length>2&&t.lastIndexOf("[]")===t.length-2;)t=t.substring(0,t.length-2);a(n,s,i,o?o+"["+t+"]":t)}))),i);e.exports={serialize:a}},579:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var n=r(7294);r(8477);const a=e=>{const{className:t,children:r}=e,a=["tooltip",t].filter(Boolean).join(" ");return n.createElement("aside",{className:a},r,n.createElement("span",null))}},666:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(7294),a=r(579);r(2385);const s=e=>{const{showError:t=!1,message:r="Please complete this field."}=e;return t?n.createElement(a.Z,{className:"field-error"},r):null}},4012:(e,t,r)=>{"use strict";r.d(t,{q3:()=>a,Hi:()=>s,FT:()=>i,i_:()=>o,kg:()=>l,cI:()=>c,ey:()=>u,xj:()=>d,KP:()=>f,$f:()=>p});var n=r(7294);const a=(0,n.createContext)({}),s=(0,n.createContext)({}),i=(0,n.createContext)(!1),o=(0,n.createContext)(!1),l=(0,n.createContext)(!1),c=()=>(0,n.useContext)(a),u=()=>(0,n.useContext)(s),d=()=>(0,n.useContext)(i),f=()=>(0,n.useContext)(o),p=()=>(0,n.useContext)(l)},8572:(e,t,r)=>{"use strict";r.d(t,{Z:()=>C});var n=r(7294),a=r(1496),s=r(5977),i=r(9249),o=r(9243),l=r(684),c=r(3780),u=r(4260),d=r(5926);const f=[{test:(e,t)=>{const r=Object.prototype.hasOwnProperty.call(t,"valid"),n=Object.prototype.hasOwnProperty.call(t,"value");return r&&n}}],p=(e,t)=>{const r={};if(Object.keys(e).forEach((t=>{e[t].disableFormData||(e[t].stringify?r[t]=JSON.stringify(e[t].value):r[t]=e[t].value)})),t){return(0,d.unflatten)(r,{safe:!0})}return r},m=(e,t)=>{let r=e;if(t.indexOf(".")>0){const n=t.substring(0,t.lastIndexOf(".")+1);r=Object.keys(e).reduce(((t,r)=>0===r.indexOf(n)?{...t,[r.replace(n,"")]:e[r]}:t),{})}return p(r,!0)},v=(e,t)=>{const r={...e},n={},a=t.substring(0,t.lastIndexOf(".")+1);Object.keys(e).forEach((s=>{if(0===s.indexOf(`${t}.`)){if(!e[s].ignoreWhileFlattening){const t=s.replace(a,"");n[t]=e[s],n[t].initialValue=n[t].value}delete r[s]}}));return{unflattenedRows:(0,d.unflatten)(n)[t.replace(a,"")]||[],remainingFlattenedState:r}};const g=function(e,t){switch(t.type){case"REPLACE_STATE":return t.state;case"REMOVE":{const r={...e};return delete r[t.path],r}case"REMOVE_ROW":{const{rowIndex:r,path:n}=t,{unflattenedRows:a,remainingFlattenedState:s}=v(e,n);a.splice(r,1);return{...s,...a.length>0?(0,d.flatten)({[n]:a},{filters:f}):{}}}case"ADD_ROW":{const{rowIndex:r,path:n,subFieldState:a,blockType:s}=t,{unflattenedRows:i,remainingFlattenedState:o}=v(e,n);s&&(a.blockType={value:s,initialValue:s,valid:!0}),i.splice(r+1,0,a);return{...o,...(0,d.flatten)({[n]:i},{filters:f})}}case"MOVE_ROW":{const{moveFromIndex:r,moveToIndex:n,path:a}=t,{unflattenedRows:s,remainingFlattenedState:i}=v(e,a),o=s[r];s.splice(r,1),s.splice(n,0,o);return{...i,...(0,d.flatten)({[a]:s},{filters:f})}}case"MODIFY_CONDITION":{const{path:r,result:n}=t;return Object.entries(e).reduce(((t,[a,s])=>{if(a===r||0===a.indexOf(`${r}.`)){let i=n;return i&&s.condition&&(i=s.condition(p(e),m(e,r))),{...t,[a]:{...s,passesCondition:i}}}return{...t,[a]:{...s}}}),{})}default:{const r={value:t.value,valid:t.valid,errorMessage:t.errorMessage,disableFormData:t.disableFormData,ignoreWhileFlattening:t.ignoreWhileFlattening,initialValue:t.initialValue,stringify:t.stringify,validate:t.validate,condition:t.condition,passesCondition:t.passesCondition};return{...e,[t.path]:r}}}},b={getFields:()=>({}),getField:()=>{},getData:()=>{},getSiblingData:()=>{},getDataByPath:()=>{},getUnflattenedValues:()=>({}),validateForm:()=>{},createFormData:()=>{},submit:()=>{},dispatchFields:()=>{},setModified:()=>{},setProcessing:()=>{},setSubmitted:()=>{},initialState:{},fields:{},disabled:!1},y=(e,t)=>{const r=t.substring(0,t.lastIndexOf(".")+1),n=t.split(".").pop(),a=Object.keys(e).reduce(((n,a)=>0===a.indexOf(`${t}.`)?{...n,[a.replace(r,"")]:e[a]}:n),{}),s=p(a,!0),i=(0,d.unflatten)(s);return null==i?void 0:i[n]};var h=r(692);const E=e=>{if(e)return Object.entries(e).reduce(((e,[t,r])=>({...e,[t]:{value:r,initialValue:r,valid:!0}})),{})},O={413:"Your request was too large to submit successfully."};var A=r(4012);const F="form",C=e=>{const{disabled:t,onSubmit:r,method:d,action:f,handleResponse:v,onSuccess:C,children:j,className:S,redirect:D,disableSuccessStatus:w,initialState:x,initialData:k,waitForAutocomplete:I,log:P}=e,M=(0,s.k6)(),N=(0,l.bU)(),{refreshCookie:T}=(0,o.useAuth)(),[_,R]=(0,n.useState)(!1),[V,Z]=(0,n.useState)(!1),[B,U]=(0,n.useState)(!1),[W,L]=(0,n.useState)(E(k)),q=(0,n.useRef)({});let $={};W&&($=W),x&&($=x),q.current.initialState=x;const[Y,z]=(0,n.useReducer)(g,{},(()=>$));q.current.fields=Y;const K=(0,n.useCallback)((async()=>{const e={};let t=!0;const r=Object.entries(q.current.fields).map((async([r,n])=>{const a={...n,valid:!0};if(!1!==n.passesCondition){let e=!0;"function"==typeof n.validate&&(e=await n.validate(n.value)),"string"==typeof e&&(a.errorMessage=e,a.valid=!1,t=!1)}e[r]=a}));return await Promise.all(r),z({type:"REPLACE_STATE",state:e}),t}),[q]),H=(0,n.useCallback)((async e=>{if(t)return void e.preventDefault();e.stopPropagation(),e.preventDefault(),Z(!0),I&&await(0,h.Z)(100);const n=await q.current.validateForm();if(U(!0),!n)return i.Am.error("Please correct invalid fields."),void Z(!1);if(r)return void r(Y,p(Y));const a=q.current.createFormData();try{const e=await c.E[d.toLowerCase()](f,{body:a});if(R(!1),"function"==typeof v)return void v(e);Z(!1);const t=e.headers.get("content-type"),r=t&&-1!==t.indexOf("application/json");let n={};if(r&&(n=await e.json()),e.status<400)if(U(!1),"function"==typeof C&&C(n),D){const e={pathname:D,state:{}};"object"==typeof n&&n.message&&!w&&(e.state={status:[{message:n.message,type:"success"}]}),M.push(e)}else w||i.Am.success(n.message||"Submission successful.",{autoClose:3e3});else{if(q.current={...q.current},n.message)return void i.Am.error(n.message);if(Array.isArray(n.errors)){const[e,t]=n.errors.reduce((([e,t],r)=>{const n=[],a=[];return(null==r?void 0:r.message)&&a.push(r),Array.isArray(null==r?void 0:r.data)&&r.data.forEach((e=>{(null==e?void 0:e.field)?n.push(e):a.push(e)})),[[...e,...n],[...t,...a]]}),[[],[]]);return e.forEach((e=>{var t,r;z({...(null===(r=null===(t=q.current)||void 0===t?void 0:t.fields)||void 0===r?void 0:r[e.field])||{},valid:!1,errorMessage:e.message,path:e.field})})),void t.forEach((e=>{i.Am.error(e.message||"An unknown error occurred.")}))}const t=O[e.status]||"An unknown error occurrred.";i.Am.error(t)}return}catch(e){Z(!1),i.Am.error(e)}}),[f,w,t,Y,v,M,d,r,C,D,I]),J=(0,n.useCallback)((()=>q.current.fields),[q]),G=(0,n.useCallback)((e=>q.current.fields[e]),[q]),Q=(0,n.useCallback)((()=>p(q.current.fields,!0)),[q]),X=(0,n.useCallback)((e=>m(q.current.fields,e)),[q]),ee=(0,n.useCallback)((e=>y(q.current.fields,e)),[q]),te=(0,n.useCallback)((()=>p(q.current.fields)),[q]),re=(0,n.useCallback)((()=>{const e=p(q.current.fields);return(0,a.serialize)(e,{indices:!0,nullsAsUndefineds:!1})}),[q]);q.current.dispatchFields=z,q.current.submit=H,q.current.getFields=J,q.current.getField=G,q.current.getData=Q,q.current.getSiblingData=X,q.current.getDataByPath=ee,q.current.getUnflattenedValues=te,q.current.validateForm=K,q.current.createFormData=re,q.current.setModified=R,q.current.setProcessing=Z,q.current.setSubmitted=U,q.current.disabled=t,(0,n.useEffect)((()=>{x&&(q.current={...b},z({type:"REPLACE_STATE",state:x}))}),[x]),(0,n.useEffect)((()=>{if(k){q.current={...b};const e=E(k);L(e),z({type:"REPLACE_STATE",state:e})}}),[k]),(0,u.Z)((()=>{T()}),15e3,[Y]),(0,n.useEffect)((()=>{q.current={...q.current},R(!1)}),[N]);const ne=[S,F].filter(Boolean).join(" ");return P&&console.log(Y),n.createElement("form",{noValidate:!0,onSubmit:q.current.submit,method:d,action:f,className:ne},n.createElement(A.q3.Provider,{value:q.current},n.createElement(A.Hi.Provider,{value:{fields:Y,...q.current}},n.createElement(A.FT.Provider,{value:B},n.createElement(A.i_.Provider,{value:V},n.createElement(A.kg.Provider,{value:_},j))))))}},953:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var n=r(7294);r(5765);const a=e=>{const{label:t,required:r=!1,htmlFor:a}=e;return t?n.createElement("label",{htmlFor:a,className:"field-label"},t,r&&n.createElement("span",{className:"required"},"*")):null}},6268:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(7294),a=r(4012),s=r(4346);r(5418);const i=({children:e})=>{const t=(0,a.KP)(),{disabled:r}=(0,a.cI)();return n.createElement("div",{className:"form-submit"},n.createElement(s.Z,{type:"submit",disabled:!(!t&&!r)||void 0},e))}},2524:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(7294),a=r(4012),s=r(5185);const i=e=>{const{path:t,validate:r,enableDebouncedValue:i,disableFormData:o,ignoreWhileFlattening:l,stringify:c,condition:u}=e,d=(0,a.cI)(),f=(0,a.xj)(),p=(0,a.KP)(),m=(0,a.$f)(),{dispatchFields:v,getField:g,setModified:b}=d,[y,h]=(0,n.useState)(void 0),E=(0,s.Z)(y,120),O=g(t),A=null==O?void 0:O.initialValue,F=!1===(!O||"boolean"!=typeof O.valid||O.valid)&&f,C=(0,n.useCallback)((async e=>{const n={path:t,stringify:c,disableFormData:o,ignoreWhileFlattening:l,initialValue:A,validate:r,condition:u,value:e,valid:!1,errorMessage:void 0},a="function"!=typeof r||await r(e);"string"==typeof a?(n.errorMessage=a,n.valid=!1):n.valid=a,v(n)}),[t,v,r,o,l,A,c,u]),j=(0,n.useCallback)(((e,t=!0)=>{const r=e&&e.target?e.target.value:e;l||m||!t||b(!0),h(r)}),[b,m,l]);(0,n.useEffect)((()=>{h(A)}),[A]);const S=i?E:y;return(0,n.useEffect)((()=>{(null==O?void 0:O.value)!==S&&void 0!==S&&C(S)}),[S,C,O]),{...e,showError:F,errorMessage:null==O?void 0:O.errorMessage,value:y,formSubmitted:f,formProcessing:p,setValue:j}}},546:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(7294),a=r(4012);const s=e=>{const t=t=>{const{name:r,path:s,admin:{condition:i}={}}=t,o=s||r,{getData:l,getSiblingData:c,getField:u,dispatchFields:d}=(0,a.ey)(),f=l(),p=c(o),m=Boolean(i),v=!m||i(f,p),g=u(o),b=null==g?void 0:g.passesCondition;return(0,n.useEffect)((()=>{m&&(!b&&v&&d({type:"MODIFY_CONDITION",path:o,result:!0}),v||!b&&void 0!==b||d({type:"MODIFY_CONDITION",path:o,result:!1}))}),[v,b,d,o,m]),v?n.createElement(e,{...t}):null};return r=>{const{admin:{condition:a}={}}=r;return a?n.createElement(t,{...r}):n.createElement(e,{...r})}}},692:(e,t)=>{"use strict";t.Z=async function(e){return new Promise((t=>{setTimeout(t,e)}))}}}]);
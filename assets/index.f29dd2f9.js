import{g as e,s as t,u as a,F as r,a as l,b as n,p as s,C as o,r as i}from"./index.9f8a1e66.js";import{x as u,d as c,y as d,h as g,g as f,m as p,z as m,e as v,u as h,D as b,k as y,E as x,F as k,I as w,w as C}from"./index.84b0d76a.js";import{c as I,C as S}from"./index.358d9b4a.js";import{L as V,d as M,A as B,r as A,c as E,E as T,h as $,M as j,i as z,b as L,I as P,j as F}from"./index.ec1b8948.js";let W=0;function q(e){return Array.isArray(e)?!e.length:0!==e&&!e}function D(e,t){const{message:a}=t;return d(a)?a(e,t):a||""}function H({target:e}){e.composing=!0}function R({target:e}){e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}function O(e){return[...e].length}const[K,G]=g("field");const J=C(M({name:K,props:v({},I,{id:String,name:String,leftIcon:String,rightIcon:String,autofocus:Boolean,clearable:Boolean,maxlength:f,formatter:Function,clearIcon:p("clear"),modelValue:m(""),inputAlign:String,placeholder:String,autocomplete:String,errorMessage:String,enterkeyhint:String,clearTrigger:p("focus"),formatTrigger:p("onChange"),error:{type:Boolean,default:null},disabled:{type:Boolean,default:null},readonly:{type:Boolean,default:null}},{rows:f,type:p("text"),rules:Array,autosize:[Boolean,Object],labelWidth:f,labelClass:h,labelAlign:String,showWordLimit:Boolean,errorMessageAlign:String,colon:{type:Boolean,default:null}}),emits:["blur","focus","clear","keypress","clickInput","endValidate","startValidate","clickLeftIcon","clickRightIcon","update:modelValue"],setup(d,{emit:g,slots:f}){const p=function(){const e=V(),{name:t="unknown"}=(null==e?void 0:e.type)||{};return`${t}-${++W}`}(),m=B({status:"unvalidated",focused:!1,validateMessage:""}),v=A(),h=A(),C=A(),{parent:I}=a(r),M=()=>{var e;return String(null!=(e=d.modelValue)?e:"")},K=e=>y(d[e])?d[e]:I&&y(I.props[e])?I.props[e]:void 0,J=E((()=>{const e=K("readonly");if(d.clearable&&!e){const e=""!==M(),t="always"===d.clearTrigger||"focus"===d.clearTrigger&&m.focused;return e&&t}return!1})),N=E((()=>C.value&&f.input?C.value():d.modelValue)),Q=e=>e.reduce(((e,t)=>e.then((()=>{if("failed"===m.status)return;let{value:e}=N;if(t.formatter&&(e=t.formatter(e,t)),!function(e,t){if(q(e)){if(t.required)return!1;if(!1===t.validateEmpty)return!0}return!(t.pattern&&!t.pattern.test(String(e)))}(e,t))return m.status="failed",void(m.validateMessage=D(e,t));if(t.validator){if(q(e)&&!1===t.validateEmpty)return;return function(e,t){return new Promise((a=>{const r=t.validator(e,t);c(r)?r.then(a):a(r)}))}(e,t).then((a=>{a&&"string"==typeof a?(m.status="failed",m.validateMessage=a):!1===a&&(m.status="failed",m.validateMessage=D(e,t))}))}}))),Promise.resolve()),U=()=>{m.status="unvalidated",m.validateMessage=""},X=()=>g("endValidate",{status:m.status,message:m.validateMessage}),Y=(e=d.rules)=>new Promise((t=>{U(),e?(g("startValidate"),Q(e).then((()=>{"failed"===m.status?(t({name:d.name,message:m.validateMessage}),X()):(m.status="passed",t(),X())}))):t()})),Z=e=>{if(I&&d.rules){const{validateTrigger:t}=I.props,a=x(t).includes(e),r=d.rules.filter((t=>t.trigger?x(t.trigger).includes(e):a));r.length&&Y(r)}},_=(e,t="onChange")=>{const a=e,r=(e=(e=>{const{maxlength:t}=d;if(y(t)&&O(e)>t){const a=M();return a&&O(a)===+t?a:function(e,t){return[...e].slice(0,t).join("")}(e,+t)}return e})(e))!==a;if("number"===d.type||"digit"===d.type){const t="number"===d.type;e=k(e,t,t)}if(d.formatter&&t===d.formatTrigger&&(e=d.formatter(e)),v.value&&v.value.value!==e)if(m.focused&&r){const{selectionStart:t,selectionEnd:a}=v.value;v.value.value=e,v.value.setSelectionRange(t-1,a-1)}else v.value.value=e;e!==d.modelValue&&g("update:modelValue",e)},ee=e=>{e.target.composing||_(e.target.value)},te=()=>{var e;return null==(e=v.value)?void 0:e.blur()},ae=()=>{const a=v.value;"textarea"===d.type&&d.autosize&&a&&function(a,r){const l=e();a.style.height="auto";let n=a.scrollHeight;if(u(r)){const{maxHeight:e,minHeight:t}=r;void 0!==e&&(n=Math.min(n,e)),void 0!==t&&(n=Math.max(n,t))}n&&(a.style.height=`${n}px`,t(l))}(a,d.autosize)},re=e=>{m.focused=!0,g("focus",e),j(ae),K("readonly")&&te()},le=e=>{K("readonly")||(m.focused=!1,_(M(),"onBlur"),g("blur",e),Z("onBlur"),j(ae),i())},ne=e=>g("clickInput",e),se=e=>g("clickLeftIcon",e),oe=e=>g("clickRightIcon",e),ie=E((()=>"boolean"==typeof d.error?d.error:!(!I||!I.props.showError||"failed"!==m.status)||void 0)),ue=E((()=>{const e=K("labelWidth");if(e)return{width:b(e)}})),ce=e=>{if(13===e.keyCode){I&&I.props.submitOnEnter||"textarea"===d.type||s(e),"search"===d.type&&te()}g("keypress",e)},de=()=>d.id||`${p}-input`,ge=()=>{const e=G("control",[K("inputAlign"),{error:ie.value,custom:!!f.input,"min-height":"textarea"===d.type&&!d.autosize}]);if(f.input)return L("div",{class:e,onClick:ne},[f.input()]);const t={id:de(),ref:v,name:d.name,rows:void 0!==d.rows?+d.rows:void 0,class:e,disabled:K("disabled"),readonly:K("readonly"),autofocus:d.autofocus,placeholder:d.placeholder,autocomplete:d.autocomplete,enterkeyhint:d.enterkeyhint,"aria-labelledby":d.label?`${p}-label`:void 0,onBlur:le,onFocus:re,onInput:ee,onClick:ne,onChange:R,onKeypress:ce,onCompositionend:R,onCompositionstart:H};return"textarea"===d.type?L("textarea",t,null):L("input",P("number"===(a=d.type)?{type:"text",inputmode:"decimal"}:"digit"===a?{type:"tel",inputmode:"numeric"}:{type:a},t),null);var a},fe=()=>{const e=f["right-icon"];if(d.rightIcon||e)return L("div",{class:G("right-icon"),onClick:oe},[e?e():L(w,{name:d.rightIcon,classPrefix:d.iconPrefix},null)])},pe=()=>{if(d.showWordLimit&&d.maxlength){const e=O(M());return L("div",{class:G("word-limit")},[L("span",{class:G("word-num")},[e]),F("/"),d.maxlength])}},me=()=>{if(I&&!1===I.props.showErrorMessage)return;const e=d.errorMessage||m.validateMessage;if(e){const t=f["error-message"],a=K("errorMessageAlign");return L("div",{class:G("error-message",a)},[t?t({message:e}):e])}},ve=()=>[L("div",{class:G("body")},[ge(),J.value&&L(w,{ref:h,name:d.clearIcon,class:G("clear")},null),fe(),f.button&&L("div",{class:G("button")},[f.button()])]),pe(),me()];return l({blur:te,focus:()=>{var e;return null==(e=v.value)?void 0:e.focus()},validate:Y,formValue:N,resetValidation:U,getValidationStatus:()=>m.status}),T(o,{customValue:C,resetValidation:U,validateWithTrigger:Z}),$((()=>d.modelValue),(()=>{_(M()),U(),Z("onChange"),j(ae)})),z((()=>{_(M(),d.formatTrigger),j(ae)})),n("touchstart",(e=>{s(e),g("update:modelValue",""),g("clear",e)}),{target:E((()=>{var e;return null==(e=h.value)?void 0:e.$el}))}),()=>{const e=K("disabled"),t=K("labelAlign"),a=(()=>{const e=K("colon")?":":"";return f.label?[f.label(),e]:d.label?L("label",{id:`${p}-label`,for:de()},[d.label+e]):void 0})(),r=(()=>{const e=f["left-icon"];if(d.leftIcon||e)return L("div",{class:G("left-icon"),onClick:se},[e?e():L(w,{name:d.leftIcon,classPrefix:d.iconPrefix},null)])})();return L(S,{size:d.size,class:G({error:ie.value,disabled:e,[`label-${t}`]:t}),center:d.center,border:d.border,isLink:d.isLink,clickable:d.clickable,titleStyle:ue.value,valueClass:G("value"),titleClass:[G("label",[t,{required:d.required}]),d.labelClass],arrowDirection:d.arrowDirection},{icon:r&&"top"!==t?()=>r:null,title:a||"top"===t?()=>"top"===t?[r,a]:a:null,value:ve,extra:f.extra})}}}));export{J as F};
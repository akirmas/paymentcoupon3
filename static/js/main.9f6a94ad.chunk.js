(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){e.exports=a(20)},20:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(13),i=a(4),o=a(2),l=function(e){var t=e.title,a=e.price,n=e.titletip,r=e.programinclude,i=e.selected,o=e.index,l=e.changeSelectedProduct;return c.a.createElement("div",{className:"product"},c.a.createElement("h3",{className:"product__title"},t),c.a.createElement("h4",{className:"product__tip"},n),c.a.createElement("h3",{className:"product__price"},a),c.a.createElement("ul",{className:"product__description"},r.map(function(e){return c.a.createElement("li",{key:e,className:"product__include"},e)})),c.a.createElement("button",{className:"product__btn  ".concat(i?"product__btn--selected":""),onClick:function(){return l(o)}},i?"Selected":"Buy Now"))},s=a(9),u=function(e){var t=e.src,a=e.alt,n=void 0===a?"":a,r=Object(s.a)(e,["src","alt"]);return c.a.createElement("img",Object.assign({src:"./"+t,alt:n},r))},d=function(e){var t=e.chance,a=t.title,n=t.message,r=t.img,i=e.saveProducts,o=e.changeSelectedProduct;return c.a.createElement("div",{className:"program"},c.a.createElement("div",{className:"program__header"},c.a.createElement("h2",{className:"program__title-header"},"The Official Green Card Program"),c.a.createElement("h3",{className:"program__title-header program__title-header--italic"},"Come Live and Work In the US")),c.a.createElement("div",{className:"program__container"},c.a.createElement("div",{className:"program__chance"},c.a.createElement("div",{className:"program__chance-box"},c.a.createElement("h3",{className:"program__chance-title"},a),c.a.createElement("p",{className:"program__chance-message"},n))),c.a.createElement("div",{className:"program__chance-img-container"},c.a.createElement(u,Object.assign({},r,{className:"program__chance-img"}))),c.a.createElement("div",{className:"program__products"},i&&i.map(function(e,t){return c.a.createElement(l,Object.assign({key:e.title},e,{index:t,changeSelectedProduct:o}))}))))},m=a(3),p=a(1),f=a(7),v=a(10),h=a(8),b=a(6),j=a(11),y=a(5);function g(e,t,a){null!==e&&"object"===typeof e&&a.forEach(function(a){return e[t].apply(e,Object(p.a)(a))})}function O(e){return"string"!==typeof e?e:e.charAt(0).toUpperCase()+e.slice(1)}function _(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(n.isValidElement)(e)?e:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=function(e){return _(e,t)};return Array.isArray(e)?e.map(a):"object"!==typeof e?e:Object.keys(e).map(function(c){var r=e[c],i=Object.assign({},"object"!==typeof r||Array.isArray(r)?{children:Array.isArray(r)?r:[r]}:r),o=i.tag,l=void 0===o?c:o,s=i.name,u=void 0===s?c:s,d=i.className,m=void 0===d?u:d,f=i.key,v=void 0===f?u:f,h=i.children,b=void 0===h?[]:h;return Object.assign(i,{name:u,key:v,className:m}),delete i.children,delete i.tag,n.createElement.apply(void 0,[l in t?t[l]:l,i].concat(Object(p.a)((Array.isArray(b)?b:[b]).map(a))))})}(e,t)}var E=function(e){function t(e){var a;Object(f.a)(this,t),a=Object(v.a)(this,Object(h.a)(t).call(this,e));var n=e.duringConstruct;return"function"===typeof n&&n(e),a}return Object(j.a)(t,e),Object(b.a)(t,[{key:"componentWillMount",value:function(){var e=this.props,t=e.onChange,a=e.value,n=e.defaultValue;t({target:{name:e.name,value:a||n}})}},{key:"render",value:function(){var e=this.props,t=e.name,a=void 0===t?"":t,n=e.label,r=void 0===n?"":n,i=e.type,o=void 0===i?"title":i,l=e.isvalid,s=e.disabled,u=void 0!==s&&s,d=e.required,m=void 0!==d&&d,p=e.validator,f=e.style,v=void 0===f?{}:f,h=e.parentkey,b=Object.assign({name:a},this.props);delete b.duringConstruct;var j=function(e,t){return Object.assign(t,{"data-parentkey":h,className:[O(e),u?"Disabled":"",m?"Required":"",["NoValidation","NotValid","Valid"][1+l],"function"===typeof p?O(p):""].join(" "),key:"".concat(e).concat(a),style:v})},y=j("input",Object.assign(b,b.value?{disabled:!0}:{},{name:a,id:"".concat(h,"/input:").concat(a)})),g=j("label",{htmlFor:y.id,name:a,children:r}),E="input";switch(o){case"title":g.className+=" ".concat(O(o));break;case"textarea":E=o,y.className+=" ".concat(O(o));break;case"list":var S=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=a.checkbox,r=void 0!==n&&n,i=a.parentkey,o=void 0===i?"":i;return{tag:r?"":"select",children:t.map(function(t){var n="object"===typeof t?t:{value:t},i=n.value,l=n.label,s=void 0===l?i:l,u="".concat(o).concat(e).concat(i),d=[e,i].map(O).join(" ");return r?c.a.createElement(c.a.Fragment,null,c.a.createElement("input",Object.assign({},a,{name:e,value:i,type:"radio",id:u,key:u,className:"".concat(d," Input"),onClick:function(){return a.onChange.apply(a,arguments)},onChange:null})),c.a.createElement("label",{name:e,className:"".concat(d," Option"),htmlFor:u,key:"".concat(u,"/Option")},_(s))):c.a.createElement("option",{key:u,value:i},s)})}}(y.name,y.items,y);E=S.tag,y.children=S.children;break;case"year":case"month":E="select",y.children=k(N[o].count,function(e){var t=0===e?"":e+N[o].startValue;return c.a.createElement("option",Object.assign({key:"Option".concat(y.name).concat(e)},{value:t}),t)});break;case"button":y.className+=" Button",y.value=r;break;case"submit":y.value=r,y.className+=" Submit Button";default:if(!C.includes(o))return[];y.type=o}return y.value=y.value||y.defaultValue,delete y.defaultValue,c.a.createElement(c.a.Fragment,null," ",""===r||["submit","button","hidden"].includes(o)?null:c.a.createElement("label",g),["","title"].includes(o)?null:""===E?y.children:c.a.createElement(E,y)," ")}}]),t}(c.a.Component),k=function(e,t){return Object(p.a)(Array(e).keys()).map(t)},N={month:{startValue:0,count:13},year:{startValue:(new Date).getFullYear()-1,count:22}},C=["button","checkbox","color","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];var S=Object.create({_prefix:"data_",data:function(e){return"".concat(this._prefix).concat(e)},pure:function(e){return e.replace(new RegExp("^".concat(this._prefix)),"")},is:function(e){return e.startsWith(this._prefix)}}),D={validate:function(e,t){var a=this,n=e;if(null!==e){"object"!==typeof n&&(Array.isArray(n)||(n=[n]),n={allOf:n});var c=Object.keys(n);if(1===c.length){var r=n[c=c[0]];switch(c){case"allOf":return r.every(function(e){return!(e in a.validators)||a.validators[e](t)});case"anyOf":return r.some(function(e){return e in a.validators&&a.validators[e](t)});default:return}}}},validators:{luhn:function(e){return e>0&&Object(p.a)(e.toString().replace(/[^0-9]+/g,"")).reverse().map(function(e,t){return e*(1+t%2)}).map(function(e){return e-(e<10?0:9)}).reduce(function(e,t){return e+t},0)%10===0},isracardDirect:function(e){return Object(p.a)(("0".repeat(9)+e.toString().replace(/[^0-9]+/g,"")).substr(-9)).map(function(e,t){return e*[-2,-3,-4,-5,5,4,3,2,1][t]}).reduce(function(e,t){return e+t},0)%11===0},required:function(e){return""!==e}}},x=function(e){function t(e){var a;return Object(f.a)(this,t),(a=Object(v.a)(this,Object(h.a)(t).call(this,e))).state={disabled:!1,clicked:"",inputs:{}},a.dataForInjector=[],["handleChange","pushData","ajaxSubmit","setDisabled"].forEach(function(e){return a[e]=a[e].bind(Object(y.a)(Object(y.a)(a)))}),a.dataForInjector=[["dataInjecting",a.pushData],["disable",a.setDisabled]],a.onChange=function(t){a.handleChange(t),"function"===typeof e.onChange&&e.onChange(t,Object(y.a)(Object(y.a)(a)))},a.state=Object.assign(a.state,a.inputsToState(e.inputs)),a}return Object(j.a)(t,e),Object(b.a)(t,[{key:"inputsToState",value:function(e){return Object.assign.apply(Object,[{},{inputs:e}].concat(Object(p.a)(Object.entries(e).map(function(e){var t=Object(o.a)(e,2),a=t[0],n=t[1],c=n.value,r=void 0===c?"":c,i=n.defaultValue,l=void 0===i?"":i;n.items;return Object(m.a)({},S.data(a),l||r)}))))}}]),Object(b.a)(t,[{key:"setDisabled",value:function(e){var t=e.detail;this.setState({disabled:t})}},{key:"componentDidMount",value:function(){g(this.props.injector,"addEventListener",this.dataForInjector)}},{key:"componentWillUnmount",value:function(){g(this.props.injector,"removeEventListener",this.dataForInjector)}},{key:"collectKeyData",value:function(){return Object.keys(this.state).filter(function(e){return S.is(e)})}},{key:"collectData",value:function(){var e=this;return Object.assign.apply(Object,[{}].concat(Object(p.a)(this.collectKeyData().map(function(t){return Object(m.a)({},S.pure(t),e.state[t])}))))}},{key:"invalidData",value:function(e){var t=this.state.inputs;return Object.entries(e).filter(function(e){var a=Object(o.a)(e,2),n=a[0],c=a[1];return n in t&&"validate"in t[n]&&!D.validate(t[n].validate,c)})}},{key:"ajaxSubmit",value:function(e,t,a){var n=this,c=t.name,r=t.onInvalid;e&&"function"===typeof e.preventDefault&&e.preventDefault();var i=this.state.inputs,o=c||this.state.clicked||"",l="before".concat(o),s="after".concat(o),u=function(){for(var e=arguments.length,t=new Array(e),c=0;c<e;c++)t[c]=arguments[c];s in n.props&&n.props[s].apply(n,t),a&&a.apply(void 0,t)},d=i[o],m="data"in d?d.data:{},p=Object.assign({},this.collectData(),m),f=this.invalidData(p);if(0===f.length||"function"!==typeof r||!1===r(f,i)){var v=l in this.props?this.props[l](p):{};if(!1!==v){v="object"===typeof v?v:{};var h=Object.assign({},d,v),b=h.action,j=h.method,y=this.props.data,g=void 0===y?{}:y,O=Object.assign({},g,v.data||p);if(!b)return u(O);this.setState({disabled:!0}),fetch(b,Object.assign({method:j,headers:{"Content-Type":"application/json","Request-Date":(new Date).toUTCString()}},["GET","HEAD",void 0].includes(j)?{}:{body:JSON.stringify(O)})).then(function(e){return n.setState({disabled:!1}),e}).then(function(e){return e.text()}).then(u).catch(console.error)}}}},{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},r=this.state.inputs[a];r.isvalid=1*D.validate(r.validate,n),this.setState(Object(m.a)({},S.data(a),n),c)}},{key:"pushData",value:function(e){var t=this,a=e.detail;a&&"object"===typeof a&&Object.entries(a).forEach(function(e){var a=Object(o.a)(e,2),n=a[0],c=void 0===n?"":n,r=a[1],i=void 0===r?"":r,l=S.data(c);""!==c&&""!==i&&i!==t.state[l]&&t.setState(Object(m.a)({},l,i),function(){"function"===typeof t.props.onChange&&t.props.onChange({target:{name:c,value:t.state[l]}})})})}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,n=void 0===a?"":a,r=t.rkey,o=t.inputs,l=t.onInvalid;return Object.keys(o).map(function(t){var a="".concat(r,"/").concat(t),s=o[t],u=e.props.duringConstruct,d=S.data(t),p=e.state[d],f=Object.assign(Object(i.a)({name:t,className:n,duringConstruct:u,rkey:a,parentkey:r},s,{defaultValue:p,disabled:e.state.disabled||s.disabled,onChange:function(t){if(p!==t.target.value){for(var a=arguments.length,n=new Array(a>1?a-1:0),c=1;c<a;c++)n[c-1]=arguments[c];!1!==e.onChange.apply(e,[t].concat(n))&&e.setState(Object(m.a)({},d,t.target.value))}}}),"before".concat(t)in e.props||"on".concat(t)in e.props||"after".concat(t)in e.props||"submit"===s.type?{onClick:function(){return e.setState({clicked:t},function(){return e.ajaxSubmit(null,{name:t,onInvalid:l})})}}:{});return c.a.createElement(E,Object.assign({key:a},f))})}}]),t}(c.a.Component),w=function(e){e.title,e.titletip;var t=e.titleinfo,a=e.info,r=e.saveProducts,l=e.inputs,s=function(e){return e.selected},u=Object(n.useState)(Object(i.a)({},l,{product:Object(i.a)({},l.product,{value:r.find(s).title})})),d=Object(o.a)(u,2),m=d[0],p=d[1];return Object(n.useEffect)(function(){return p(Object(i.a)({},l,{product:Object(i.a)({},l.product,{value:r.find(s).title})}))},[r]),c.a.createElement("div",{className:"payment"},c.a.createElement("div",{className:"payment__title-container"},c.a.createElement("h2",{className:"payment__title"},"You Have Selected the ".concat(r.find(s).title," program")),c.a.createElement("h3",{className:"payment__title payment__title--tip"},"For a Total Amount of  "," ",c.a.createElement("span",{className:"payment__title payment__title--tip currency"},r.find(s).price))),c.a.createElement("div",null,c.a.createElement("div",{className:"payment__form"},c.a.createElement("div",{className:"payment__form-container"},c.a.createElement("form",null,c.a.createElement(x,{inputs:m}))),c.a.createElement("div",{className:"payment__form-footer"},c.a.createElement("h2",{className:"payment__titleinfo"},t),c.a.createElement("h3",{className:"payment__info-text"},a)))))},A=function(e){var t=e.footer,a=t.caution,n=t.images,r=t.reachus,i=t.terms,o=t.policy,l=t.description,u=function(e){var t=e.src,a=e.alt,n=void 0===a?"":a,r=Object(s.a)(e,["src","alt"]);return c.a.createElement("img",Object.assign({src:"./"+t,alt:n},r))};return c.a.createElement("footer",{className:"footer"},c.a.createElement("p",{className:"footer__caution"},"Caution: ",a),c.a.createElement("div",{className:"footer__icon-gallery"},n.map(function(e){var t=e.alt,a=e.src;return c.a.createElement(u,Object.assign({key:a},{src:a,alt:t},{className:"footer__img"}))})),c.a.createElement("p",{className:"footer__reachus"},r),c.a.createElement("div",{className:"footer__policy"},c.a.createElement("a",{href:i},"Terms and conditions")," |"," ",c.a.createElement("a",{href:o},"Privacy Policy")),c.a.createElement("p",{className:"footer__description"},l))},V=function(e){var t=e.data,a=t.chance,r=t.products,l=t.payment,s=t.footer,u=Object(n.useState)(r),m=Object(o.a)(u,2),p=m[0],f=m[1],v=Object(n.useState)({}),h=Object(o.a)(v,2),b=h[0],j=h[1],y=Object(n.useState)(!1),g=Object(o.a)(y,2),O=g[0],_=g[1];Object(n.useEffect)(function(){fetch("".concat(".","/form.json")).then(function(e){return e.json()}).then(function(e){j(e.inputs),_(!0)}).catch(console.error)},[]);return c.a.createElement(c.a.Fragment,null,c.a.createElement("main",null,c.a.createElement(d,{saveProducts:p,chance:a,changeSelectedProduct:function(e){f(p.map(function(t,a){var n=t.selected=a===e;return Object(i.a)({},t,{selected:n})}))}}),O&&c.a.createElement(w,Object.assign({},l,{saveProducts:p,inputs:b})),c.a.createElement(A,{footer:s})))};fetch("".concat(".","/index.json")).then(function(e){return e.json()}).then(function(e){return Object(r.render)(c.a.createElement(V,{data:e}),document.getElementById("root"))}).catch(console.error)}},[[14,1,2]]]);
//# sourceMappingURL=main.9f6a94ad.chunk.js.map
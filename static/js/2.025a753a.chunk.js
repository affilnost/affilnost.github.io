(this["webpackJsonpappwork-react-starter"]=this["webpackJsonpappwork-react-starter"]||[]).push([[2],{454:function(e,t,a){"use strict";var n=a(2),r=a(3),i=a(11),l=a.n(i),o=a(0),s=a.n(o),c=a(18),u=a(147),d=function(e){return s.a.forwardRef((function(t,a){return s.a.createElement("div",Object(n.a)({},t,{ref:a,className:l()(t.className,e)}))}))},m=a(148),b=s.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.className,o=e.variant,u=e.as,d=void 0===u?"img":u,m=Object(r.a)(e,["bsPrefix","className","variant","as"]),b=Object(c.a)(a,"card-img");return s.a.createElement(d,Object(n.a)({ref:t,className:l()(o?b+"-"+o:b,i)},m))}));b.displayName="CardImg",b.defaultProps={variant:null};var f=b,v=d("h5"),O=d("h6"),p=Object(u.a)("card-body"),E=s.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.className,u=e.bg,d=e.text,b=e.border,f=e.body,v=e.children,O=e.as,E=void 0===O?"div":O,j=Object(r.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),y=Object(c.a)(a,"card"),x=Object(o.useMemo)((function(){return{cardHeaderBsPrefix:y+"-header"}}),[y]);return s.a.createElement(m.a.Provider,{value:x},s.a.createElement(E,Object(n.a)({ref:t},j,{className:l()(i,y,u&&"bg-"+u,d&&"text-"+d,b&&"border-"+b)}),f?s.a.createElement(p,null,v):v))}));E.displayName="Card",E.defaultProps={body:!1},E.Img=f,E.Title=Object(u.a)("card-title",{Component:v}),E.Subtitle=Object(u.a)("card-subtitle",{Component:O}),E.Body=p,E.Link=Object(u.a)("card-link",{Component:"a"}),E.Text=Object(u.a)("card-text",{Component:"p"}),E.Header=Object(u.a)("card-header"),E.Footer=Object(u.a)("card-footer"),E.ImgOverlay=Object(u.a)("card-img-overlay");t.a=E},460:function(e,t,a){"use strict";var n=a(2),r=a(3),i=a(11),l=a.n(i),o=a(0),s=a.n(o),c=(a(219),a(50)),u=a.n(c),d={type:u.a.string.isRequired,as:u.a.elementType},m=s.a.forwardRef((function(e,t){var a=e.as,i=void 0===a?"div":a,o=e.className,c=e.type,u=Object(r.a)(e,["as","className","type"]);return s.a.createElement(i,Object(n.a)({},u,{ref:t,className:l()(o,c&&c+"-feedback")}))}));m.displayName="Feedback",m.propTypes=d,m.defaultProps={type:"valid"};var b=m,f=s.a.createContext({controlId:void 0}),v=a(18),O=s.a.forwardRef((function(e,t){var a=e.id,i=e.bsPrefix,c=e.bsCustomPrefix,u=e.className,d=e.isValid,m=e.isInvalid,b=e.isStatic,O=e.as,p=void 0===O?"input":O,E=Object(r.a)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","isStatic","as"]),j=Object(o.useContext)(f),y=j.controlId,x=j.custom?[c,"custom-control-input"]:[i,"form-check-input"],N=x[0],h=x[1];return i=Object(v.a)(N,h),s.a.createElement(p,Object(n.a)({},E,{ref:t,id:a||y,className:l()(u,i,d&&"is-valid",m&&"is-invalid",b&&"position-static")}))}));O.displayName="FormCheckInput",O.defaultProps={type:"checkbox"};var p=O,E=s.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.bsCustomPrefix,c=e.className,u=e.htmlFor,d=Object(r.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),m=Object(o.useContext)(f),b=m.controlId,O=m.custom?[i,"custom-control-label"]:[a,"form-check-label"],p=O[0],E=O[1];return a=Object(v.a)(p,E),s.a.createElement("label",Object(n.a)({},d,{ref:t,htmlFor:u||b,className:l()(c,a)}))}));E.displayName="FormCheckLabel";var j=E,y=s.a.forwardRef((function(e,t){var a=e.id,i=e.bsPrefix,c=e.bsCustomPrefix,u=e.inline,d=e.disabled,m=e.isValid,O=e.isInvalid,E=e.feedback,y=e.className,x=e.style,N=e.title,h=e.type,P=e.label,C=e.children,I=e.custom,w=e.as,g=void 0===w?"input":w,F=Object(r.a)(e,["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedback","className","style","title","type","label","children","custom","as"]),k="switch"===h||I,R=k?[c,"custom-control"]:[i,"form-check"],S=R[0],K=R[1];i=Object(v.a)(S,K);var V=Object(o.useContext)(f).controlId,T=Object(o.useMemo)((function(){return{controlId:a||V,custom:k}}),[V,k,a]),A=null!=P&&!1!==P&&!C,L=s.a.createElement(p,Object(n.a)({},F,{type:"switch"===h?"checkbox":h,ref:t,isValid:m,isInvalid:O,isStatic:!A,disabled:d,as:g}));return s.a.createElement(f.Provider,{value:T},s.a.createElement("div",{style:x,className:l()(y,i,k&&"custom-"+h,u&&i+"-inline")},C||s.a.createElement(s.a.Fragment,null,L,A&&s.a.createElement(j,{title:N},P),(m||O)&&s.a.createElement(b,{type:m?"valid":"invalid"},E))))}));y.displayName="FormCheck",y.defaultProps={type:"checkbox",inline:!1,disabled:!1,isValid:!1,isInvalid:!1,title:""},y.Input=p,y.Label=j;var x=y,N=s.a.forwardRef((function(e,t){var a=e.id,i=e.bsPrefix,c=e.bsCustomPrefix,u=e.className,d=e.isValid,m=e.isInvalid,b=e.lang,O=e.as,p=void 0===O?"input":O,E=Object(r.a)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"]),j=Object(o.useContext)(f),y=j.controlId,x=j.custom?[c,"custom-file-input"]:[i,"form-control-file"],N=x[0],h=x[1];return i=Object(v.a)(N,h),s.a.createElement(p,Object(n.a)({},E,{ref:t,id:a||y,type:"file",lang:b,className:l()(u,i,d&&"is-valid",m&&"is-invalid")}))}));N.displayName="FormFileInput";var h=N,P=s.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.bsCustomPrefix,c=e.className,u=e.htmlFor,d=Object(r.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),m=Object(o.useContext)(f),b=m.controlId,O=m.custom?[i,"custom-file-label"]:[a,"form-file-label"],p=O[0],E=O[1];return a=Object(v.a)(p,E),s.a.createElement("label",Object(n.a)({},d,{ref:t,htmlFor:u||b,className:l()(c,a),"data-browse":d["data-browse"]}))}));P.displayName="FormFileLabel";var C=P,I=s.a.forwardRef((function(e,t){var a=e.id,i=e.bsPrefix,c=e.bsCustomPrefix,u=e.disabled,d=e.isValid,m=e.isInvalid,O=e.feedback,p=e.className,E=e.style,j=e.label,y=e.children,x=e.custom,N=e.lang,P=e["data-browse"],I=e.as,w=void 0===I?"div":I,g=e.inputAs,F=void 0===g?"input":g,k=Object(r.a)(e,["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"]),R=x?[c,"custom"]:[i,"form-file"],S=R[0],K=R[1];i=Object(v.a)(S,K);var V=Object(o.useContext)(f).controlId,T=Object(o.useMemo)((function(){return{controlId:a||V,custom:x}}),[V,x,a]),A=null!=j&&!1!==j&&!y,L=s.a.createElement(h,Object(n.a)({},k,{ref:t,isValid:d,isInvalid:m,disabled:u,as:F,lang:N}));return s.a.createElement(f.Provider,{value:T},s.a.createElement(w,{style:E,className:l()(p,i,x&&"custom-file")},y||s.a.createElement(s.a.Fragment,null,x?s.a.createElement(s.a.Fragment,null,L,A&&s.a.createElement(C,{"data-browse":P},j)):s.a.createElement(s.a.Fragment,null,A&&s.a.createElement(C,null,j),L),(d||m)&&s.a.createElement(b,{type:d?"valid":"invalid"},O))))}));I.displayName="FormFile",I.defaultProps={disabled:!1,isValid:!1,isInvalid:!1},I.Input=h,I.Label=C;var w=I,g=(a(220),s.a.forwardRef((function(e,t){var a,i,c=e.bsPrefix,u=e.bsCustomPrefix,d=e.type,m=e.size,b=e.id,O=e.className,p=e.isValid,E=e.isInvalid,j=e.plaintext,y=e.readOnly,x=e.custom,N=e.as,h=void 0===N?"input":N,P=Object(r.a)(e,["bsPrefix","bsCustomPrefix","type","size","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),C=Object(o.useContext)(f).controlId,I=x?[u,"custom"]:[c,"form-control"],w=I[0],g=I[1];if(c=Object(v.a)(w,g),j)(i={})[c+"-plaintext"]=!0,a=i;else if("file"===d){var F;(F={})[c+"-file"]=!0,a=F}else if("range"===d){var k;(k={})[c+"-range"]=!0,a=k}else if("select"===h&&x){var R;(R={})[c+"-select"]=!0,R[c+"-select-"+m]=m,a=R}else{var S;(S={})[c]=!0,S[c+"-"+m]=m,a=S}return s.a.createElement(h,Object(n.a)({},P,{type:d,ref:t,readOnly:y,id:b||C,className:l()(O,a,p&&"is-valid",E&&"is-invalid")}))})));g.displayName="FormControl",g.Feedback=b;var F=g,k=s.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.className,c=e.children,u=e.controlId,d=e.as,m=void 0===d?"div":d,b=Object(r.a)(e,["bsPrefix","className","children","controlId","as"]);a=Object(v.a)(a,"form-group");var O=Object(o.useMemo)((function(){return{controlId:u}}),[u]);return s.a.createElement(f.Provider,{value:O},s.a.createElement(m,Object(n.a)({},b,{ref:t,className:l()(i,a)}),c))}));k.displayName="FormGroup";var R=k,S=a(446),K=s.a.forwardRef((function(e,t){var a=e.as,i=void 0===a?"label":a,c=e.bsPrefix,u=e.column,d=e.srOnly,m=e.className,b=e.htmlFor,O=Object(r.a)(e,["as","bsPrefix","column","srOnly","className","htmlFor"]),p=Object(o.useContext)(f).controlId;c=Object(v.a)(c,"form-label");var E="col-form-label";"string"===typeof u&&(E=E+"-"+u);var j=l()(m,c,d&&"sr-only",u&&E);return b=b||p,u?s.a.createElement(S.a,Object(n.a)({as:"label",className:j,htmlFor:b},O)):s.a.createElement(i,Object(n.a)({ref:t,className:j,htmlFor:b},O))}));K.displayName="FormLabel",K.defaultProps={column:!1,srOnly:!1};var V=K,T=s.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.className,o=e.as,c=void 0===o?"small":o,u=e.muted,d=Object(r.a)(e,["bsPrefix","className","as","muted"]);return a=Object(v.a)(a,"form-text"),s.a.createElement(c,Object(n.a)({},d,{ref:t,className:l()(i,a,u&&"text-muted")}))}));T.displayName="FormText";var A=T,L=s.a.forwardRef((function(e,t){return s.a.createElement(x,Object(n.a)({},e,{ref:t,type:"switch"}))}));L.displayName="Switch",L.Input=x.Input,L.Label=x.Label;var M=L,B=a(147),q=s.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.inline,o=e.className,c=e.validated,u=e.as,d=void 0===u?"form":u,m=Object(r.a)(e,["bsPrefix","inline","className","validated","as"]);return a=Object(v.a)(a,"form"),s.a.createElement(d,Object(n.a)({},m,{ref:t,className:l()(o,c&&"was-validated",i&&a+"-inline")}))}));q.displayName="Form",q.defaultProps={inline:!1},q.Row=Object(B.a)("form-row"),q.Group=R,q.Control=F,q.Check=x,q.File=w,q.Switch=M,q.Label=V,q.Text=A;t.a=q},481:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,a,n,r,i){var l=n||"<<anonymous>>",o=i||a;if(null==t[a])return new Error("The "+r+" `"+o+"` is required to make `"+l+"` accessible for users of assistive technologies such as screen readers.");for(var s=arguments.length,c=Array(s>5?s-5:0),u=5;u<s;u++)c[u-5]=arguments[u];return e.apply(void 0,[t,a,n,r,i].concat(c))}},e.exports=t.default},482:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return l}));var n=a(0),r=a.n(n);function i(e,t){var a=0;return r.a.Children.map(e,(function(e){return r.a.isValidElement(e)?t(e,a++):e}))}function l(e,t){var a=0;r.a.Children.forEach(e,(function(e){r.a.isValidElement(e)&&t(e,a++)}))}},499:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(80),l=a(153),o=a(37);t.a=function(e){var t=Object(i.a)(e,{activeKey:"onSelect"}),a=t.id,s=t.generateChildId,c=t.onSelect,u=t.activeKey,d=t.transition,m=t.mountOnEnter,b=t.unmountOnExit,f=t.children,v=Object(n.useMemo)((function(){return s||function(e,t){return a?a+"-"+t+"-"+e:null}}),[a,s]),O=Object(n.useMemo)((function(){return{onSelect:c,activeKey:u,transition:d,mountOnEnter:m,unmountOnExit:b,getControlledId:function(e){return v(e,"tabpane")},getControllerId:function(e){return v(e,"tab")}}}),[c,u,d,m,b,v]);return r.a.createElement(l.a.Provider,{value:O},r.a.createElement(o.a.Provider,{value:c},f))}},500:function(e,t,a){"use strict";var n=a(2),r=a(3),i=a(11),l=a.n(i),o=a(0),s=a.n(o),c=a(18),u=s.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.as,o=void 0===i?"div":i,u=e.className,d=Object(r.a)(e,["bsPrefix","as","className"]),m=Object(c.a)(a,"tab-content");return s.a.createElement(o,Object(n.a)({ref:t},d,{className:l()(u,m)}))}));t.a=u},530:function(e,t,a){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function r(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return n(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(a):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?n(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}a.d(t,"a",(function(){return r}))},531:function(e,t,a){"use strict";var n,r=a(2),i=a(3),l=a(11),o=a.n(l),s=a(0),c=a.n(s),u=a(18),d=a(153),m=a(37),b=a(151),f=a(64),v=a(152),O=((n={})[f.b]="show",n[f.a]="show",n),p=c.a.forwardRef((function(e,t){var a=e.className,n=e.children,l=Object(i.a)(e,["className","children"]),u=Object(s.useCallback)((function(e){Object(v.a)(e),l.onEnter&&l.onEnter(e)}),[l]);return c.a.createElement(f.e,Object(r.a)({ref:t,addEndListener:b.a},l,{onEnter:u}),(function(e,t){return c.a.cloneElement(n,Object(r.a)({},t,{className:o()("fade",a,n.props.className,O[e])}))}))}));p.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},p.displayName="Fade";var E=p;var j=c.a.forwardRef((function(e,t){var a=function(e){var t=Object(s.useContext)(d.a);if(!t)return e;var a=t.activeKey,n=t.getControlledId,l=t.getControllerId,o=Object(i.a)(t,["activeKey","getControlledId","getControllerId"]),c=!1!==e.transition&&!1!==o.transition,u=Object(m.b)(e.eventKey);return Object(r.a)({},e,{active:null==e.active&&null!=u?Object(m.b)(a)===u:e.active,id:n(e.eventKey),"aria-labelledby":l(e.eventKey),transition:c&&(e.transition||o.transition||E),mountOnEnter:null!=e.mountOnEnter?e.mountOnEnter:o.mountOnEnter,unmountOnExit:null!=e.unmountOnExit?e.unmountOnExit:o.unmountOnExit})}(e),n=a.bsPrefix,l=a.className,b=a.active,f=a.onEnter,v=a.onEntering,O=a.onEntered,p=a.onExit,j=a.onExiting,y=a.onExited,x=a.mountOnEnter,N=a.unmountOnExit,h=a.transition,P=a.as,C=void 0===P?"div":P,I=(a.eventKey,Object(i.a)(a,["bsPrefix","className","active","onEnter","onEntering","onEntered","onExit","onExiting","onExited","mountOnEnter","unmountOnExit","transition","as","eventKey"])),w=Object(u.a)(n,"tab-pane");if(!b&&!h&&N)return null;var g=c.a.createElement(C,Object(r.a)({},I,{ref:t,role:"tabpanel","aria-hidden":!b,className:o()(l,w,{active:b})}));return h&&(g=c.a.createElement(h,{in:b,onEnter:f,onEntering:v,onEntered:O,onExit:p,onExiting:j,onExited:y,mountOnEnter:x,unmountOnExit:N},g)),c.a.createElement(d.a.Provider,{value:null},c.a.createElement(m.a.Provider,{value:null},g))}));j.displayName="TabPane";t.a=j},688:function(e,t,a){"use strict";var n=a(2),r=a(3),i=a(0),l=a.n(i),o=(a(481),a(80)),s=a(439),c=a(211),u=a(210),d=a(499),m=a(500),b=a(531),f=a(482);function v(e){var t=e.props,a=t.title,n=t.eventKey,r=t.disabled,i=t.tabClassName,o=t.id;return null==a?null:l.a.createElement(u.a,{as:c.a,eventKey:n,disabled:r,id:o,className:i},a)}var O=l.a.forwardRef((function(e,t){var a=Object(o.a)(e,{activeKey:"onSelect"}),i=a.id,c=a.onSelect,u=a.transition,O=a.mountOnEnter,p=a.unmountOnExit,E=a.children,j=a.activeKey,y=void 0===j?function(e){var t;return Object(f.a)(e,(function(e){null==t&&(t=e.props.eventKey)})),t}(E):j,x=Object(r.a)(a,["id","onSelect","transition","mountOnEnter","unmountOnExit","children","activeKey"]);return l.a.createElement(d.a,{ref:t,id:i,activeKey:y,onSelect:c,transition:u,mountOnEnter:O,unmountOnExit:p},l.a.createElement(s.a,Object(n.a)({},x,{role:"tablist",as:"nav"}),Object(f.b)(E,v)),l.a.createElement(m.a,null,Object(f.b)(E,(function(e){var t=Object(n.a)({},e.props);return delete t.title,delete t.disabled,delete t.tabClassName,l.a.createElement(b.a,t)}))))}));O.defaultProps={variant:"tabs",mountOnEnter:!1,unmountOnExit:!1},O.displayName="Tabs",t.a=O},689:function(e,t,a){"use strict";var n=a(16),r=a(0),i=a.n(r),l=a(499),o=a(500),s=a(531),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")},t}(i.a.Component);c.Container=l.a,c.Content=o.a,c.Pane=s.a,t.a=c}}]);
//# sourceMappingURL=2.025a753a.chunk.js.map
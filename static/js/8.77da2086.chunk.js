(this["webpackJsonpappwork-react-starter"]=this["webpackJsonpappwork-react-starter"]||[]).push([[8],{444:function(e,a,t){},451:function(e,a,t){"use strict";var l=t(2),n=t(3),r=t(11),s=t.n(r),c=t(0),m=t.n(c),i=t(18),o=t(147),u=function(e){return m.a.forwardRef((function(a,t){return m.a.createElement("div",Object(l.a)({},a,{ref:t,className:s()(a.className,e)}))}))},d=t(148),p=m.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,c=e.variant,o=e.as,u=void 0===o?"img":o,d=Object(n.a)(e,["bsPrefix","className","variant","as"]),p=Object(i.a)(t,"card-img");return m.a.createElement(u,Object(l.a)({ref:a,className:s()(c?p+"-"+c:p,r)},d))}));p.displayName="CardImg",p.defaultProps={variant:null};var f=p,b=u("h5"),v=u("h6"),E=Object(o.a)("card-body"),N=m.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,o=e.bg,u=e.text,p=e.border,f=e.body,b=e.children,v=e.as,N=void 0===v?"div":v,g=Object(n.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),y=Object(i.a)(t,"card"),h=Object(c.useMemo)((function(){return{cardHeaderBsPrefix:y+"-header"}}),[y]);return m.a.createElement(d.a.Provider,{value:h},m.a.createElement(N,Object(l.a)({ref:a},g,{className:s()(r,y,o&&"bg-"+o,u&&"text-"+u,p&&"border-"+p)}),f?m.a.createElement(E,null,b):b))}));N.displayName="Card",N.defaultProps={body:!1},N.Img=f,N.Title=Object(o.a)("card-title",{Component:b}),N.Subtitle=Object(o.a)("card-subtitle",{Component:v}),N.Body=E,N.Link=Object(o.a)("card-link",{Component:"a"}),N.Text=Object(o.a)("card-text",{Component:"p"}),N.Header=Object(o.a)("card-header"),N.Footer=Object(o.a)("card-footer"),N.ImgOverlay=Object(o.a)("card-img-overlay");a.a=N},453:function(e,a,t){},456:function(e,a,t){"use strict";var l=t(0),n=t.n(l),r=t(458),s=t(455),c=(t(58),t(50),t(445)),m=(t(447),t(457),t(459)),i=t(480);l.Component;var o=Object(m.a)(c.a);a.a=o},462:function(e,a,t){"use strict";var l=t(0),n=t.n(l),r=(t(455),t(58),t(50),t(454)),s=t(445),c=(t(447),t(457),t(459));function m(){return(m=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e}).apply(this,arguments)}var i=function(e,a){void 0===e&&(e="");var t=String(e).toLowerCase(),l=String(a.value).toLowerCase(),n=String(a.label).toLowerCase();return l===t||n===t},o=m({allowCreateWhileLoading:!1,createOptionPosition:"last"},{formatCreateLabel:function(e){return'Create "'+e+'"'},isValidNewOption:function(e,a,t){return!(!e||a.some((function(a){return i(e,a)}))||t.some((function(a){return i(e,a)})))},getNewOptionData:function(e,a){return{label:a,value:e,__isNew__:!0}}}),u=function(e){var a,t;return t=a=function(a){var t,l;function s(e){var t;(t=a.call(this,e)||this).select=void 0,t.onChange=function(e,a){var l=t.props,n=l.getNewOptionData,s=l.inputValue,c=l.isMulti,m=l.onChange,i=l.onCreateOption,o=l.value,u=l.name;if("select-option"!==a.action)return m(e,a);var d=t.state.newOption,p=Array.isArray(e)?e:[e];if(p[p.length-1]!==d)m(e,a);else if(i)i(s);else{var f=n(s,s),b={action:"create-option",name:u};m(c?[].concat(Object(r.e)(o),[f]):f,b)}};var l=e.options||[];return t.state={newOption:void 0,options:l},t}l=a,(t=s).prototype=Object.create(l.prototype),t.prototype.constructor=t,t.__proto__=l;var c=s.prototype;return c.UNSAFE_componentWillReceiveProps=function(e){var a=e.allowCreateWhileLoading,t=e.createOptionPosition,l=e.formatCreateLabel,n=e.getNewOptionData,s=e.inputValue,c=e.isLoading,m=e.isValidNewOption,i=e.value,o=e.options||[],u=this.state.newOption;u=m(s,Object(r.e)(i),o)?n(s,l(s)):void 0,this.setState({newOption:u,options:!a&&c||!u?o:"first"===t?[u].concat(o):[].concat(o,[u])})},c.focus=function(){this.select.focus()},c.blur=function(){this.select.blur()},c.render=function(){var a=this,t=this.state.options;return n.a.createElement(e,m({},this.props,{ref:function(e){a.select=e},options:t,onChange:this.onChange}))},s}(l.Component),a.defaultProps=o,t}(s.a),d=Object(c.a)(u);a.a=d},481:function(e,a,t){"use strict";var l=t(2),n=t(3),r=t(11),s=t.n(r),c=t(0),m=t.n(c),i=t(147),o=t(18),u=m.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,c=e.as,i=void 0===c?"div":c,u=Object(n.a)(e,["bsPrefix","className","as"]),d=Object(o.a)(t,"media");return m.a.createElement(i,Object(l.a)({},u,{ref:a,className:s()(r,d)}))}));u.displayName="Media",u.Body=Object(i.a)("media-body"),a.a=u},494:function(e,a,t){"use strict";var l=t(2),n=t(3),r=t(11),s=t.n(r),c=t(0),m=t.n(c),i=t(18),o=m.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.variant,c=e.pill,o=e.className,u=e.as,d=void 0===u?"span":u,p=Object(n.a)(e,["bsPrefix","variant","pill","className","as"]),f=Object(i.a)(t,"badge");return m.a.createElement(d,Object(l.a)({ref:a},p,{className:s()(o,f,c&&f+"-pill",r&&f+"-"+r)}))}));o.displayName="Badge",o.defaultProps={pill:!1},a.a=o},520:function(e,a,t){"use strict";var l=t(2),n=t(3),r=t(11),s=t.n(r),c=t(0),m=t.n(c),i=t(18),o=["xl","lg","md","sm","xs"],u=m.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,c=e.noGutters,u=e.as,d=void 0===u?"div":u,p=Object(n.a)(e,["bsPrefix","className","noGutters","as"]),f=Object(i.a)(t,"row"),b=f+"-cols",v=[];return o.forEach((function(e){var a,t=p[e];delete p[e];var l="xs"!==e?"-"+e:"";null!=(a=null!=t&&"object"===typeof t?t.cols:t)&&v.push(""+b+l+"-"+a)})),m.a.createElement(d,Object(l.a)({ref:a},p,{className:s.a.apply(void 0,[r,f,c&&"no-gutters"].concat(v))}))}));u.displayName="Row",u.defaultProps={noGutters:!1},a.a=u},652:function(e,a,t){"use strict";t.r(a);var l=t(442),n=t(443),r=t(4),s=t(5),c=t(7),m=t(6),i=t(0),o=t.n(i),u=(t(444),t(456)),d=(t(462),t(453),t(520)),p=t(446),f=t(451),b=t(452),v=t(494),E=t(469),N=t(481),g=[{value:"D\xfcsseldorf",label:"D\xfcsseldorf"},{value:"K\xf6ln",label:"K\xf6ln"},{value:"Moscow",label:"Moscow"},{value:"London",label:"London"}],y=[{value:"Basketball",label:"Basketball"},{value:"Volleyball",label:"Volleyball"},{value:"Tennis",label:"Tennis"},{value:"Flag football",label:"Flag football"}],h=[{value:"women",label:"Women",color:"#00B8D9"},{value:"men",label:"Men",color:"#0052CC"},{value:"lgbtiq",label:"LGBTIQ",color:"#5243AA"},{value:"kids",label:"Kids",color:"#FF5630"}],O=[{value:"beginner",label:"Beginner",color:"#00B8D9"},{value:"intermediate",label:"Intermediate",color:"#0052CC"},{value:"advanced",label:"Advanced",color:"#5243AA"}],w=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var l;return Object(r.a)(this,t),l=a.call(this,e),e.setTitle("Login v3 - Pages"),l.state={credentials:{email:"",password:"",rememberMe:!1},singleValueCity:g[0],singleValueSport:y[0],multiValueFor:[{value:"women",label:"Women"},{value:"men",label:"Men"}],multiValueLevel:[{value:"intermediate",label:"Intermediate"},{value:"advanced",label:"Advanced"}]},l}return Object(s.a)(t,[{key:"onValueChange",value:function(e,a){this.setState({credentials:Object(n.a)({},this.state.credentials,Object(l.a)({},e,"rememberMe"===e?a.target.checked:a.target.value))})}},{key:"prevent",value:function(e){e.preventDefault()}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(d.a,null,o.a.createElement(p.a,{xl:4},o.a.createElement(f.a,{className:"mb-4"},o.a.createElement(f.a.Body,null,o.a.createElement("div",{className:"mb-2"},o.a.createElement(b.a,{variant:"outline-primary"},o.a.createElement("span",{className:"fas fa-arrow-left "}),"\xa0\xa0Back To Search")," ",o.a.createElement("span",null," "),o.a.createElement(b.a,{variant:"secondary"},o.a.createElement("span",{className:"fas fa-wrench "}),"\xa0\xa0Filters")),o.a.createElement("br",null),o.a.createElement("div",{className:"mb-2"},o.a.createElement("a",{href:"#d",onClick:this.prevent,className:"text-body"},o.a.createElement(v.a,{pill:!0,variant:"secondary",style:{padding:"0.55em 0.917em"}},o.a.createElement("i",{className:"fas fa-female"}),"  Women"),o.a.createElement("span",null," "),o.a.createElement(v.a,{pill:!0,variant:"secondary",style:{padding:"0.55em 0.917em"}},o.a.createElement("i",{className:"fas fa-male"}),"  Men"),o.a.createElement("span",null," "),o.a.createElement(v.a,{pill:!0,variant:"outline-danger",style:{padding:"0.55em 0.917em"}},o.a.createElement("i",{className:"fas fa-male"}),"  Advanced"),o.a.createElement("span",null," "),o.a.createElement(v.a,{pill:!0,variant:"outline-success",style:{padding:"0.55em 0.917em"}},o.a.createElement("i",{className:"fas fa-male"}),"  Intermediate"),o.a.createElement("span",null," "))))),o.a.createElement(f.a,{className:"mb-4"},o.a.createElement(f.a.Body,null,o.a.createElement("div",{className:"mb-2"},o.a.createElement(b.a,{variant:"outline-primary"},o.a.createElement("span",{className:"fas fa-arrow-left "}),"\xa0\xa0Back To Search")," ",o.a.createElement("span",null," "),o.a.createElement(b.a,{variant:"secondary"},o.a.createElement("span",{className:"fas fa-wrench "}),"\xa0\xa0Filters")),o.a.createElement("br",null),o.a.createElement("div",{className:"mb-2"},o.a.createElement(E.a.Group,null,o.a.createElement(E.a.Label,null,"Who Is It For"),o.a.createElement(u.a,{isMulti:!0,className:"react-select react-select-primary",classNamePrefix:"react-select",options:h,defaultValue:this.state.multiValueFor})),o.a.createElement(E.a.Group,null,o.a.createElement(E.a.Label,null,"Level"),o.a.createElement(u.a,{isMulti:!0,className:"react-select react-select-secondary",classNamePrefix:"react-select",options:O,defaultValue:this.state.multiValueLevel})),o.a.createElement("div",{className:"text-right mt-3"},o.a.createElement(b.a,{variant:"primary"},"Apply Filters"),"\xa0")))),o.a.createElement(f.a,{className:"mb-4"},o.a.createElement(f.a.Body,null,o.a.createElement(N.a,null,o.a.createElement("img",{src:"".concat("","/img/avatars/ws/team-tg.jpg"),alt:"User",className:"ui-w-60 rounded-circle"}),o.a.createElement(N.a.Body,{className:"pt-2 ml-3"},o.a.createElement("h5",{className:"mb-2"},"Team TG D\xfcsseldorf Basketball"),o.a.createElement("div",{className:"text-muted small"},"Stoffeler Kapellenweg 65 40225 D\xfcsseldorf"),o.a.createElement("div",{className:"mt-3"},o.a.createElement(b.a,{variant:"primary rounded-pill",size:"sm"},"Find out more")," \xa0")))),o.a.createElement("hr",{className:"border-light m-0"}),o.a.createElement(f.a.Body,null,o.a.createElement("div",{className:"mb-2"},o.a.createElement("span",{className:"text-muted"},"Sport:"),"\xa0\xa0",o.a.createElement("a",{href:"#d",onClick:this.prevent,className:"text-body"},"Basketball")),o.a.createElement("div",{className:"mb-2"},o.a.createElement("span",{className:"text-muted"},"Who is it for:"),"\xa0\xa0",o.a.createElement("a",{href:"#d",onClick:this.prevent,className:"text-body"},o.a.createElement(v.a,{pill:!0,variant:"outline-default",style:{padding:"0.55em 0.917em"}},o.a.createElement("i",{className:"fas fa-female"}),"  Women"),o.a.createElement("span",null," "),o.a.createElement(v.a,{pill:!0,variant:"outline-default",style:{padding:"0.55em 0.917em"}},o.a.createElement("i",{className:"fas fa-male"}),"  Men"),o.a.createElement("span",null," "))))),o.a.createElement(f.a,{className:"mb-4"},o.a.createElement(f.a.Body,null,o.a.createElement(N.a,null,o.a.createElement("img",{src:"".concat("","/img/avatars/ws/team-tg.jpg"),alt:"User",className:"ui-w-60 rounded-circle"}),o.a.createElement(N.a.Body,{className:"pt-2 ml-3"},o.a.createElement("h5",{className:"mb-2"},"Team TG D\xfcsseldorf Basketball"),o.a.createElement("div",{className:"text-muted small"},"Stoffeler Kapellenweg 65 40225 D\xfcsseldorf"),o.a.createElement("div",{className:"mt-3"},o.a.createElement(b.a,{variant:"primary rounded-pill",size:"sm"},"Find out more")," \xa0")))),o.a.createElement("hr",{className:"border-light m-0"}),o.a.createElement(f.a.Body,null,o.a.createElement("div",{className:"mb-2"},o.a.createElement("span",{className:"text-muted"},"Sport:"),"\xa0\xa0",o.a.createElement("a",{href:"#d",onClick:this.prevent,className:"text-body"},"Basketball")),o.a.createElement("div",{className:"mb-2"},o.a.createElement("span",{className:"text-muted"},"Who is it for:"),"\xa0\xa0",o.a.createElement("a",{href:"#d",onClick:this.prevent,className:"text-body"},o.a.createElement(v.a,{pill:!0,variant:"outline-default",style:{padding:"0.55em 0.917em"}},o.a.createElement("i",{className:"fas fa-female"}),"  Women"),o.a.createElement("span",null," "),o.a.createElement(v.a,{pill:!0,variant:"outline-default",style:{padding:"0.55em 0.917em"}},o.a.createElement("i",{className:"fas fa-male"}),"  Men"),o.a.createElement("span",null," "))))),o.a.createElement(f.a,{className:"mb-4"},o.a.createElement(f.a.Body,null,o.a.createElement(N.a,null,o.a.createElement("img",{src:"".concat("","/img/avatars/ws/team-tg.jpg"),alt:"User",className:"ui-w-60 rounded-circle"}),o.a.createElement(N.a.Body,{className:"pt-2 ml-3"},o.a.createElement("h5",{className:"mb-2"},"Team TG D\xfcsseldorf Basketball"),o.a.createElement("div",{className:"text-muted small"},"Stoffeler Kapellenweg 65 40225 D\xfcsseldorf"),o.a.createElement("div",{className:"mt-3"},o.a.createElement(b.a,{variant:"primary rounded-pill",size:"sm"},"Find out more")," \xa0")))),o.a.createElement("hr",{className:"border-light m-0"}),o.a.createElement(f.a.Body,null,o.a.createElement("div",{className:"mb-2"},o.a.createElement("span",{className:"text-muted"},"Sport:"),"\xa0\xa0",o.a.createElement("a",{href:"#d",onClick:this.prevent,className:"text-body"},"Basketball")),o.a.createElement("div",{className:"mb-2"},o.a.createElement("span",{className:"text-muted"},"Who is it for:"),"\xa0\xa0",o.a.createElement("a",{href:"#d",onClick:this.prevent,className:"text-body"},o.a.createElement(v.a,{pill:!0,variant:"outline-default",style:{padding:"0.55em 0.917em"}},o.a.createElement("i",{className:"fas fa-female"}),"  Women"),o.a.createElement("span",null," "),o.a.createElement(v.a,{pill:!0,variant:"outline-default",style:{padding:"0.55em 0.917em"}},o.a.createElement("i",{className:"fas fa-male"}),"  Men"),o.a.createElement("span",null," ")))))),o.a.createElement(p.a,null,o.a.createElement(f.a,{className:"mb-4"},o.a.createElement(f.a.Body,null,o.a.createElement("div",{className:"ui-bordered"},o.a.createElement("a",{ref:function(e){e&&e.style.setProperty("padding-top","100%","important")},href:"#d",onClick:this.prevent,className:"ui-rect ui-bg-cover text-white",style:{backgroundImage:"url('".concat("","/img/bg/ws/ws-google-map.jpg')")}})))))))}}]),t}(i.Component);a.default=w}}]);
//# sourceMappingURL=8.77da2086.chunk.js.map
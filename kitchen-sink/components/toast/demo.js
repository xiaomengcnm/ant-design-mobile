webpackJsonp([24,144],{6:function(n,a,s){"use strict";s(14),s(13)},13:function(n,a){},14:function(n,a){},16:function(n,a,s){"use strict";s(19)},17:function(n,a){"use strict";a.__esModule=!0,a["default"]=function(n,a){var s={};for(var t in n)a.indexOf(t)>=0||Object.prototype.hasOwnProperty.call(n,t)&&(s[t]=n[t]);return s}},19:function(n,a){},20:function(n,a,s){"use strict";s(6),s(22)},22:function(n,a){},26:function(n,a,s){"use strict";s(6),s(16),s(35)},29:function(n,a,s){"use strict";s(6),s(37)},35:function(n,a){},37:function(n,a){},176:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function e(n){var a;return v&&(v.destroy(),v=null),v=r["default"].newInstance({prefixCls:h,style:{},transitionName:"am-fade",className:(0,g["default"])((a={},(0,c["default"])(a,h+"-mask",n),(0,c["default"])(a,h+"-nomask",!n),a))})}function o(n,a){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,t=arguments[3],o=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],p={info:"",success:"success",fail:"fail",offline:"dislike",loading:"loading"}[a],c=e(o);c.notice({duration:s,style:{},content:p?i["default"].createElement("div",{className:h+"-text "+h+"-text-icon",role:"alert","aria-live":"assertive",__source:{fileName:l,lineNumber:35}},i["default"].createElement(d["default"],{type:p,size:"lg",__source:{fileName:l,lineNumber:36}}),i["default"].createElement("div",{className:h+"-text-info",__source:{fileName:l,lineNumber:37}},n)):i["default"].createElement("div",{className:h+"-text",role:"alert","aria-live":"assertive",__source:{fileName:l,lineNumber:38}},i["default"].createElement("div",{__source:{fileName:l,lineNumber:39}},n)),onClose:function(){t&&t(),c.destroy(),c=null,v=null}})}Object.defineProperty(a,"__esModule",{value:!0});var p=s(7),c=t(p),l="/Users/jiangkai/github/ant-design-mobile/components/toast/index.tsx",u=s(1),i=t(u),k=s(190),r=t(k),f=s(34),d=t(f),m=s(8),g=t(m),v=void 0,h="am-toast";a["default"]={SHORT:3,LONG:8,show:function(n,a,s){return o(n,"info",a,function(){},s)},info:function(n,a,s,t){return o(n,"info",a,s,t)},success:function(n,a,s,t){return o(n,"success",a,s,t)},fail:function(n,a,s,t){return o(n,"fail",a,s,t)},offline:function(n,a,s,t){return o(n,"offline",a,s,t)},loading:function(n,a,s,t){return o(n,"loading",a,s,t)},hide:function(){v&&(v.destroy(),v=null)}},n.exports=a["default"]},177:function(n,a,s){"use strict";s(6),s(16),s(186)},186:function(n,a){},188:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var e=s(7),o=t(e),p=s(3),c=t(p),l=s(12),u=t(l),i=s(5),k=t(i),r=s(4),f=t(r),d=s(1),m=t(d),g=s(8),v=t(g),h=s(11),y=t(h),b=function(n){function a(){var n,s,t,e;(0,c["default"])(this,a);for(var o=arguments.length,p=Array(o),l=0;l<o;l++)p[l]=arguments[l];return s=t=(0,k["default"])(this,(n=a.__proto__||Object.getPrototypeOf(a)).call.apply(n,[this].concat(p))),t.clearCloseTimer=function(){t.closeTimer&&(clearTimeout(t.closeTimer),t.closeTimer=null)},t.close=function(){t.clearCloseTimer(),t.props.onClose()},e=s,(0,k["default"])(t,e)}return(0,f["default"])(a,n),(0,u["default"])(a,[{key:"componentDidMount",value:function(){var n=this;this.props.duration&&(this.closeTimer=setTimeout(function(){n.close()},1e3*this.props.duration))}},{key:"componentWillUnmount",value:function(){this.clearCloseTimer()}},{key:"render",value:function(){var n,a=this.props,s=a.prefixCls+"-notice",t=(n={},(0,o["default"])(n,""+s,1),(0,o["default"])(n,s+"-closable",a.closable),(0,o["default"])(n,a.className,!!a.className),n);return m["default"].createElement("div",{className:(0,v["default"])(t),style:a.style},m["default"].createElement("div",{className:s+"-content"},a.children),a.closable?m["default"].createElement("a",{tabIndex:"0",onClick:this.close,className:s+"-close"},m["default"].createElement("span",{className:s+"-close-x"})):null)}}]),a}(d.Component);b.propTypes={duration:y["default"].number,onClose:y["default"].func,children:y["default"].any},b.defaultProps={onEnd:function(){},onClose:function(){},duration:1.5,style:{right:"50%"}},a["default"]=b,n.exports=a["default"]},189:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function e(){return"rcNotification_"+P+"_"+W++}Object.defineProperty(a,"__esModule",{value:!0});var o=s(17),p=t(o),c=s(7),l=t(c),u=s(2),i=t(u),k=s(3),r=t(k),f=s(12),d=t(f),m=s(5),g=t(m),v=s(4),h=t(v),y=s(1),b=t(y),C=s(11),N=t(C),_=s(9),T=t(_),E=s(89),w=t(E),x=s(191),B=t(x),j=s(8),S=t(j),O=s(188),M=t(O),W=0,P=Date.now(),L=function(n){function a(){var n,s,t,o;(0,r["default"])(this,a);for(var p=arguments.length,c=Array(p),l=0;l<p;l++)c[l]=arguments[l];return s=t=(0,g["default"])(this,(n=a.__proto__||Object.getPrototypeOf(a)).call.apply(n,[this].concat(c))),t.state={notices:[]},t.add=function(n){var a=n.key=n.key||e();t.setState(function(s){var t=s.notices;if(!t.filter(function(n){return n.key===a}).length)return{notices:t.concat(n)}})},t.remove=function(n){t.setState(function(a){return{notices:a.notices.filter(function(a){return a.key!==n})}})},o=s,(0,g["default"])(t,o)}return(0,h["default"])(a,n),(0,d["default"])(a,[{key:"getTransitionName",value:function(){var n=this.props,a=n.transitionName;return!a&&n.animation&&(a=n.prefixCls+"-"+n.animation),a}},{key:"render",value:function(){var n,a=this,s=this.props,t=this.state.notices.map(function(n){var t=(0,B["default"])(a.remove.bind(a,n.key),n.onClose);return b["default"].createElement(M["default"],(0,i["default"])({prefixCls:s.prefixCls},n,{onClose:t}),n.content)}),e=(n={},(0,l["default"])(n,s.prefixCls,1),(0,l["default"])(n,s.className,!!s.className),n);return b["default"].createElement("div",{className:(0,S["default"])(e),style:s.style},b["default"].createElement(w["default"],{transitionName:this.getTransitionName()},t))}}]),a}(y.Component);L.propTypes={prefixCls:N["default"].string,transitionName:N["default"].string,animation:N["default"].oneOfType([N["default"].string,N["default"].object]),style:N["default"].object},L.defaultProps={prefixCls:"rc-notification",animation:"fade",style:{top:65,left:"50%"}},L.newInstance=function(n){var a=n||{},s=a.getContainer,t=(0,p["default"])(a,["getContainer"]),e=void 0;s?e=s():(e=document.createElement("div"),document.body.appendChild(e));var o=T["default"].render(b["default"].createElement(L,t),e);return{notice:function(n){o.add(n)},removeNotice:function(n){o.remove(n)},component:o,destroy:function(){T["default"].unmountComponentAtNode(e),s||document.body.removeChild(e)}}},a["default"]=L,n.exports=a["default"]},190:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var e=s(189),o=t(e);a["default"]=o["default"],n.exports=a["default"]},191:function(n,a){"use strict";function s(){var n=[].slice.call(arguments,0);return 1===n.length?n[0]:function(){for(var a=0;a<n.length;a++)n[a]&&n[a].apply&&n[a].apply(this,arguments)}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=s,n.exports=a["default"]},636:function(n,a,s){n.exports={content:[["p","text\u3001icon\u3001success\u3001failure\u3001offline\u3001loading"]],meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/toast/demo/basic.md",id:"components-toast-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Toast<span class="token punctuation">,</span> WhiteSpace<span class="token punctuation">,</span> WingBlank<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">showToast</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  Toast<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">\'This is a toast tips !!!\'</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">showToastNoMask</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  Toast<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">\'Toast without mask !!!\'</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">successToast</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  Toast<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">\'Load success !!!\'</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">failToast</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  Toast<span class="token punctuation">.</span><span class="token function">fail</span><span class="token punctuation">(</span><span class="token string">\'Load failed !!!\'</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">offline</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  Toast<span class="token punctuation">.</span><span class="token function">offline</span><span class="token punctuation">(</span><span class="token string">\'Network connection failed !!!\'</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">loadingToast</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  Toast<span class="token punctuation">.</span><span class="token function">loading</span><span class="token punctuation">(</span><span class="token string">\'Loading...\'</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Load complete !!!\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token comment" spellcheck="true">/* eslint global-require: 0 */</span>\n<span class="token keyword">const</span> ToastExample <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WingBlank</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>showToast<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Text toast<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>showToastNoMask<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Without mask<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> Toast<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://gw.alipayobjects.com/zos/rmsportal/jBfVSpDwPbitsABtDDlB.svg<span class="token punctuation">"</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>am-icon</span> <span class="token attr-name">am-icon-md"</span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>icon<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      Cumstom Icon\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>successToast<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Success toast<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>failToast<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Failed toast<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>offline<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Network failure toast<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>loadingToast<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Loading toast<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>WingBlank</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ToastExample</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n){return n&&n.__esModule?n:{"default":n}}function a(){g["default"].info("This is a toast tips !!!",1)}function t(){g["default"].info("Toast without mask !!!",2,null,!1)}function e(){g["default"].success("Load success !!!",1)}function o(){g["default"].fail("Load failed !!!",1)}function p(){g["default"].offline("Network connection failed !!!",1)}function c(){g["default"].loading("Loading...",1,function(){console.log("Load complete !!!")})}var l=s(1),u=(s(9),s(29),s(56)),i=n(u),k=(s(26),s(52)),r=n(k),f=(s(20),s(28)),d=n(f),m=(s(177),s(176)),g=n(m),v=function(){return l.createElement(i["default"],null,l.createElement(d["default"],null),l.createElement(r["default"],{onClick:a},"Text toast"),l.createElement(d["default"],null),l.createElement(r["default"],{onClick:t},"Without mask"),l.createElement(d["default"],null),l.createElement(r["default"],{onClick:function(){return g["default"].info(l.createElement("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/jBfVSpDwPbitsABtDDlB.svg",className:"am-icon am-icon-md",alt:"icon"}),1)}},"Cumstom Icon"),l.createElement(d["default"],null),l.createElement(r["default"],{onClick:e},"Success toast"),l.createElement(d["default"],null),l.createElement(r["default"],{onClick:o},"Failed toast"),l.createElement(d["default"],null),l.createElement(r["default"],{onClick:p},"Network failure toast"),l.createElement(d["default"],null),l.createElement(r["default"],{onClick:c},"Loading toast"),l.createElement(d["default"],null))};return l.createElement(v,null)}}},755:function(n,a,s){n.exports={basic:s(636)}}});
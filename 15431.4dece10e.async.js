"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[15431],{415431:function(zt,V,d){d.d(V,{Z:function(){return Ct}});var J=d(9783),a=d.n(J),K=d(805574),z=d.n(K),Q=d(97857),r=d.n(Q),Y=d(513769),E=d.n(Y),b=d(667294),q=d(294184),B=d.n(q),$=d(325669),k=d(73287),_=d(947170),tt=d(156951),et={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1},nt=et,ot=b.createContext({}),G=ot,at=d(45598),lt=["span"],ct=function(t){return(0,at.default)(t).map(function(e){return r()(r()({},e==null?void 0:e.props),{},{key:e.key})})};function rt(l,t,e){var o=b.useMemo(function(){return t||ct(e)},[t,e]),n=b.useMemo(function(){return o.map(function(i){var c=i.span,m=E()(i,lt);return r()(r()({},m),{},{span:typeof c=="number"?c:(0,$.m9)(l,c)})})},[o,l]);return n}function X(l,t,e){var o=l,n=!1;return(e===void 0||e>t)&&(o=r()(r()({},l),{},{span:t}),n=e!==void 0),[o,n]}function it(l,t){var e=[],o=[],n=t,i=!1;return l.filter(function(c){return c}).forEach(function(c,m){var h=c==null?void 0:c.span,y=h||1;if(m===l.length-1){var x=X(c,n,h),v=z()(x,2),u=v[0],S=v[1];i=i||S,o.push(u),e.push(o);return}if(y<n)n-=y,o.push(c);else{var g=X(c,n,y),j=z()(g,2),N=j[0],C=j[1];i=i||C,o.push(N),e.push(o),n=t,o=[]}}),[e,i]}var st=function(t,e){var o=(0,b.useMemo)(function(){return it(e,t)},[e,t]),n=z()(o,2),i=n[0],c=n[1];if(!1)var m;return i},dt=st,mt=function(t){var e=t.children;return e},ut=mt,s=d(785893);function R(l){return l!=null}var vt=function(t){var e=t.itemPrefixCls,o=t.component,n=t.span,i=t.className,c=t.style,m=t.labelStyle,h=t.contentStyle,y=t.bordered,x=t.label,v=t.content,u=t.colon,S=o;if(y){var g;return(0,s.jsxs)(S,{className:B()((g={},a()(g,"".concat(e,"-item-label"),R(x)),a()(g,"".concat(e,"-item-content"),R(v)),g),i),style:c,colSpan:n,children:[R(x)&&(0,s.jsx)("span",{style:m,children:x}),R(v)&&(0,s.jsx)("span",{style:h,children:v})]})}return(0,s.jsx)(S,{className:B()("".concat(e,"-item"),i),style:c,colSpan:n,children:(0,s.jsxs)("div",{className:"".concat(e,"-item-container"),children:[(x||x===0)&&(0,s.jsx)("span",{className:B()("".concat(e,"-item-label"),a()({},"".concat(e,"-item-no-colon"),!u)),style:m,children:x}),(v||v===0)&&(0,s.jsx)("span",{className:B()("".concat(e,"-item-content")),style:h,children:v})]})})},D=vt;function W(l,t,e){var o=t.colon,n=t.prefixCls,i=t.bordered,c=e.component,m=e.type,h=e.showLabel,y=e.showContent,x=e.labelStyle,v=e.contentStyle;return l.map(function(u,S){var g=u.label,j=u.children,N=u.prefixCls,C=N===void 0?n:N,P=u.className,w=u.style,M=u.labelStyle,T=u.contentStyle,I=u.span,p=I===void 0?1:I,f=u.key;return typeof c=="string"?(0,s.jsx)(D,{className:P,style:w,labelStyle:r()(r()({},x),M),contentStyle:r()(r()({},v),T),span:p,colon:o,component:c,itemPrefixCls:C,bordered:i,label:h?g:null,content:y?j:null},"".concat(m,"-").concat(f||S)):[(0,s.jsx)(D,{className:P,style:r()(r()(r()({},x),w),M),span:1,colon:o,component:c[0],itemPrefixCls:C,bordered:i,label:g},"label-".concat(f||S)),(0,s.jsx)(D,{className:P,style:r()(r()(r()({},v),w),T),span:p*2-1,component:c[1],itemPrefixCls:C,bordered:i,content:j},"content-".concat(f||S))]})}var ft=function(t){var e=b.useContext(G),o=t.prefixCls,n=t.vertical,i=t.row,c=t.index,m=t.bordered;return n?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("tr",{className:"".concat(o,"-row"),children:W(i,t,r()({component:"th",type:"label",showLabel:!0},e))},"label-".concat(c)),(0,s.jsx)("tr",{className:"".concat(o,"-row"),children:W(i,t,r()({component:"td",type:"content",showContent:!0},e))},"content-".concat(c))]}):(0,s.jsx)("tr",{className:"".concat(o,"-row"),children:W(i,t,r()({component:m?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0},e))},c)},xt=ft,Z=d(548073),yt=d(141035),ht=d(986943),gt=function(t){var e,o,n=t.componentCls,i=t.labelBg;return a()({},"&".concat(n,"-bordered"),(o={},a()(o,"> ".concat(n,"-view"),a()({border:"".concat(t.lineWidth,"px ").concat(t.lineType," ").concat(t.colorSplit),"> table":{tableLayout:"auto",borderCollapse:"collapse"}},"".concat(n,"-row"),(e={borderBottom:"".concat(t.lineWidth,"px ").concat(t.lineType," ").concat(t.colorSplit),"&:last-child":{borderBottom:"none"}},a()(e,"> ".concat(n,"-item-label, > ").concat(n,"-item-content"),{padding:"".concat(t.padding,"px ").concat(t.paddingLG,"px"),borderInlineEnd:"".concat(t.lineWidth,"px ").concat(t.lineType," ").concat(t.colorSplit),"&:last-child":{borderInlineEnd:"none"}}),a()(e,"> ".concat(n,"-item-label"),{color:t.colorTextSecondary,backgroundColor:i,"&::after":{display:"none"}}),e))),a()(o,"&".concat(n,"-middle"),a()({},"".concat(n,"-row"),a()({},"> ".concat(n,"-item-label, > ").concat(n,"-item-content"),{padding:"".concat(t.paddingSM,"px ").concat(t.paddingLG,"px")}))),a()(o,"&".concat(n,"-small"),a()({},"".concat(n,"-row"),a()({},"> ".concat(n,"-item-label, > ").concat(n,"-item-content"),{padding:"".concat(t.paddingXS,"px ").concat(t.padding,"px")}))),o))},St=function(t){var e,o,n=t.componentCls,i=t.extraColor,c=t.itemPaddingBottom,m=t.colonMarginRight,h=t.colonMarginLeft,y=t.titleMarginBottom;return a()({},n,r()(r()(r()({},(0,Z.Wf)(t)),gt(t)),{},(o={},a()(o,"&-rtl",{direction:"rtl"}),a()(o,"".concat(n,"-header"),{display:"flex",alignItems:"center",marginBottom:y}),a()(o,"".concat(n,"-title"),r()(r()({},Z.vS),{},{flex:"auto",color:t.titleColor,fontWeight:t.fontWeightStrong,fontSize:t.fontSizeLG,lineHeight:t.lineHeightLG})),a()(o,"".concat(n,"-extra"),{marginInlineStart:"auto",color:i,fontSize:t.fontSize}),a()(o,"".concat(n,"-view"),{width:"100%",borderRadius:t.borderRadiusLG,table:{width:"100%",tableLayout:"fixed"}}),a()(o,"".concat(n,"-row"),{"> th, > td":{paddingBottom:c},"&:last-child":{borderBottom:"none"}}),a()(o,"".concat(n,"-item-label"),a()({color:t.colorTextTertiary,fontWeight:"normal",fontSize:t.fontSize,lineHeight:t.lineHeight,textAlign:"start","&::after":{content:'":"',position:"relative",top:-.5,marginInline:"".concat(h,"px ").concat(m,"px")}},"&".concat(n,"-item-no-colon::after"),{content:'""'})),a()(o,"".concat(n,"-item-no-label"),{"&::after":{margin:0,content:'""'}}),a()(o,"".concat(n,"-item-content"),{display:"table-cell",flex:1,color:t.contentColor,fontSize:t.fontSize,lineHeight:t.lineHeight,wordBreak:"break-word",overflowWrap:"break-word"}),a()(o,"".concat(n,"-item"),{paddingBottom:0,verticalAlign:"top","&-container":(e={display:"flex"},a()(e,"".concat(n,"-item-label"),{display:"inline-flex",alignItems:"baseline"}),a()(e,"".concat(n,"-item-content"),{display:"inline-flex",alignItems:"baseline"}),e)}),a()(o,"&-middle",a()({},"".concat(n,"-row"),{"> th, > td":{paddingBottom:t.paddingSM}})),a()(o,"&-small",a()({},"".concat(n,"-row"),{"> th, > td":{paddingBottom:t.paddingXS}})),o)))},pt=(0,yt.Z)("Descriptions",function(l){var t=(0,ht.TS)(l,{});return[St(t)]},function(l){return{labelBg:l.colorFillAlter,titleColor:l.colorText,titleMarginBottom:l.fontSizeSM*l.lineHeightSM,itemPaddingBottom:l.padding,colonMarginRight:l.marginXS,colonMarginLeft:l.marginXXS/2,contentColor:l.colorText,extraColor:l.colorText}}),bt=["prefixCls","title","extra","column","colon","bordered","layout","children","className","rootClassName","style","size","labelStyle","contentStyle","items"],F=function(t){var e,o=t.prefixCls,n=t.title,i=t.extra,c=t.column,m=t.colon,h=m===void 0?!0:m,y=t.bordered,x=t.layout,v=t.children,u=t.className,S=t.rootClassName,g=t.style,j=t.size,N=t.labelStyle,C=t.contentStyle,P=t.items,w=E()(t,bt),M=b.useContext(k.E_),T=M.getPrefixCls,I=M.direction,p=M.descriptions,f=T("descriptions",o),A=(0,tt.Z)(),jt=b.useMemo(function(){var L;return typeof c=="number"?c:(L=(0,$.m9)(A,r()(r()({},nt),c)))!==null&&L!==void 0?L:3},[A,c]),Nt=rt(A,P,v),H=(0,_.Z)(j),Mt=dt(jt,Nt),Bt=pt(f),O=z()(Bt,2),Pt=O[0],wt=O[1],Lt=b.useMemo(function(){return{labelStyle:N,contentStyle:C}},[N,C]);return Pt((0,s.jsx)(G.Provider,{value:Lt,children:(0,s.jsxs)("div",r()(r()({className:B()(f,p==null?void 0:p.className,(e={},a()(e,"".concat(f,"-").concat(H),H&&H!=="default"),a()(e,"".concat(f,"-bordered"),!!y),a()(e,"".concat(f,"-rtl"),I==="rtl"),e),u,S,wt),style:r()(r()({},p==null?void 0:p.style),g)},w),{},{children:[(n||i)&&(0,s.jsxs)("div",{className:"".concat(f,"-header"),children:[n&&(0,s.jsx)("div",{className:"".concat(f,"-title"),children:n}),i&&(0,s.jsx)("div",{className:"".concat(f,"-extra"),children:i})]}),(0,s.jsx)("div",{className:"".concat(f,"-view"),children:(0,s.jsx)("table",{children:(0,s.jsx)("tbody",{children:Mt.map(function(L,U){return(0,s.jsx)(xt,{index:U,colon:h,prefixCls:f,vertical:x==="vertical",bordered:y,row:L},U)})})})})]}))}))};F.Item=ut;var Ct=F}}]);

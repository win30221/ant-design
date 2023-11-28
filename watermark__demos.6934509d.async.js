"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[96077],{34607:function(H,l){Object.defineProperty(l,"__esModule",{value:!0});var e={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"}}]},name:"question-circle",theme:"outlined"};l.default=e},554434:function(H,l,e){Object.defineProperty(l,"__esModule",{value:!0}),Object.defineProperty(l,"default",{enumerable:!0,get:function(){return X}});var W=s(e(667294)),d=O(e(34607)),f=O(e(592074));function g(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}function O(n){return n&&n.__esModule?n:{default:n}}function i(n){if(typeof WeakMap!="function")return null;var t=new WeakMap,r=new WeakMap;return(i=function(u){return u?r:t})(n)}function s(n,t){if(!t&&n&&n.__esModule)return n;if(n===null||typeof n!="object"&&typeof n!="function")return{default:n};var r=i(t);if(r&&r.has(n))return r.get(n);var u={},y=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var P in n)if(P!=="default"&&Object.prototype.hasOwnProperty.call(n,P)){var b=y?Object.getOwnPropertyDescriptor(n,P):null;b&&(b.get||b.set)?Object.defineProperty(u,P,b):u[P]=n[P]}return u.default=n,r&&r.set(n,u),u}function U(n){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{},u=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(u=u.concat(Object.getOwnPropertySymbols(r).filter(function(y){return Object.getOwnPropertyDescriptor(r,y).enumerable}))),u.forEach(function(y){g(n,y,r[y])})}return n}function v(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(n);t&&(u=u.filter(function(y){return Object.getOwnPropertyDescriptor(n,y).enumerable})),r.push.apply(r,u)}return r}function Z(n,t){return t=t!=null?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):v(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))}),n}var w=function(n,t){return W.createElement(f.default,Z(U({},n),{ref:t,icon:d.default}))},X=W.forwardRef(w)},25835:function(H,l,e){e.d(l,{Z:function(){return ke}});var W=e(97857),d=e.n(W),f=e(719632),g=e.n(f),O=e(805574),i=e.n(O),s=e(667294),U=e(763199),v=e(294184),Z=e.n(v),w=e(301192),X=e(358245),n=3;function t(m,a){var _=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,o=document.createElement("canvas"),C=o.getContext("2d"),j=m*_,M=a*_;return o.setAttribute("width","".concat(j,"px")),o.setAttribute("height","".concat(M,"px")),C.save(),[C,o,j,M]}function r(){function m(a,_,o,C,j,M,Q,p){var R=t(C,j,o),E=i()(R,4),x=E[0],$=E[1],S=E[2],le=E[3];if(a instanceof HTMLImageElement)x.drawImage(a,0,0,S,le);else{var He=M.color,Xe=M.fontSize,Se=M.fontStyle,Ge=M.fontWeight,K=M.fontFamily,Ie=M.textAlign,Ae=Number(Xe)*o;x.font="".concat(Se," normal ").concat(Ge," ").concat(Ae,"px/").concat(j,"px ").concat(K),x.fillStyle=He,x.textAlign=Ie,x.textBaseline="top";var Oe=Array.isArray(a)?a:[a];Oe==null||Oe.forEach(function(I,T){x.fillText(I!=null?I:"",S/2,T*(Ae+n*o))})}var V=Math.PI/180*Number(_),We=Math.max(C,j),Re=t(We,We,o),ue=i()(Re,3),ce=ue[0],Te=ue[1],F=ue[2];ce.translate(F/2,F/2),ce.rotate(V),S>0&&le>0&&ce.drawImage($,-S/2,-le/2);function be(I,T){var he=I*Math.cos(V)-T*Math.sin(V),_e=I*Math.sin(V)+T*Math.cos(V);return[he,_e]}var J=0,de=0,q=0,fe=0,N=S/2,ee=le/2,Le=[[0-N,0-ee],[0+N,0-ee],[0+N,0+ee],[0-N,0+ee]];Le.forEach(function(I){var T=i()(I,2),he=T[0],_e=T[1],Ue=be(he,_e),ge=i()(Ue,2),$e=ge[0],Ke=ge[1];J=Math.min(J,$e),de=Math.max(de,$e),q=Math.min(q,Ke),fe=Math.max(fe,Ke)});var Be=J+F/2,Ze=q+F/2,z=de-J,k=fe-q,te=Q*o,ne=p*o,ve=(z+te)*2,me=k+ne,Me=t(ve,me),we=i()(Me,2),Ye=we[0],ze=we[1];function ae(){var I=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,T=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;Ye.drawImage(Te,Be,Ze,z,k,I,T,z,k)}return ae(),ae(z+te,-k/2-ne/2),ae(z+te,+k/2+ne/2),[ze.toDataURL(),ve/o,me/o]}return m}var u=e(564543),y=e(656790);function P(m){var a=s.useRef(!1),_=s.useRef(),o=(0,y.zX)(m);return function(){a.current||(a.current=!0,o(),_.current=(0,u.Z)(function(){a.current=!1}))}}function b(m){return m.replace(/([A-Z])/g,"-$1").toLowerCase()}function oe(m){return Object.keys(m).map(function(a){return"".concat(b(a),": ").concat(m[a],";")}).join(" ")}function Ee(){return window.devicePixelRatio||1}var G=function(a,_){var o=!1;return a.removedNodes.length&&(o=Array.from(a.removedNodes).some(function(C){return _(C)})),a.type==="attributes"&&_(a.target)&&(o=!0),o},D=2,xe=3,se={visibility:"visible !important"};function Y(m){var a=s.useState(function(){return new Map}),_=i()(a,1),o=_[0],C=function(p,R,E){if(E){if(!o.get(E)){var x=document.createElement("div");o.set(E,x)}var $=o.get(E);$.setAttribute("style",oe(d()(d()({},m),{},{backgroundImage:"url('".concat(p,"')"),backgroundSize:"".concat(Math.floor(R),"px")},se))),$.removeAttribute("class"),E.append($)}},j=function(p){var R=o.get(p);R&&p&&p.removeChild(R),o.delete(p)},M=function(p){return Array.from(o.values()).includes(p)};return[C,j,M]}var ie=e(785893);function L(m,a){return m.size===a.size?m:a}var Ce=100,je=100,Ne=function(a){var _,o,C=a.zIndex,j=C===void 0?9:C,M=a.rotate,Q=M===void 0?-22:M,p=a.width,R=a.height,E=a.image,x=a.content,$=a.font,S=$===void 0?{}:$,le=a.style,He=a.className,Xe=a.rootClassName,Se=a.gap,Ge=Se===void 0?[Ce,je]:Se,K=a.offset,Ie=a.children,Ae=a.inherit,Oe=Ae===void 0?!0:Ae,V=(0,w.Z)(),We=i()(V,2),Re=We[1],ue=S.color,ce=ue===void 0?Re.colorFill:ue,Te=S.fontSize,F=Te===void 0?Re.fontSizeLG:Te,be=S.fontWeight,J=be===void 0?"normal":be,de=S.fontStyle,q=de===void 0?"normal":de,fe=S.fontFamily,N=fe===void 0?"sans-serif":fe,ee=S.textAlign,Le=ee===void 0?"center":ee,Be=i()(Ge,2),Ze=Be[0],z=Ze===void 0?Ce:Ze,k=Be[1],te=k===void 0?je:k,ne=z/2,ve=te/2,me=(_=K==null?void 0:K[0])!==null&&_!==void 0?_:ne,Me=(o=K==null?void 0:K[1])!==null&&o!==void 0?o:ve,we=s.useMemo(function(){var A={zIndex:j,position:"absolute",left:0,top:0,width:"100%",height:"100%",pointerEvents:"none",backgroundRepeat:"repeat"},h=me-ne,c=Me-ve;return h>0&&(A.left="".concat(h,"px"),A.width="calc(100% - ".concat(h,"px)"),h=0),c>0&&(A.top="".concat(c,"px"),A.height="calc(100% - ".concat(c,"px)"),c=0),A.backgroundPosition="".concat(h,"px ").concat(c,"px"),A},[j,me,ne,Me,ve]),Ye=s.useState(),ze=i()(Ye,2),ae=ze[0],I=ze[1],T=s.useState(new Set),he=i()(T,2),_e=he[0],Ue=he[1],ge=s.useMemo(function(){var A=ae?[ae]:[];return[].concat(A,g()(Array.from(_e)))},[ae,_e]),$e=function(h){var c=120,B=64;if(!E&&h.measureText){h.font="".concat(Number(F),"px ").concat(N);var ye=Array.isArray(x)?x:[x],Pe=ye.map(function(re){var De=h.measureText(re);return[De.width,De.fontBoundingBoxAscent+De.fontBoundingBoxDescent]});c=Math.ceil(Math.max.apply(Math,g()(Pe.map(function(re){return re[0]})))),B=Math.ceil(Math.max.apply(Math,g()(Pe.map(function(re){return re[1]}))))*ye.length+(ye.length-1)*n}return[p!=null?p:c,R!=null?R:B]},Ke=r(),tt=s.useState(null),Je=i()(tt,2),Fe=Je[0],nt=Je[1],at=function(){var h=document.createElement("canvas"),c=h.getContext("2d");if(c){var B=Ee(),ye=$e(c),Pe=i()(ye,2),re=Pe[0],De=Pe[1],Ve=function(dt){var ft=Ke(dt||"",Q,B,re,De,{color:ce,fontSize:F,fontStyle:q,fontWeight:J,fontFamily:N,textAlign:Le},z,te),et=i()(ft,2),vt=et[0],mt=et[1];nt([vt,mt])};if(E){var pe=new Image;pe.onload=function(){Ve(pe)},pe.onerror=function(){Ve(x)},pe.crossOrigin="anonymous",pe.referrerPolicy="no-referrer",pe.src=E}else Ve(x)}},qe=P(at),rt=Y(we),Qe=i()(rt,3),ot=Qe[0],st=Qe[1],it=Qe[2];(0,s.useEffect)(function(){Fe&&ge.forEach(function(A){ot(Fe[0],Fe[1],A)})},[Fe,ge]);var lt=function(h){h.forEach(function(c){G(c,it)&&qe()})};(0,U.b)(ge,lt),(0,s.useEffect)(qe,[Q,j,p,R,E,x,ce,F,J,q,N,Le,z,te,me,Me]);var ut=s.useMemo(function(){return{add:function(h){Ue(function(c){var B=new Set(c);return B.add(h),L(c,B)})},remove:function(h){st(h),Ue(function(c){var B=new Set(c);return B.delete(h),L(c,B)})}}},[]),ct=Oe?(0,ie.jsx)(X.Z.Provider,{value:ut,children:Ie}):Ie;return(0,ie.jsx)("div",{ref:I,className:Z()(He,Xe),style:d()({position:"relative"},le),children:ct})},ke=Ne},821753:function(H,l,e){e.r(l);var W=e(667294),d=e(25835),f=e(785893),g=function(){return(0,f.jsx)(d.Z,{content:"Ant Design",children:(0,f.jsx)("div",{style:{height:500}})})};l.default=g},104996:function(H,l,e){e.r(l);var W=e(97857),d=e.n(W),f=e(805574),g=e.n(f),O=e(667294),i=e(185209),s=e(506380),U=e(25835),v=e(432210),Z=e(483465),w=e(329573),X=e(945016),n=e(469922),t=e(785893),r=i.Z.Paragraph,u=function(){var P=s.Z.useForm(),b=g()(P,1),oe=b[0],Ee=(0,O.useState)({content:"Ant Design",color:"rgba(0, 0, 0, 0.15)",fontSize:16,zIndex:11,rotate:-22,gap:[100,100],offset:void 0}),G=g()(Ee,2),D=G[0],xe=G[1],se=D.content,Y=D.color,ie=D.fontSize,L=D.zIndex,Ce=D.rotate,je=D.gap,Ne=D.offset,ke=(0,O.useMemo)(function(){return{content:se,font:{color:typeof Y=="string"?Y:Y.toRgbString(),fontSize:ie},zIndex:L,rotate:Ce,gap:je,offset:Ne}},[D]);return(0,t.jsxs)("div",{style:{display:"flex"},children:[(0,t.jsxs)(U.Z,d()(d()({},ke),{},{children:[(0,t.jsxs)(i.Z,{children:[(0,t.jsx)(r,{children:"The light-speed iteration of the digital world makes products more complex. However, human consciousness and attention resources are limited. Facing this design contradiction, the pursuit of natural interaction will be the consistent direction of Ant Design."}),(0,t.jsx)(r,{children:"Natural user cognition: According to cognitive psychology, about 80% of external information is obtained through visual channels. The most important visual elements in the interface design, including layout, colors, illustrations, icons, etc., should fully absorb the laws of nature, thereby reducing the user's cognitive cost and bringing authentic and smooth feelings. In some scenarios, opportunely adding other sensory channels such as hearing, touch can create a richer and more natural product experience."}),(0,t.jsx)(r,{children:"Natural user behavior: In the interaction with the system, the designer should fully understand the relationship between users, system roles, and task objectives, and also contextually organize system functions and services. At the same time, a series of methods such as behavior analysis, artificial intelligence and sensors could be applied to assist users to make effective decisions and reduce extra operations of users, to save users' mental and physical resources and make human-computer interaction more natural."})]}),(0,t.jsx)("img",{style:{zIndex:10,width:"100%",maxWidth:800,position:"relative"},src:"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*zx7LTI_ECSAAAAAAAAAAAABkARQnAQ",alt:"\u793A\u4F8B\u56FE\u7247"})]})),(0,t.jsxs)(s.Z,{style:{width:280,flexShrink:0,borderLeft:"1px solid #eee",paddingLeft:20,marginLeft:20},form:oe,layout:"vertical",initialValues:D,onValuesChange:function(a,_){xe(_)},children:[(0,t.jsx)(s.Z.Item,{name:"content",label:"Content",children:(0,t.jsx)(v.Z,{placeholder:"\u8BF7\u8F93\u5165"})}),(0,t.jsx)(s.Z.Item,{name:"color",label:"Color",children:(0,t.jsx)(Z.Z,{})}),(0,t.jsx)(s.Z.Item,{name:"fontSize",label:"FontSize",children:(0,t.jsx)(w.Z,{step:1,min:1,max:100})}),(0,t.jsx)(s.Z.Item,{name:"zIndex",label:"zIndex",children:(0,t.jsx)(w.Z,{step:1,min:0,max:100})}),(0,t.jsx)(s.Z.Item,{name:"rotate",label:"Rotate",children:(0,t.jsx)(w.Z,{step:1,min:-180,max:180})}),(0,t.jsx)(s.Z.Item,{label:"Gap",style:{marginBottom:0},children:(0,t.jsxs)(X.Z,{style:{display:"flex"},align:"baseline",children:[(0,t.jsx)(s.Z.Item,{name:["gap",0],children:(0,t.jsx)(n.Z,{placeholder:"gapX",style:{width:"100%"}})}),(0,t.jsx)(s.Z.Item,{name:["gap",1],children:(0,t.jsx)(n.Z,{placeholder:"gapY",style:{width:"100%"}})})]})}),(0,t.jsx)(s.Z.Item,{label:"Offset",style:{marginBottom:0},children:(0,t.jsxs)(X.Z,{style:{display:"flex"},align:"baseline",children:[(0,t.jsx)(s.Z.Item,{name:["offset",0],children:(0,t.jsx)(n.Z,{placeholder:"offsetLeft",style:{width:"100%"}})}),(0,t.jsx)(s.Z.Item,{name:["offset",1],children:(0,t.jsx)(n.Z,{placeholder:"offsetTop",style:{width:"100%"}})})]})})]})]})};l.default=u},159695:function(H,l,e){e.r(l);var W=e(667294),d=e(25835),f=e(785893),g=function(){return(0,f.jsx)(d.Z,{height:30,width:130,image:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*lkAoRbywo0oAAAAAAAAAAAAADrJ8AQ/original",children:(0,f.jsx)("div",{style:{height:500}})})};l.default=g},704961:function(H,l,e){e.r(l);var W=e(667294),d=e(25835),f=e(785893),g=function(){return(0,f.jsx)(d.Z,{content:["Ant Design","Happy Working"],children:(0,f.jsx)("div",{style:{height:500}})})};l.default=g},112391:function(H,l,e){e.r(l);var W=e(805574),d=e.n(W),f=e(667294),g=e(945016),O=e(988872),i=e(25835),s=e(98651),U=e(302281),v=e(785893),Z=(0,v.jsx)("div",{style:{height:300,display:"flex",justifyContent:"center",alignItems:"center",background:"rgba(150, 150, 150, 0.2)"},children:"A mock height"}),w=function(){var n=f.useState(!1),t=d()(n,2),r=t[0],u=t[1],y=f.useState(!1),P=d()(y,2),b=P[0],oe=P[1],Ee=f.useState(!1),G=d()(Ee,2),D=G[0],xe=G[1],se=function(){return u(!1)},Y=function(){return oe(!1)},ie=function(){return xe(!1)};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(g.Z,{children:[(0,v.jsx)(O.ZP,{onClick:function(){return u(!0)},children:"Show in Modal"}),(0,v.jsx)(O.ZP,{onClick:function(){return oe(!0)},children:"Show in Drawer"}),(0,v.jsx)(O.ZP,{onClick:function(){return xe(!0)},children:"Not Show in Drawer"})]}),(0,v.jsxs)(i.Z,{content:"Ant Design",children:[(0,v.jsx)(s.Z,{destroyOnClose:!0,open:r,title:"Modal",onCancel:se,onOk:se,children:Z}),(0,v.jsx)(U.Z,{destroyOnClose:!0,open:b,title:"Drawer",onClose:Y,children:Z})]}),(0,v.jsx)(i.Z,{content:"Ant Design",inherit:!1,children:(0,v.jsx)(U.Z,{destroyOnClose:!0,open:D,title:"Drawer",onClose:ie,children:Z})})]})};l.default=w}}]);

"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[52505],{52505:function(X,w,t){t.r(w),t.d(w,{scopes:function(){return N}});var i=t(667294),v=t(988872),m=t(302281),a=t(371707),I=t(945016),y=t(965516),R=t(883458),W=t(604963),f=t(506380),T=t(432210),O=t(664095),B=t(469181),L=t(796586),z=t(315816),A=t(89686),Z=t(773036),H=t(979331),K=t(98651),U=t(724969),x=t(65630),N={"drawer-demo-basic-right":{React:i,useState:i.useState,Button:v.ZP,Drawer:m.Z},"drawer-demo-placement":{React:i,useState:i.useState,Button:v.ZP,Drawer:m.Z,Radio:a.ZP,Space:I.Z},"drawer-demo-extra":{React:i,useState:i.useState,Button:v.ZP,Drawer:m.Z,Radio:a.ZP,Space:I.Z},"drawer-demo-render-in-current":{React:i,useState:i.useState,Button:v.ZP,Drawer:m.Z,theme:y.Z},"drawer-demo-form-in-drawer":{React:i,useState:i.useState,PlusOutlined:U.Z,Button:v.ZP,Col:R.Z,DatePicker:W.Z,Drawer:m.Z,Form:f.Z,Input:T.Z,Row:O.Z,Select:B.Z,Space:I.Z},"drawer-demo-user-profile":{React:i,useState:i.useState,Avatar:L.C,Col:R.Z,Divider:z.Z,Drawer:m.Z,List:A.Z,Row:O.Z},"drawer-demo-multi-level-drawer":{React:i,useState:i.useState,Button:v.ZP,Drawer:m.Z},"drawer-demo-size":{React:i,useState:i.useState,Button:v.ZP,Drawer:m.Z,Space:I.Z},"drawer-demo-classnames":{React:i,useState:i.useState,Button:v.ZP,ConfigProvider:Z.ZP,Drawer:m.Z,Space:I.Z,createStyles:x.kc,useTheme:x.Fg},"drawer-demo-config-provider":{React:i,useRef:i.useRef,useState:i.useState,Button:v.ZP,ConfigProvider:Z.ZP,Drawer:m.Z},"drawer-demo-no-mask":{React:i,useState:i.useState,Button:v.ZP,Drawer:m.Z},"drawer-demo-render-panel":{React:i,Drawer:m.Z},"drawer-demo-scroll-debug":{React:i,useState:i.useState,Switch:H.Z,Space:I.Z,Drawer:m.Z,Modal:K.Z},"drawer-demo-component-token":{React:i,ConfigProvider:Z.ZP,Drawer:m.Z}}},979331:function(X,w,t){t.d(w,{Z:function(){return _}});var i=t(97857),v=t.n(i),m=t(9783),a=t.n(m),I=t(805574),y=t.n(I),R=t(513769),W=t.n(R),f=t(667294),T=t(100628),O=t.n(T),B=t(294184),L=t.n(B),z=t(33413),A=t(189265),Z=t(73287),H=t(147315),K=t(947170),U=t(510274),x=t(548073),N=t(141035),b=t(986943),F=function(n){var c,e,l,h,d,o=n.componentCls,S=n.trackHeightSM,g=n.trackPadding,u=n.trackMinWidthSM,P=n.innerMinMarginSM,s=n.innerMaxMarginSM,M=n.handleSizeSM,E="".concat(o,"-inner");return a()({},o,a()({},"&".concat(o,"-small"),(d={minWidth:u,height:S,lineHeight:"".concat(S,"px")},a()(d,"".concat(o,"-inner"),(c={paddingInlineStart:s,paddingInlineEnd:P},a()(c,"".concat(E,"-checked"),{marginInlineStart:"calc(-100% + ".concat(M+g*2,"px - ").concat(s*2,"px)"),marginInlineEnd:"calc(100% - ".concat(M+g*2,"px + ").concat(s*2,"px)")}),a()(c,"".concat(E,"-unchecked"),{marginTop:-S,marginInlineStart:0,marginInlineEnd:0}),c)),a()(d,"".concat(o,"-handle"),{width:M,height:M}),a()(d,"".concat(o,"-loading-icon"),{top:(M-n.switchLoadingIconSize)/2,fontSize:n.switchLoadingIconSize}),a()(d,"&".concat(o,"-checked"),(l={},a()(l,"".concat(o,"-inner"),(e={paddingInlineStart:P,paddingInlineEnd:s},a()(e,"".concat(E,"-checked"),{marginInlineStart:0,marginInlineEnd:0}),a()(e,"".concat(E,"-unchecked"),{marginInlineStart:"calc(100% - ".concat(M+g*2,"px + ").concat(s*2,"px)"),marginInlineEnd:"calc(-100% + ".concat(M+g*2,"px - ").concat(s*2,"px)")}),e)),a()(l,"".concat(o,"-handle"),{insetInlineStart:"calc(100% - ".concat(M+g,"px)")}),l)),a()(d,"&:not(".concat(o,"-disabled):active"),(h={},a()(h,"&:not(".concat(o,"-checked) ").concat(E),a()({},"".concat(E,"-unchecked"),{marginInlineStart:n.marginXXS/2,marginInlineEnd:-n.marginXXS/2})),a()(h,"&".concat(o,"-checked ").concat(E),a()({},"".concat(E,"-checked"),{marginInlineStart:-n.marginXXS/2,marginInlineEnd:n.marginXXS/2})),h)),d)))},Q=function(n){var c,e=n.componentCls,l=n.handleSize;return a()({},e,(c={},a()(c,"".concat(e,"-loading-icon").concat(n.iconCls),{position:"relative",top:(l-n.fontSize)/2,color:n.switchLoadingIconColor,verticalAlign:"top"}),a()(c,"&".concat(e,"-checked ").concat(e,"-loading-icon"),{color:n.switchColor}),c))},G=function(n){var c,e,l=n.componentCls,h=n.motion,d=n.trackPadding,o=n.handleBg,S=n.handleShadow,g=n.handleSize,u="".concat(l,"-handle");return a()({},l,(e={},a()(e,u,{position:"absolute",top:d,insetInlineStart:d,width:g,height:g,transition:"all ".concat(n.switchDuration," ease-in-out"),"&::before":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,backgroundColor:o,borderRadius:g/2,boxShadow:S,transition:"all ".concat(n.switchDuration," ease-in-out"),content:'""'}}),a()(e,"&".concat(l,"-checked ").concat(u),{insetInlineStart:"calc(100% - ".concat(g+d,"px)")}),a()(e,"&:not(".concat(l,"-disabled):active"),h?(c={},a()(c,"".concat(u,"::before"),{insetInlineEnd:n.switchHandleActiveInset,insetInlineStart:0}),a()(c,"&".concat(l,"-checked ").concat(u,"::before"),{insetInlineEnd:0,insetInlineStart:n.switchHandleActiveInset}),c):{}),e))},J=function(n){var c,e,l,h,d=n.componentCls,o=n.trackHeight,S=n.trackPadding,g=n.innerMinMargin,u=n.innerMaxMargin,P=n.handleSize,s="".concat(d,"-inner");return a()({},d,(h={},a()(h,s,(c={display:"block",overflow:"hidden",borderRadius:100,height:"100%",paddingInlineStart:u,paddingInlineEnd:g,transition:"padding-inline-start ".concat(n.switchDuration," ease-in-out, padding-inline-end ").concat(n.switchDuration," ease-in-out")},a()(c,"".concat(s,"-checked, ").concat(s,"-unchecked"),{display:"block",color:n.colorTextLightSolid,fontSize:n.fontSizeSM,transition:"margin-inline-start ".concat(n.switchDuration," ease-in-out, margin-inline-end ").concat(n.switchDuration," ease-in-out"),pointerEvents:"none"}),a()(c,"".concat(s,"-checked"),{marginInlineStart:"calc(-100% + ".concat(P+S*2,"px - ").concat(u*2,"px)"),marginInlineEnd:"calc(100% - ".concat(P+S*2,"px + ").concat(u*2,"px)")}),a()(c,"".concat(s,"-unchecked"),{marginTop:-o,marginInlineStart:0,marginInlineEnd:0}),c)),a()(h,"&".concat(d,"-checked ").concat(s),(e={paddingInlineStart:g,paddingInlineEnd:u},a()(e,"".concat(s,"-checked"),{marginInlineStart:0,marginInlineEnd:0}),a()(e,"".concat(s,"-unchecked"),{marginInlineStart:"calc(100% - ".concat(P+S*2,"px + ").concat(u*2,"px)"),marginInlineEnd:"calc(-100% + ".concat(P+S*2,"px - ").concat(u*2,"px)")}),e)),a()(h,"&:not(".concat(d,"-disabled):active"),(l={},a()(l,"&:not(".concat(d,"-checked) ").concat(s),a()({},"".concat(s,"-unchecked"),{marginInlineStart:S*2,marginInlineEnd:-S*2})),a()(l,"&".concat(d,"-checked ").concat(s),a()({},"".concat(s,"-checked"),{marginInlineStart:-S*2,marginInlineEnd:S*2})),l)),h))},V=function(n){var c,e=n.componentCls,l=n.trackHeight,h=n.trackMinWidth;return a()({},e,v()(v()(v()({},(0,x.Wf)(n)),{},a()({position:"relative",display:"inline-block",boxSizing:"border-box",minWidth:h,height:l,lineHeight:"".concat(l,"px"),verticalAlign:"middle",background:n.colorTextQuaternary,border:"0",borderRadius:100,cursor:"pointer",transition:"all ".concat(n.motionDurationMid),userSelect:"none"},"&:hover:not(".concat(e,"-disabled)"),{background:n.colorTextTertiary}),(0,x.Qy)(n)),{},(c={},a()(c,"&".concat(e,"-checked"),a()({background:n.switchColor},"&:hover:not(".concat(e,"-disabled)"),{background:n.colorPrimaryHover})),a()(c,"&".concat(e,"-loading, &").concat(e,"-disabled"),{cursor:"not-allowed",opacity:n.switchDisabledOpacity,"*":{boxShadow:"none",cursor:"not-allowed"}}),a()(c,"&".concat(e,"-rtl"),{direction:"rtl"}),c)))},Y=(0,N.Z)("Switch",function(r){var n=(0,b.TS)(r,{switchDuration:r.motionDurationMid,switchColor:r.colorPrimary,switchDisabledOpacity:r.opacityLoading,switchLoadingIconSize:r.fontSizeIcon*.75,switchLoadingIconColor:"rgba(0, 0, 0, ".concat(r.opacityLoading,")"),switchHandleActiveInset:"-30%"});return[V(n),J(n),G(n),Q(n),F(n)]},function(r){var n=r.fontSize,c=r.lineHeight,e=r.controlHeight,l=r.colorWhite,h=n*c,d=e/2,o=2,S=h-o*2,g=d-o*2;return{trackHeight:h,trackHeightSM:d,trackMinWidth:S*2+o*4,trackMinWidthSM:g*2+o*2,trackPadding:o,handleBg:l,handleSize:S,handleSizeSM:g,handleShadow:"0 2px 4px 0 ".concat(new U.C("#00230b").setAlpha(.2).toRgbString()),innerMinMargin:S/2,innerMaxMargin:S+o+o*2,innerMinMarginSM:g/2,innerMaxMarginSM:g+o+o*2}}),p=t(785893),k=["prefixCls","size","disabled","loading","className","rootClassName","style"],j=f.forwardRef(function(r,n){var c,e=r.prefixCls,l=r.size,h=r.disabled,d=r.loading,o=r.className,S=r.rootClassName,g=r.style,u=W()(r,k);if(!1)var P;var s=f.useContext(Z.E_),M=s.getPrefixCls,E=s.direction,D=s.switch,q=f.useContext(H.Z),nn=(h!=null?h:q)||d,C=M("switch",e),an=(0,p.jsx)("div",{className:"".concat(C,"-handle"),children:d&&(0,p.jsx)(O(),{className:"".concat(C,"-loading-icon")})}),tn=Y(C),$=y()(tn,2),cn=$[0],en=$[1],on=(0,K.Z)(l),rn=L()(D==null?void 0:D.className,(c={},a()(c,"".concat(C,"-small"),on==="small"),a()(c,"".concat(C,"-loading"),d),a()(c,"".concat(C,"-rtl"),E==="rtl"),c),o,S,en),dn=v()(v()({},D==null?void 0:D.style),g);return cn((0,p.jsx)(A.Z,{component:"Switch",children:(0,p.jsx)(z.Z,v()(v()({},u),{},{prefixCls:C,className:rn,style:dn,disabled:nn,ref:n,loadingIcon:an}))}))});j.__ANT_SWITCH=!0;var _=j}}]);

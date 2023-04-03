"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[846],{7644:function(e,n,r){r.r(n),r.d(n,{default:function(){return y}});r(2791);var o=r(5705),t=r(1089),a=r(1614),i=r(4708),s=r(4554),l=r(3044),c=r(890),u=r(1889),d=r(1106),m=r(6151),h=r(533),p=r(403),v=r(7107),x=r(7012),f=r(5048),b=r(5822),Z=r(3329),g=(0,v.Z)();function y(){var e=(0,f.I0)(),n=t.Ry({name:t.Z_().required("Name is required"),email:t.Z_().matches(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,"Phone number is not valid").email("Enter a valid email").required("Email is required"),password:t.Z_().min(6,"Password should be of minimum 6 characters").max(20,"Password should be of maximum 20 characters").required("Password is required")}),r=(0,o.TA)({initialValues:{name:"",email:"",password:""},validationSchema:n,onSubmit:function(n,r){var o=r.resetForm;e((0,b.z2)(n)),o()}});return(0,Z.jsx)(x.Z,{theme:g,children:(0,Z.jsxs)(a.Z,{component:"main",maxWidth:"xs",children:[(0,Z.jsx)(i.ZP,{}),(0,Z.jsxs)(s.Z,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,Z.jsx)(l.Z,{sx:{m:1,bgcolor:"secondary.main"},children:(0,Z.jsx)(p.Z,{})}),(0,Z.jsx)(c.Z,{component:"h1",variant:"h5",children:"Register"}),(0,Z.jsxs)(s.Z,{component:"form",Validate:!0,onSubmit:r.handleSubmit,sx:{mt:3},children:[(0,Z.jsxs)(u.ZP,{container:!0,spacing:2,children:[(0,Z.jsx)(u.ZP,{item:!0,xs:12,children:(0,Z.jsx)(d.Z,{autoComplete:"given-name",name:"name",required:!0,fullWidth:!0,id:"name",label:"Name",autoFocus:!0,value:r.values.name,onChange:r.handleChange,error:r.touched.name&&Boolean(r.errors.name),helperText:r.touched.name&&r.errors.name})}),(0,Z.jsx)(u.ZP,{item:!0,xs:12,children:(0,Z.jsx)(d.Z,{required:!0,fullWidth:!0,id:"email",type:"email",label:"Email Address",name:"email",autoComplete:"email",value:r.values.email,onChange:r.handleChange,error:r.touched.email&&Boolean(r.errors.email),helperText:r.touched.email&&r.errors.email})}),(0,Z.jsx)(u.ZP,{item:!0,xs:12,children:(0,Z.jsx)(d.Z,{required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"new-password",value:r.values.password,onChange:r.handleChange,error:r.touched.password&&Boolean(r.errors.password),helperText:r.touched.password&&r.errors.password})})]}),(0,Z.jsx)(m.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Register"}),(0,Z.jsx)(u.ZP,{container:!0,justifyContent:"flex-end",children:(0,Z.jsx)(u.ZP,{item:!0,children:(0,Z.jsx)(h.Z,{href:"login",variant:"body2",children:"Already have an account? Log in"})})})]})]})]})})}},403:function(e,n,r){var o=r(5318);n.Z=void 0;var t=o(r(5649)),a=r(3329),i=(0,t.default)((0,a.jsx)("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"}),"LockOutlined");n.Z=i},4708:function(e,n,r){var o=r(7462),t=r(2791),a=r(1402),i=r(5502),s=r(3329),l=function(e,n){return(0,o.Z)({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},n&&{colorScheme:e.palette.mode})},c=function(e){return(0,o.Z)({color:(e.vars||e).palette.text.primary},e.typography.body1,{backgroundColor:(e.vars||e).palette.background.default,"@media print":{backgroundColor:(e.vars||e).palette.common.white}})};n.ZP=function(e){var n=(0,a.Z)({props:e,name:"MuiCssBaseline"}),r=n.children,u=n.enableColorScheme,d=void 0!==u&&u;return(0,s.jsxs)(t.Fragment,{children:[(0,s.jsx)(i.Z,{styles:function(e){return function(e){var n,r,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a={html:l(e,t),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:(0,o.Z)({margin:0},c(e),{"&::backdrop":{backgroundColor:(e.vars||e).palette.background.default}})},i=null==(n=e.components)||null==(r=n.MuiCssBaseline)?void 0:r.styleOverrides;return i&&(a=[a,i]),a}(e,d)}}),r]})}},533:function(e,n,r){r.d(n,{Z:function(){return P}});var o=r(2982),t=r(885),a=r(4942),i=r(3366),s=r(7462),l=r(2791),c=r(8182),u=r(4419),d=r(4036),m=r(6934),h=r(1402),p=r(3031),v=r(2071),x=r(890),f=r(1217);function b(e){return(0,f.Z)("MuiLink",e)}var Z=(0,r(5878).Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),g=r(8529),y=r(2065),w={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},j=function(e){var n=e.theme,r=e.ownerState,o=function(e){return w[e]||e}(r.color),t=(0,g.D)(n,"palette.".concat(o),!1)||r.color,a=(0,g.D)(n,"palette.".concat(o,"Channel"));return"vars"in n&&a?"rgba(".concat(a," / 0.4)"):(0,y.Fq)(t,.4)},C=r(3329),k=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],S=(0,m.ZP)(x.Z,{name:"MuiLink",slot:"Root",overridesResolver:function(e,n){var r=e.ownerState;return[n.root,n["underline".concat((0,d.Z)(r.underline))],"button"===r.component&&n.button]}})((function(e){var n=e.theme,r=e.ownerState;return(0,s.Z)({},"none"===r.underline&&{textDecoration:"none"},"hover"===r.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===r.underline&&(0,s.Z)({textDecoration:"underline"},"inherit"!==r.color&&{textDecorationColor:j({theme:n,ownerState:r})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===r.component&&(0,a.Z)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(Z.focusVisible),{outline:"auto"}))})),P=l.forwardRef((function(e,n){var r=(0,h.Z)({props:e,name:"MuiLink"}),a=r.className,m=r.color,x=void 0===m?"primary":m,f=r.component,Z=void 0===f?"a":f,g=r.onBlur,y=r.onFocus,j=r.TypographyClasses,P=r.underline,z=void 0===P?"always":P,V=r.variant,F=void 0===V?"inherit":V,W=r.sx,q=(0,i.Z)(r,k),A=(0,p.Z)(),B=A.isFocusVisibleRef,M=A.onBlur,D=A.onFocus,T=A.ref,R=l.useState(!1),_=(0,t.Z)(R,2),L=_[0],N=_[1],H=(0,v.Z)(n,T),O=(0,s.Z)({},r,{color:x,component:Z,focusVisible:L,underline:z,variant:F}),E=function(e){var n=e.classes,r=e.component,o=e.focusVisible,t=e.underline,a={root:["root","underline".concat((0,d.Z)(t)),"button"===r&&"button",o&&"focusVisible"]};return(0,u.Z)(a,b,n)}(O);return(0,C.jsx)(S,(0,s.Z)({color:x,className:(0,c.Z)(E.root,a),classes:j,component:Z,onBlur:function(e){M(e),!1===B.current&&N(!1),g&&g(e)},onFocus:function(e){D(e),!0===B.current&&N(!0),y&&y(e)},ref:H,ownerState:O,variant:F,sx:[].concat((0,o.Z)(Object.keys(w).includes(x)?[]:[{color:x}]),(0,o.Z)(Array.isArray(W)?W:[W]))},q))}))}}]);
//# sourceMappingURL=RegisterPage.14e07884.chunk.js.map
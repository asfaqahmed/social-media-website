(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{152:function(e,t,a){e.exports=a(204)},157:function(e,t,a){},158:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},159:function(e,t,a){},204:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(10),l=a.n(o),c=(a(157),a(17)),i=(a(158),a(159),a(20)),s=a(12),m=a(128),u=a.n(m),p=a(36),d=a(37),g=a(42),h=a(41),E=a(15),b=a.n(E),f=a(237),v=a(60),y=a(232),w=a(14),j=a(239),O=a(240),k=a(236),C=a(253),S=a(238),x=a(235),I=a(254),D=a(129),N=a(121),W=a.n(N),P=a(122),A=a.n(P),T=a(97),B=a.n(T),z=a(95),R=a.n(z),_=a(96),F=a.n(_),M=a(123),L=a.n(M),J=a(4),U=a(251),q=a(78),V=a.n(q),G=a(248),Y=a(82),$=a.n(Y),H=a(234),K=Object(y.a)((function(e){return{textfield:{width:"90%"},button:{margin:e.spacing(1)},card:{display:"block",width:"50vw",transitionDuration:"0.3s"},image:{minWidth:200},content:{padding:25,objectFit:"cover"}}})),Q=Object(J.a)((function(e){return{root:{padding:e.spacing(2)}}}))(H.a);var X=function(){var e=K(),t=r.a.useState(!1),a=Object(c.a)(t,2),o=a[0],l=a[1],i=Object(n.useState)(""),m=Object(c.a)(i,2),u=m[0],p=m[1],d=Object(n.useState)(!1),g=Object(c.a)(d,2),h=g[0],E=g[1],v=(Object(s.g)(),function(){l(!1)});return!0===h?r.a.createElement(s.a,{to:"/login"}):r.a.createElement("div",null,r.a.createElement(x.a,{color:"inherit",onClick:function(){l(!0)}},"New Post"),r.a.createElement(U.a,{maxWidth:"80%",fullWidth:!0,onClose:v,scroll:"paper",open:o},r.a.createElement(Q,{dividers:!0},r.a.createElement(k.a,{"aria-label":"close",className:e.closeButton,onClick:v},r.a.createElement(V.a,null)),r.a.createElement(f.a,{item:!0,sm:12},r.a.createElement("form",{noValidate:!0,autoComplete:!1,onSubmit:function(e){e.preventDefault();var t=localStorage.getItem("token");if(!t)return alert("Please login to create a new post"),void E(!0);var a={headers:{Authorization:"JWT ".concat(t)}};b.a.post("createPost/",{content:u},a=a).then((function(e){return window.location.reload()})).catch((function(e){return alert(e)})),v()}},r.a.createElement(G.a,{id:"content",label:"Content",variant:"outlined",value:u,onChange:function(e){p(e.target.value)},fullWidth:!0,className:e.textfield,multiline:!0,rows:5}),r.a.createElement(x.a,{type:"submit",variant:"contained",color:"primary",className:e.button,endIcon:r.a.createElement($.a,null),size:"large"},"Send"))))))},Z=Object(y.a)((function(e){return{grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(v.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(v.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(w.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(w.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(v.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"}),sectionDesktop:Object(v.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(v.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}}));var ee=function(){var e=Z(),t=r.a.useState(null),a=Object(c.a)(t,2),n=a[0],o=a[1],l=r.a.useState(null),m=Object(c.a)(l,2),u=m[0],p=m[1],d=Boolean(n),g=Boolean(u),h=Object(s.g)(),E=localStorage.getItem("token"),b=function(e){o(e.currentTarget)},f=function(){p(null)},v=function(){o(null),f()},y="primary-search-account-menu",w=r.a.createElement(D.a,{anchorEl:n,anchorOrigin:{vertical:"top",horizontal:"right"},id:y,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:d,onClose:v},r.a.createElement(I.a,{onClick:v},"Profile"),r.a.createElement(I.a,{onClick:v},"My account")),N=r.a.createElement(D.a,{anchorEl:u,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu-mobile",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:g,onClose:f},r.a.createElement(I.a,null,r.a.createElement(k.a,{color:"inherit"},r.a.createElement(S.a,{color:"secondary"},r.a.createElement(R.a,null))),r.a.createElement("p",null,"Messages")),r.a.createElement(I.a,null,r.a.createElement(k.a,{color:"inherit"},r.a.createElement(S.a,{color:"secondary"},r.a.createElement(F.a,null))),r.a.createElement("p",null,"Notifications")),r.a.createElement(I.a,{onClick:b},r.a.createElement(k.a,{"aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit"},r.a.createElement(B.a,null)),r.a.createElement("p",null,"Profile")));return r.a.createElement("div",{className:e.grow},r.a.createElement(j.a,{position:"fixed"},r.a.createElement(O.a,null,r.a.createElement(k.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"open drawer"},r.a.createElement(W.a,null)),r.a.createElement(X,null,"New Post"),r.a.createElement("div",{className:e.search},r.a.createElement("div",{className:e.searchIcon},r.a.createElement(A.a,null)),r.a.createElement(C.a,{placeholder:"Search\u2026",classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"}})),r.a.createElement("div",{className:e.grow}),r.a.createElement("div",{className:e.sectionDesktop},r.a.createElement(k.a,{color:"inherit"},r.a.createElement(S.a,{color:"secondary"},r.a.createElement(R.a,null))),r.a.createElement(k.a,{color:"inherit"},r.a.createElement(S.a,{color:"secondary"},r.a.createElement(F.a,null))),r.a.createElement(k.a,{edge:"end","aria-label":"account of current user","aria-controls":y,"aria-haspopup":"true",onClick:b,color:"inherit"},r.a.createElement(B.a,null))),r.a.createElement("div",{className:e.sectionMobile},r.a.createElement(k.a,{"aria-label":"show more","aria-controls":"primary-search-account-menu-mobile","aria-haspopup":"true",onClick:function(e){p(e.currentTarget)},color:"inherit"},r.a.createElement(L.a,null))),null==E?r.a.createElement(x.a,{color:"inherit",component:i.b,to:"/login"},"Login"):r.a.createElement(x.a,{color:"inherit",onClick:function(){localStorage.removeItem("token"),localStorage.removeItem("userID"),h.push("/social-media-website")}},"Logout"))),N,w)},te=a(130),ae=a(135),ne=a(241),re=a(243),oe=a(242),le=a(99),ce=a(98),ie=a.n(ce),se=a(126),me=a.n(se),ue=Object(y.a)((function(e){return{commentImage:{maxWidth:"100%",width:30,height:30,objectFit:"cover",borderRadius:"50%"},commentData:{width:"85vw",padding:25,margin:10}}}));var pe=function(e){var t=e.commentData,a=ue();return r.a.createElement(f.a,{Container:!0},t.map((function(e){return r.a.createElement(n.Fragment,{key:e.timestamp},r.a.createElement(f.a,{sm:12},r.a.createElement(f.a,{Container:!0},r.a.createElement(f.a,{item:!0,sm:9},r.a.createElement(ne.a,{className:a.commentData},r.a.createElement("div",{style:{display:"flex",alignItems:"baseline"}},r.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/7/7c/User_font_awesome.svg",alt:"comment",className:a.commentImage}),"\xa0 \xa0",r.a.createElement(le.a,{variant:"body1",component:i.b,to:"/users/".concat(e.owner),color:"primary"},e.owner),"\xa0",r.a.createElement(le.a,{variant:"caption",color:"textSecondary"},e.timestamp.substr(0,10),"\xa0",e.timestamp.substr(11,5))),r.a.createElement(le.a,{variabnt:"body1"},e.content))))))})))},de=Object(y.a)((function(e){return{textfield:{width:"90%"},button:{margin:e.spacing(1)}}}));var ge=function(e){var t=e.postID,a=de(),o=Object(n.useState)(""),l=Object(c.a)(o,2),i=l[0],m=l[1],u=Object(n.useState)(!1),p=Object(c.a)(u,2),d=p[0],g=p[1];return!0===d?r.a.createElement(s.a,{to:"/login"}):r.a.createElement(f.a,{item:!0,sm:12},r.a.createElement("form",{noValidate:!0,autoComplete:!1,onSubmit:function(e){e.preventDefault();var a=localStorage.getItem("token");if(""!==i){var n={headers:{Authorization:"JWT ".concat(a)}};b.a.post("createComment/",{post_id:Number(t),content:i},n=n).then((function(e){return console.log(e)})).catch((function(e){alert("Please login first"),g(!0)}))}else alert("Comment cannot be empty")}},r.a.createElement(G.a,{id:"comment",label:"Comment",variant:"outlined",value:i,onChange:function(e){m(e.target.value)},fullWidth:!0,className:a.textfield}),r.a.createElement(x.a,{type:"submit",variant:"contained",color:"primary",className:a.button,endIcon:r.a.createElement($.a,null),size:"large"},"Send")))},he=a(125),Ee=a.n(he),be=a(124),fe=a.n(be);var ve=function(e){var t=e.postID,a=Object(n.useState)(!1),o=Object(c.a)(a,2),l=o[0],i=o[1];return r.a.createElement(x.a,{onClick:function(){try{var e=localStorage.getItem("token"),a={headers:{Authorization:"JWT ".concat(e)}};b.a.post("like/",{post_id:t},a=a).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})),i(!l)}catch(n){alert(n)}}},l?r.a.createElement(Ee.a,{color:"primary"}):r.a.createElement(fe.a,{color:"primary"}))},ye={card:{display:"block",width:"50vw",transitionDuration:"0.3s"},image:{minWidth:200},content:{padding:25,objectFit:"cover"}},we=Object(J.a)((function(e){return{root:{margin:0,padding:e.spacing(2)},deleteButton:{position:"absolute",right:e.spacing(1),top:e.spacing(7)},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]},image:{width:"4vw",height:"4vw",objectFit:"cover",borderRadius:"50%"}}}))((function(e){var t=e.postID,a=e.username,n=e.timestamp,o=e.classes,l=e.onClose,c=Object(te.a)(e,["postID","username","timestamp","classes","onClose"]);Object(s.g)();return r.a.createElement(oe.a,Object.assign({disableTypography:!0,className:o.root},c),r.a.createElement("div",null,r.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/7/7c/User_font_awesome.svg",alt:"comment",className:o.image}),"\xa0 \xa0",r.a.createElement(le.a,{variant:"h6",component:i.b,to:"/users/".concat(a)},a),"\xa0",r.a.createElement(le.a,{variant:"caption",color:"textSecondary"},n.substr(0,10)," ",n.substr(11,5)),r.a.createElement(x.a,{className:o.deleteButton,onClick:function(){var e=localStorage.getItem("token"),a={headers:{Authorization:"JWT ".concat(e)}};b.a.delete("deletePost/".concat(t),a).then((function(e){return console.log(e)})).then((function(e){return window.location.reload()})).catch((function(e){return alert("You are not allowed to delete this post")}))}},r.a.createElement(me.a,{color:"primary"}))),l?r.a.createElement(k.a,{"aria-label":"close",className:o.closeButton,onClick:l},r.a.createElement(V.a,null)):null)})),je=Object(J.a)((function(e){return{root:{padding:e.spacing(2)}}}))(H.a);var Oe=function(e){var t=e.postData,a=r.a.useState(!1),n=Object(c.a)(a,2),o=n[0],l=n[1],s=r.a.useState([]),m=Object(c.a)(s,2),u=m[0],p=m[1],d=function(){b.a.get("getComments",{params:{post_id:t.id}}).then((function(e){return p(e.data)})),l(!0)},g=function(){l(!1)};return r.a.createElement("div",null,r.a.createElement(ne.a,{style:ye.card},r.a.createElement(re.a,{style:ye.content},r.a.createElement("div",null,r.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/7/7c/User_font_awesome.svg",alt:"comment",style:{maxWidth:"100%",width:30,height:30,objectFit:"cover",borderRadius:"50%"}}),"\xa0 \xa0",r.a.createElement(le.a,{variant:"body2",component:i.b,to:"/users/".concat(t.owner)},t.owner),"\xa0",r.a.createElement(le.a,{variant:"caption",color:"textSecondary"},t.timestamp.substr(0,10)," ",t.timestamp.substr(11,5)))),r.a.createElement(ae.a,{onClick:d},r.a.createElement(re.a,{style:ye.content},r.a.createElement(le.a,{variant:"body2",color:"textSecondary",component:"p"},t.content))),r.a.createElement(re.a,{style:ye.content},r.a.createElement(ve,{postID:t.id}),r.a.createElement("span",null,t.numOfLikes),r.a.createElement(x.a,{onClick:d},r.a.createElement(ie.a,{color:"primary"})),r.a.createElement("span",null,t.numOfComments))),r.a.createElement(U.a,{maxWidth:"80%",fullWidth:!0,onClose:g,scroll:"paper",open:o},r.a.createElement(we,{postID:t.id,username:t.owner,timestamp:t.timestamp,onClose:g}),r.a.createElement(je,{dividers:!0},r.a.createElement(le.a,{variant:t.content.length<200?"h4":"body1",color:"textPrimary",component:"p"},t.content),r.a.createElement(ve,{postID:t.id}),r.a.createElement("span",null,t.numOfLikes),r.a.createElement(x.a,{disabled:!0},r.a.createElement(ie.a,{color:"primary"})),r.a.createElement("span",null,t.numOfComments)),r.a.createElement(je,{dividers:!0},r.a.createElement(le.a,{variant:"subtitle1",color:"textSecondary",component:"p"},"Comments:"),r.a.createElement(pe,{commentData:u})),r.a.createElement(je,{dividers:!0},r.a.createElement(ge,{postID:t.id}))))},ke=function(e){Object(g.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).getAllPostsData=function(){b.a.get("allPosts").then((function(e){return n.setState({posts:e.data})})).catch((function(e){return console.log(e)})),console.log(n.state.posts)},n.state={posts:[]},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.getAllPostsData()}},{key:"render",value:function(){return this.state.posts.map((function(e){return r.a.createElement(f.a,{item:!0,xs:12},r.a.createElement(Oe,{postData:e}))}))}}]),a}(n.Component);var Ce=function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(ee,null)),r.a.createElement(f.a,{container:!0,direction:"column",justify:"center",alignItems:"center",spacing:3,style:{marginTop:"5%"}},r.a.createElement(ke,null)))},Se=function(e){Object(g.a)(a,e);var t=Object(h.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement(Ce,null)}}]),a}(n.Component),xe=a(252),Ie=a(245),De=a(246),Ne=a(249),We=a(247),Pe=a(83),Ae=a.n(Pe),Te=a(127),Be=a.n(Te),ze=a(244),Re=function(e){Object(g.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleSubmit=function(t){t.preventDefault();var a=t.target[0].value,n=t.target[2].value;a&&n?(b.a.post("login/",{email:a,password:n}).then((function(t){console.log(t),e.props.setAuth(t.data.token,t.data.id)})).catch((function(e){return alert(e)})),e.props.history.push("/social-media-website")):alert("Please enter email and password to sign in!")},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(ze.a,{component:"main",maxWidth:"xs"},r.a.createElement(Ie.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement(xe.a,{className:e.avatar},r.a.createElement(Ae.a,null)),r.a.createElement(le.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement("form",{className:e.form,noValidate:!0,onSubmit:this.handleSubmit},r.a.createElement(G.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0}),r.a.createElement(G.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),r.a.createElement(De.a,{control:r.a.createElement(Ne.a,{value:"remember",color:"primary"}),label:"Remember me"}),r.a.createElement(x.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit},"Sign In"),r.a.createElement(f.a,{container:!0},r.a.createElement(f.a,{item:!0,xs:!0},r.a.createElement(We.a,{href:"#",variant:"body2"},"Forgot password?")),r.a.createElement(f.a,{item:!0},r.a.createElement(We.a,{href:"/register",variant:"body2"},"Don't have an account? Sign Up"))))))}}]),a}(n.Component),_e=Be()((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}))(Re),Fe=function(e){Object(g.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleSubmit=function(t){t.preventDefault();var a=t.target[0].value,n=t.target[2].value,r=t.target[4].value;a&&n&&r?(b.a.post("register/",{email:n,username:a,password:r}).then((function(t){b.a.post("login/",{email:n,password:r}).then((function(t){return e.props.setAuth(t.data.token,t.data.id)})).catch((function(e){return alert(e)}))})).catch((function(e){return alert(e)})),e.props.history.push("/")):alert("Please enter username, email and password to sign up!")},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(ze.a,{component:"main",maxWidth:"xs"},r.a.createElement(Ie.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement(xe.a,{className:e.avatar},r.a.createElement(Ae.a,null)),r.a.createElement(le.a,{component:"h1",variant:"h5"},"Sign up"),r.a.createElement("form",{className:e.form,noValidate:!0,onSubmit:this.handleSubmit},r.a.createElement(f.a,{container:!0,spacing:2},r.a.createElement(f.a,{item:!0,xs:12},r.a.createElement(G.a,{variant:"outlined",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",autoComplete:"username"})),r.a.createElement(f.a,{item:!0,xs:12},r.a.createElement(G.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email"})),r.a.createElement(f.a,{item:!0,xs:12},r.a.createElement(G.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}))),r.a.createElement(x.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit},"Sign Up"),r.a.createElement(f.a,{container:!0,justify:"flex-end"},r.a.createElement(f.a,{item:!0},r.a.createElement(We.a,{href:"/login",variant:"body2"},"Already have an account? Sign in"))))))}}]),a}(n.Component),Me=Object(J.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}))(Fe);var Le=function(){var e=r.a.useState(localStorage.getItem("token")),t=Object(c.a)(e,2),a=(t[0],t[1]);function n(e,t){localStorage.setItem("token",e),localStorage.setItem("userID",t),a(e)}return r.a.createElement(u.a,null,r.a.createElement(i.a,null,r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/social-media-website",component:Se})),r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/login",render:function(e){return r.a.createElement(_e,Object.assign({},e,{setAuth:n}))}})),r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/register",render:function(e){return r.a.createElement(Me,Object.assign({},e,{setAuth:n}))}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Le,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[152,1,2]]]);
//# sourceMappingURL=main.ae952fbc.chunk.js.map
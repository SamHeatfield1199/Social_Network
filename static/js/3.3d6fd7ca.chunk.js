(this.webpackJsonpsoc=this.webpackJsonpsoc||[]).push([[3],{292:function(t,e,s){t.exports={postBlock:"MyPosts_postBlock__2EYq7",posts:"MyPosts_posts__20usH"}},293:function(t,e,s){t.exports={content:"Post_content__2gRzU"}},294:function(t,e,s){t.exports={descriptionBlock:"ProfileInfo_descriptionBlock__t0MAG"}},296:function(t,e,s){"use strict";s.r(e);var n=s(5),r=s(1),o=s(28),i=s(29),a=s(31),c=s(30),u=s(0),l=s.n(u),p=s(12),j=s(10),d=s(9),b=s(95),f=s(87),h=s(129),O=s(84),x=s(37),m=s(292),v=s.n(m),y=s(293),P=s.n(y),S=function(t){return Object(r.jsxs)("div",{className:P.a.item,children:[t.message,Object(r.jsxs)("div",{children:[Object(r.jsx)("span",{children:"likes"}),t.likesCount]})]})},g=Object(O.a)(10),U=Object(h.a)({form:"profileAddNewPostForm"})((function(t){return Object(r.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(r.jsx)("div",{children:Object(r.jsx)(f.a,{component:x.c,name:"newPostText",placeholder:"Enter your post",validate:[O.b,g]})}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{children:"Add Post"})})]})})),k=function(t){var e=t.postData.map((function(t){return Object(r.jsx)(S,{message:t.message,likesCount:t.likesCount})}));return Object(r.jsxs)("div",{className:v.a.postBlock,children:[Object(r.jsx)("h3",{children:"My posts"}),Object(r.jsx)(U,{onSubmit:function(e){t.addPost(e.newPostText)}}),Object(r.jsx)("div",{className:v.a.postData,children:e})]})},_=Object(p.b)((function(t){return{postData:t.profilePage.postData,newPostText:t.profilePage.newPostText}}),(function(t){return{addPost:function(e){t(Object(b.a)(e))}}}))(k),w=s(68),A=s(294),B=s.n(A);l.a.Component;var C=s(106);function D(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var s=[],n=!0,r=!1,o=void 0;try{for(var i,a=t[Symbol.iterator]();!(n=(i=a.next()).done)&&(s.push(i.value),!e||s.length!==e);n=!0);}catch(c){r=!0,o=c}finally{try{n||null==a.return||a.return()}finally{if(r)throw o}}return s}}(t,e)||Object(C.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var T=function(t){var e=D(Object(u.useState)(!1),2),s=e[0],n=e[1],o=D(Object(u.useState)(t.status),2),i=o[0],a=o[1];Object(u.useEffect)((function(){a(t.status)}),[]);return Object(r.jsxs)("div",{children:[!s&&Object(r.jsx)("div",{children:Object(r.jsx)("span",{onDoubleClick:function(){n(!0)},children:t.status||"-----"})}),s&&Object(r.jsx)("div",{children:Object(r.jsx)("input",{onChange:function(t){a(t.currentTarget.value)},autoFocus:!0,onBlur:function(){n(!1),t.updateUserStatus(i)},value:i})})]})},M=function(t){return t.profile?Object(r.jsx)("div",{children:Object(r.jsxs)("div",{className:B.a.descriptionBlock,children:[Object(r.jsx)("img",{src:t.profile.photos.large}),Object(r.jsx)(T,{status:t.status,updateUserStatus:t.updateUserStatus})]})}):Object(r.jsx)("div",{children:Object(r.jsx)("img",{src:w.a})})},N=function(t){return Object(r.jsxs)("div",{children:[Object(r.jsx)(M,{profile:t.profile,status:t.status,updateUserStatus:t.updateUserStatus}),Object(r.jsx)(_,{})]})},E=function(t){Object(a.a)(s,t);var e=Object(c.a)(s);function s(){return Object(o.a)(this,s),e.apply(this,arguments)}return Object(i.a)(s,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userid;t||(t=this.props.authedUserid),this.props.getUserProfile(t),this.props.getUserStatus(t)}},{key:"render",value:function(){return Object(r.jsx)(N,Object(n.a)(Object(n.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateUserStatus:this.props.updateUserStatus}))}}]),s}(l.a.Component);e.default=Object(d.d)(Object(p.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authedUserid:t.auth.userid,isAuth:t.auth.isAuth}}),{setUserProfile:b.d,getUserProfile:b.c,getUserStatus:b.e,updateUserStatus:b.f}),j.f)(E)}}]);
//# sourceMappingURL=3.3d6fd7ca.chunk.js.map
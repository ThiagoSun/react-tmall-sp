(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{102:function(e,t,n){},159:function(e,t,n){},164:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"handleContentType",function(){return j});var r={};n.r(r),n.d(r,"globalStore",function(){return J}),n.d(r,"topNavBar",function(){return P});var o=n(0),c=n.n(o),i=n(15),u=n.n(i),s=(n(102),n(28)),l=n(87),p=n(88),d=n(89),f=n(44),m=n(11),h=n(39),v=n(10),y=n.n(v),b=n(27),g=(n(72),n(29)),O=n.n(g);n(151);function j(e,t){if("[object FormData]"===Object.prototype.toString.call(t.options.body))t.options.method="POST",t.options.headers=Object.assign({},t.options.headers,{enctype:"multipart/form-data"});else switch(t.filter){case T:t.options.method="GET",t.options.headers={"Content-Type":"application/x-www-form-urlencoded"},t.url=t.url+".json",t.options.body&&(t.options.body="Body=".concat(encodeURIComponent(A(t.options.body))));break;default:t.options.headers={"Content-Type":"application/x-www-form-urlencoded"},t.options.body&&(t.options.body="Body=".concat(encodeURIComponent(A(t.options.body))))}return e(t)}var E,w="production",T={development:"http://172.90.13.175:3000/",production:"http://172.90.13.175:5000/"}[w],C=[],N=[-700],_=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e,t,n,r){var o={filter:t,url:n,options:r},c=[];return Object.keys(a).forEach(function(e){var t=a[e];"function"===typeof t&&c.push(t)}),function t(n){return function(a){var r=c[n];return r?r(t(n+1),a):e(a)}}(0)(o)}.apply(void 0,[x,T].concat(t))};function x(e){var t=e.filter,n=e.url,a=e.options,r="";if("GET"!==a.method){if(r=a.method+n.split("?")[0],-1!==C.indexOf(r))return;C.push(r)}return E="","GET"===a.method&&a.body&&(n+="?".concat(a.body),delete a.body),fetch(t+n,a).then(function(e){if("GET"!==a.method){var t=C.indexOf(r);-1!==t&&C.splice(t,1)}return e}).then(B).then(I).then(S)}var k=function(e){return function(e){return function(t){E?-700===E.code?(e({type:"TOKEN_INVALID"}),O.a.fail("Token\u5931\u6548",3,function(){},!0)):(e({type:"ERROR",error:E}),O.a.fail(JSON.stringfy(E),3,function(){},!0)):(e({type:"GLOBAL_LOADING",response:"2"}),O.a.hide()),e(t)}}};function S(e){return 0!==e.Code?R(e.Code,e):e}function B(e){return e.status>=200&&e.status<300?e:e.json().then(function(t){return R(e.status,t)})}function I(e){var t=e.headers.get("content-type");return"text/csv"===t||-1!==t.indexOf("application/octet-stream")?(e.blob().then(function(t){var n=document.createElement("a"),a=window.URL.createObjectURL(t),r=e.headers.get("content-disposition").replace(/attachment;\s*filename=/,"");n.href=a,n.download=decodeURIComponent(r),n.click(),window.URL.revokeObjectURL(a)}),{Code:0}):e.json()}function R(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=new Error;throw n.code=e,n.response=t,-1!==N.indexOf(e)&&(E=n),n}function A(e){var t=Object.prototype.toString.call(e);return"[object Null]"!==t&&"[object Undefined]"!==t&&"[object FormData]"!==t||(e=""),"[object Object]"!==t&&"[object Array]"!==t||(e=JSON.stringify(e)),e}var G=function(){var e=Object(b.a)(y.a.mark(function e(t,n){return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n({type:"GLOBAL_LOADING",response:"1"});case 3:return O.a.loading("\u52a0\u8f7d\u4e2d...",0,function(){},!0),e.next=7,t.call();case 7:return e.abrupt("return",e.sent);case 10:return e.prev=10,e.t0=e.catch(0),e.next=14,n({type:"ERROR",error:e.t0});case 14:O.a.fail(JSON.stringify(e.t0),3,function(){},!0);case 16:case"end":return e.stop()}},e,null,[[0,10]])}));return function(t,n){return e.apply(this,arguments)}}(),L=function(){var e=Object(b.a)(y.a.mark(function e(t){var n;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.payload,e.next=3,_("api/global/version",{method:"GET",body:n});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),D=Object(h.a)({},"GLOBAL_INIT_SUCCESS",function(e,t){return Object.assign({},e,{appInfo:t.appInfo})}),U={appName:"tmall",appInfo:""};function J(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0,n=D[t.type];return n?n(e,t):e}var F=function(){var e=Object(b.a)(y.a.mark(function e(){return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_("api/global/category",{method:"GET"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),X=Object(h.a)({},"GET_CATEGORY_DATA_SUCCESS",function(e,t){return Object.assign({},e,{category:t.category})}),W={category:[]};function P(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0,n=X[t.type];return n?n(e,t):e}var Y=Object(m.a)(),q=function(e){return Object(s.c)(Object(d.a)({router:Object(f.b)(Y)},r,e))},z=q,H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=[p.a,Object(l.a)(Y),k],n=s.d,a=Object(s.e)(z(),e,n.apply(void 0,[s.a.apply(void 0,t)].concat([])));return a.asyncReducers={},a};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var M=n(22),Q=n(23),K=n(25),V=n(24),Z=n(26),$=n(52),ee=n(14),te=n(19),ne=c.a.Fragment,ae=function(e){function t(e){var n;return Object(M.a)(this,t),(n=Object(K.a)(this,Object(V.a)(t).call(this,e))).state={hasError:!1},n}return Object(Z.a)(t,e),Object(Q.a)(t,[{key:"componentDidMount",value:function(){this.props.getGlobalInitInfo()}},{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0}),O.a.info('\u51fa\u9519\u4e86\uff01\uff08\u6765\u81ea"\u9519\u8bef\u8fb9\u754c"\u7684\u63d0\u793a\uff09')}},{key:"render",value:function(){return c.a.createElement(ne,null,this.props.children)}}]),t}(c.a.Component),re={getGlobalInitInfo:function(e){return function(e){G(Object(b.a)(y.a.mark(function t(){var n;return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e({type:"GLOBAL_INIT"});case 2:return t.next=4,L({payload:{date:(new Date).getTime()}});case 4:return n=t.sent,t.next=7,e({type:"GLOBAL_INIT_SUCCESS",appInfo:n.Result});case 7:case"end":return t.stop()}},t)})),e)}}},oe=Object(te.c)(function(e){return{globalStore:e.globalStore}},re)(ae),ce=function(e){var t=e.children;return c.a.createElement(oe,null,t)},ie=function(e){function t(){return Object(M.a)(this,t),Object(K.a)(this,Object(V.a)(t).apply(this,arguments))}return Object(Z.a)(t,e),Object(Q.a)(t,[{key:"shouldComponentUpdate",value:function(){return!1}},{key:"render",value:function(){var e=this;return c.a.createElement(te.a,{store:this.props.store},c.a.createElement(f.a,{history:this.props.history},c.a.createElement(ce,null,c.a.createElement($.a,null,c.a.createElement(o.Suspense,{fallback:c.a.createElement("div",null,"Loading...")},c.a.createElement(ee.c,null,this.props.routes.map(function(t,n){return c.a.createElement(ee.a,{render:function(n){return c.a.createElement(t.component,Object.assign({store:e.props.store},n))},exact:!!t.exact,key:t.path+n,path:t.path})})))))))}}]),t}(c.a.Component),ue=(n(159),n(160),n(94)),se=n.n(ue),le=(n(162),n(95)),pe=n.n(le),de=(n(73),n(67)),fe=n.n(de),me=n(33);var he,ve,ye,be=n(17),ge=n.n(be),Oe=c.a.Fragment,je=(ye=ve=function(e){function t(e){var n;return Object(M.a)(this,t),(n=Object(K.a)(this,Object(V.a)(t).call(this,e))).onOpenChange=function(){n.setState({drawerOpen:!n.state.drawerOpen}),Object.prototype.toString.call("[object Function]"===n.props.onToggleCallback)&&n.props.onToggleCallback()},n.renderSideBar=function(){return c.a.createElement(Oe,null,c.a.createElement("div",{className:ge.a["category-title"]},c.a.createElement("h3",null,"\u5168\u90e8\u5206\u7c7b")),c.a.createElement("div",{className:ge.a["category-container"]},c.a.createElement("ul",{className:ge.a["left-ul"]},n.props.topNavBar.category.map(function(e,t){return c.a.createElement("li",{className:n.state.firstClassIndex===t?ge.a["item-active"]:ge.a["item-closed"],key:"first-class-".concat(e.id),onClick:n.handleFirstClassClick(t)},e.name)})),c.a.createElement("div",{className:ge.a["right-div"]})))},n.handleFirstClassClick=function(e){return function(){n.setState({firstClassIndex:e})}},n.state={drawerOpen:!1,firstClassIndex:0},n}return Object(Z.a)(t,e),Object(Q.a)(t,[{key:"componentDidMount",value:function(){this.props.getCategoryData()}},{key:"render",value:function(){return c.a.createElement(Oe,null,c.a.createElement(pe.a,{icon:c.a.createElement(fe.a,{type:"ellipsis"}),onLeftClick:this.onOpenChange,className:ge.a["top-navbar"]},c.a.createElement("img",{src:"//gw.alicdn.com/tfs/TB1wQw8qamWBuNjy1XaXXXCbXXa-237-41.png_240x10000.jpg_.webp",alt:"\u5929\u732bTmall",className:ge.a["tmall-img"]})),c.a.createElement("div",{className:ge.a["drawer-container"]},c.a.createElement(se.a,{className:ge.a["my-drawer"],style:{minHeight:document.documentElement.clientHeight},sidebar:this.renderSideBar(),open:this.state.drawerOpen,onOpenChange:this.onOpenChange},this.props.children)))}}]),t}(c.a.Component),ve.defaultProps={},void((he=ye).prototype.shouldComponentUpdate=function(e,t){return!me.a.is(me.a.fromJS(e),me.a.fromJS(this.props))||!me.a.is(me.a.fromJS(t),me.a.fromJS(this.state))})||he),Ee={getCategoryData:function(){return function(e){G(Object(b.a)(y.a.mark(function t(){var n;return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e({type:"GET_CATEGORY_DATA"});case 2:return t.next=4,F();case 4:return n=t.sent,t.next=7,e({type:"GET_CATEGORY_DATA_SUCCESS",category:n.Result.category});case 7:case"end":return t.stop()}},t)})),e)}}},we=Object(te.c)(function(e){return{topNavBar:e.topNavBar}},Ee)(je),Te=n(96),Ce=n.n(Te),Ne=function(e){function t(e){var n;return Object(M.a)(this,t),(n=Object(K.a)(this,Object(V.a)(t).call(this,e))).handleTopNavBarToggle=function(){n.setState(function(e,t){return{topNavBarOpen:!e.topNavBarOpen}})},n.state={topNavBarOpen:!1},n}return Object(Z.a)(t,e),Object(Q.a)(t,[{key:"render",value:function(){return[c.a.createElement(we,{key:"TopNavBar",onToggleCallback:this.handleTopNavBarToggle},c.a.createElement($.b,{to:"/counter",key:"counter",style:{fontSize:"22px"}},"counter"),c.a.createElement("div",{style:{height:"10000px"},key:"test"},"index1"),c.a.createElement("img",{src:Ce.a,alt:"",key:"img"}))]}}]),t}(c.a.PureComponent),_e=function(e){var t=e.store,a=Object(o.lazy)(function(){return n.e(0).then(n.bind(null,169))});return n.e(0).then(n.bind(null,167)).then(function(e){var n=e.default;!function(e,t){var n=t.key,a=t.reducer;Object.hasOwnProperty.call(e.asyncReducers,n)||(e.asyncReducers[n]=a,e.replaceReducer(q(e.asyncReducers)))}(t,{key:"counter",reducer:n})}),c.a.createElement(a,null)},xe=function(e){return[{path:"/",exact:!0,component:Ne},{path:"/counter",exact:!0,component:_e}]},ke=H(window.__INITIAL_STATE__),Se=xe(ke),Be=document.getElementById("root");u.a.render(c.a.createElement(ie,{store:ke,routes:Se,history:Y}),Be),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},17:function(e,t,n){e.exports={"drawer-container":"TopNavBar__drawer-container--3Af1i","my-drawer":"TopNavBar__my-drawer--tBIJo","top-navbar":"TopNavBar__top-navbar--vg6I7","tmall-img":"TopNavBar__tmall-img--1jqWW","category-title":"TopNavBar__category-title--U86Q4","category-container":"TopNavBar__category-container--1trdZ","left-ul":"TopNavBar__left-ul--2vDns","item-active":"TopNavBar__item-active--3xXxD","item-closed":"TopNavBar__item-closed--2xO4S","right-div":"TopNavBar__right-div--3Thwy"}},96:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},97:function(e,t,n){e.exports=n(164)}},[[97,2,3]]]);
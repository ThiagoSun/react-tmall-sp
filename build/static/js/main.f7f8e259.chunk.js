(window.webpackJsonp=window.webpackJsonp||[]).push([["main"],{0:function(e,t,n){e.exports=n("tjUo")},LM4t:function(e,t,n){},jhpt:function(e,t,n){e.exports=n.p+"static/media/logo.ee7cd8ed.svg"},rG8K:function(e,t,n){e.exports={"drawer-container":"TopNavBar__drawer-container--2mo2U","my-drawer":"TopNavBar__my-drawer---tH_u","top-navbar":"TopNavBar__top-navbar--3Nnpa","tmall-img":"TopNavBar__tmall-img--2XiVA","category-title":"TopNavBar__category-title--36Fns","category-container":"TopNavBar__category-container--24RVv","left-ul":"TopNavBar__left-ul--Gotyp","item-active":"TopNavBar__item-active--1CMvs","item-closed":"TopNavBar__item-closed--2e0yU","right-div":"TopNavBar__right-div--3OolF"}},snnE:function(e,t,n){"use strict";var r={};n.r(r),n.d(r,"handleContentType",function(){return s});var a=n("jQsN"),o=n.n(a),c=n("butC"),i=(n("74aM"),n("Kl5d")),u=n.n(i);n("bZMm");function s(e,t){if("[object FormData]"===Object.prototype.toString.call(t.options.body))t.options.method="POST",t.options.headers=Object.assign({},t.options.headers,{enctype:"multipart/form-data"});else switch(t.filter){case f:t.options.method="GET",t.options.headers={"Content-Type":"application/x-www-form-urlencoded"},t.url=t.url+".json",t.options.body&&(t.options.body="Body=".concat(encodeURIComponent(E(t.options.body))));break;default:t.options.headers={"Content-Type":"application/x-www-form-urlencoded"},t.options.body&&(t.options.body="Body=".concat(encodeURIComponent(E(t.options.body))))}return e(t)}var l={development:"http://172.90.13.175:3000/",production:"http://172.90.13.175:5000/"};n.d(t,"e",function(){return f}),n.d(t,"b",function(){return m}),n.d(t,"a",function(){return v}),n.d(t,"d",function(){return E}),n.d(t,"c",function(){return w});var p,d="production",f=l[d],h=[-700],m=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e,t,n,a){var o={filter:t,url:n,options:a},c=[];return Object.keys(r).forEach(function(e){var t=r[e];"function"===typeof t&&c.push(t)}),function t(n){return function(r){var a=c[n];return a?a(t(n+1),r):e(r)}}(0)(o)}.apply(void 0,[b,f].concat(t))};function b(e){var t=e.filter,n=e.url,r=e.options;return p="","GET"===r.method&&r.body&&(n+="?".concat(r.body),delete r.body),fetch(t+n,r).then(O).then(g).then(y)}var v=function(e){return function(e){return function(t){p?-700===p.code?(e({type:"TOKEN_INVALID"}),u.a.fail("Token\u5931\u6548",3,function(){},!0)):(e({type:"ERROR",error:p}),u.a.fail(JSON.stringfy(p),3,function(){},!0)):e({type:"GLOBAL_LOADING",response:"2"}),e(t)}}};function y(e){return 0!==e.Code?j(e.Code,e):e}function O(e){return e.status>=200&&e.status<300?e:e.json().then(function(t){return j(e.status,t)})}function g(e){var t=e.headers.get("content-type");return"text/csv"===t||-1!==t.indexOf("application/octet-stream")?(e.blob().then(function(t){var n=document.createElement("a"),r=window.URL.createObjectURL(t),a=e.headers.get("content-disposition").replace(/attachment;\s*filename=/,"");n.href=r,n.download=decodeURIComponent(a),n.click(),window.URL.revokeObjectURL(r)}),{Code:0}):e.json()}function j(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=new Error;throw n.code=e,n.response=t,-1!==h.indexOf(e)&&(p=n),n}function E(e){var t=Object.prototype.toString.call(e);return"[object Null]"!==t&&"[object Undefined]"!==t&&"[object FormData]"!==t||(e=""),"[object Object]"!==t&&"[object Array]"!==t||(e=JSON.stringify(e)),e}var w=function(){var e=Object(c.a)(o.a.mark(function e(t,n){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n({type:"GLOBAL_LOADING",response:"1"});case 3:return e.next=5,t.call();case 5:return e.abrupt("return",e.sent);case 8:return e.prev=8,e.t0=e.catch(0),e.next=12,n({type:"ERROR",error:e.t0});case 12:u.a.fail(JSON.stringify(e.t0),3,function(){},!0);case 14:case"end":return e.stop()}},e,null,[[0,8]])}));return function(t,n){return e.apply(this,arguments)}}()},tjUo:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"globalStore",function(){return E}),n.d(r,"topNavBar",function(){return T});var a=n("q1tI"),o=n.n(a),c=n("i8i4"),i=n.n(c),u=(n("ymJX"),n("ANjH")),s=n("tRgb"),l=n("sINF"),p=n("a1D8"),d=n("u4tm"),f=n("LhCv"),h=n("g4DW"),m=n("jQsN"),b=n.n(m),v=n("butC"),y=n("snnE"),O=function(){var e=Object(v.a)(b.a.mark(function e(t){var n;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.payload,e.next=3,Object(y.b)("api/global/version",{method:"GET",body:n});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),g=Object(h.a)({},"GLOBAL_INIT_SUCCESS",function(e,t){return Object.assign({},e,{appInfo:t.appInfo})}),j={appName:"tmall",appInfo:""};function E(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0,n=g[t.type];return n?n(e,t):e}var w=function(){var e=Object(v.a)(b.a.mark(function e(){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(y.b)("api/global/category",{method:"GET"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),C=Object(h.a)({},"GET_CATEGORY_DATA_SUCCESS",function(e,t){return Object.assign({},e,{category:t.category})}),N={category:[]};function T(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0,n=C[t.type];return n?n(e,t):e}var _=Object(f.a)(),k=function(e){return Object(u.c)(Object(p.a)({router:Object(d.b)(_)},r,e))},S=function(e,t){var n=t.key,r=t.reducer;Object.hasOwnProperty.call(e.asyncReducers,n)||(e.asyncReducers[n]=r,e.replaceReducer(k(e.asyncReducers)))},x=k,B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=[l.a,Object(s.a)(_),y.a],n=u.d,r=Object(u.e)(x(),e,n.apply(void 0,[u.a.apply(void 0,t)].concat([])));return r.asyncReducers={},r};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var R=n("2bPg"),I=n("BRlI"),L=n("PK3Q"),A=n("Q5Ww"),G=n("00an"),U=n("55Ip"),D=n("Ty5D"),F=n("/MKj"),J=(n("74aM"),n("Kl5d")),M=n.n(J),K=o.a.Fragment,X=function(e){function t(e){var n;return Object(R.a)(this,t),(n=Object(L.a)(this,Object(A.a)(t).call(this,e))).state={hasError:!1},n}return Object(G.a)(t,e),Object(I.a)(t,[{key:"componentDidMount",value:function(){this.props.getGlobalInitInfo()}},{key:"componentDidUpdate",value:function(){console.log(this.props.location.pathname)}},{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0}),M.a.info('\u51fa\u9519\u4e86\uff01\uff08\u6765\u81ea"\u9519\u8bef\u8fb9\u754c"\u7684\u63d0\u793a\uff09')}},{key:"render",value:function(){return o.a.createElement(K,null,this.props.children)}}]),t}(o.a.Component),Q=Object(D.f)(X),P={getGlobalInitInfo:function(e){return function(e){Object(y.c)(Object(v.a)(b.a.mark(function t(){var n;return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e({type:"GLOBAL_INIT"});case 2:return t.next=4,O({payload:{date:(new Date).getTime()}});case 4:return n=t.sent,t.next=7,e({type:"GLOBAL_INIT_SUCCESS",appInfo:n.Result});case 7:case"end":return t.stop()}},t)})),e)}}},W=Object(F.c)(function(e){return{globalStore:e.globalStore}},P)(Q),q=function(e){function t(){return Object(R.a)(this,t),Object(L.a)(this,Object(A.a)(t).apply(this,arguments))}return Object(G.a)(t,e),Object(I.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(F.a,{store:this.props.store},o.a.createElement(d.a,{history:this.props.history},o.a.createElement(U.a,null,o.a.createElement(W,null,o.a.createElement(a.Suspense,{fallback:o.a.createElement("div",null,"Loading...")},o.a.createElement(D.c,null,this.props.routes.map(function(t,n){return o.a.createElement(D.a,{render:t.render?t.render:function(n){return o.a.createElement(t.component,Object.assign({store:e.props.store},n))},exact:!!t.exact,key:t.path+n,path:t.path})})))))))}}]),t}(o.a.Component),z=(n("LM4t"),n("pQQQ"),n("VRR5")),H=n.n(z),V=(n("M50U"),n("Etru")),Y=n.n(V),Z=(n("i710"),n("LOOE")),$=n.n(Z),ee=n("Mpt7");var te,ne,re,ae=n("rG8K"),oe=n.n(ae),ce=o.a.Fragment,ie=function(e){var t,n,r;return n=t=function(t){function n(t){var r;return Object(R.a)(this,n),(r=Object(L.a)(this,Object(A.a)(n).call(this,t))).shouldUpdate=e.prototype.shouldComponentUpdate,r}return Object(G.a)(n,t),Object(I.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){"[object Function]"===Object.prototype.toString.call(this.shouldUpdate)&&this.shouldUpdate(e,t);var n=!ee.a.is(ee.a.fromJS(e),ee.a.fromJS(this.props))||!ee.a.is(ee.a.fromJS(t),ee.a.fromJS(this.state));return console.log(e,t),console.log(this.props,this.state),console.log(n),n}}]),n}(e),t.displayName="HOC(".concat((r=e).displayName||r.name||"Component",")"),n}((re=ne=function(e){function t(e){var n;return Object(R.a)(this,t),(n=Object(L.a)(this,Object(A.a)(t).call(this,e))).onOpenChange=function(){n.setState({drawerOpen:!n.state.drawerOpen}),"[object Function]"===Object.prototype.toString.call(n.props.onToggleCallback)&&n.props.onToggleCallback()},n.renderSideBar=function(){return o.a.createElement(ce,null,o.a.createElement("div",{className:oe.a["category-title"]},o.a.createElement("h3",null,"\u5168\u90e8\u5206\u7c7b")),o.a.createElement("div",{className:oe.a["category-container"]},o.a.createElement("ul",{className:oe.a["left-ul"]},n.props.topNavBar.category.map(function(e,t){return o.a.createElement("li",{className:n.state.firstClassIndex===t?oe.a["item-active"]:oe.a["item-closed"],key:"first-class-".concat(e.id),onClick:n.handleFirstClassClick(t)},e.name)})),o.a.createElement("div",{className:oe.a["right-div"]})))},n.handleFirstClassClick=function(e){return function(){n.setState({firstClassIndex:e})}},n.state={drawerOpen:!1,firstClassIndex:0},n}return Object(G.a)(t,e),Object(I.a)(t,[{key:"componentDidMount",value:function(){this.props.getCategoryData()}},{key:"render",value:function(){return o.a.createElement(ce,null,o.a.createElement(Y.a,{icon:o.a.createElement($.a,{type:"ellipsis"}),onLeftClick:this.onOpenChange,className:oe.a["top-navbar"]},o.a.createElement("img",{src:"//gw.alicdn.com/tfs/TB1wQw8qamWBuNjy1XaXXXCbXXa-237-41.png_240x10000.jpg_.webp",alt:"\u5929\u732bTmall",className:oe.a["tmall-img"]})),o.a.createElement("div",{className:oe.a["drawer-container"]},o.a.createElement(H.a,{className:oe.a["my-drawer"],style:{height:document.documentElement.clientHeight-88},sidebar:this.renderSideBar(),open:this.state.drawerOpen,onOpenChange:this.onOpenChange},this.props.children)))}}]),t}(o.a.Component),ne.defaultProps={},te=re))||te,ue={getCategoryData:function(){return function(e){Object(y.c)(Object(v.a)(b.a.mark(function t(){var n;return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e({type:"GET_CATEGORY_DATA"});case 2:return t.next=4,w();case 4:return n=t.sent,t.next=7,e({type:"GET_CATEGORY_DATA_SUCCESS",category:n.Result.category});case 7:case"end":return t.stop()}},t)})),e)}}},se=Object(F.c)(function(e){return{topNavBar:e.topNavBar}},ue)(ie),le=n("jhpt"),pe=n.n(le),de=function(e){function t(e){var n;return Object(R.a)(this,t),(n=Object(L.a)(this,Object(A.a)(t).call(this,e))).handleTopNavBarToggle=function(){n.setState(function(e,t){return{topNavBarOpen:!e.topNavBarOpen}})},n.state={topNavBarOpen:!1},n}return Object(G.a)(t,e),Object(I.a)(t,[{key:"render",value:function(){return[o.a.createElement(se,{key:"TopNavBar",onToggleCallback:this.handleTopNavBarToggle},o.a.createElement(U.b,{to:"/counter",key:"counter"},"counter"),o.a.createElement("div",{style:{height:"10000px"},key:"test"},"index1"),o.a.createElement("img",{src:pe.a,alt:"",key:"img"}))]}}]),t}(o.a.PureComponent),fe=function(e){var t=e.store,r=Object(a.lazy)(function(){return n.e("counter").then(n.bind(null,"KRwc"))});return n.e("counter").then(n.bind(null,"G9rN")).then(function(e){var n=e.default;S(t,{key:"counter",reducer:n})}),o.a.createElement(r,null)},he=function(e){var t=e.store,r=Object(a.lazy)(function(){return n.e("CEOSearch").then(n.bind(null,"1KbR"))});return n.e("CEOSearch").then(n.bind(null,"+Ao8")).then(function(e){var n=e.default;S(t,{key:"ceoSearch",reducer:n})}),o.a.createElement(r,null)},me=n("7cf5"),be=function(e){var t=e.store,r=Object(me.a)(e,["store"]),c=Object(a.lazy)(function(){return n.e("RefsDemo").then(n.bind(null,"it8r"))});return n.e("RefsDemo").then(n.bind(null,"skD6")).then(function(e){var n=e.default;S(t,{key:"refsDemo",reducer:n})}),o.a.createElement(c,r)},ve=function(e){var t=e.store,r=Object(me.a)(e,["store"]),c=Object(a.lazy)(function(){return n.e("StudioRefresh").then(n.bind(null,"qNf4"))});return n.e("StudioRefresh").then(n.bind(null,"7qpB")).then(function(e){var n=e.default;S(t,{key:"studioRefresh",reducer:n})}),o.a.createElement(c,r)},ye=function(e){return[{path:"/",exact:!0,component:de},{path:"/counter",exact:!0,component:fe},{path:"/ceo-search",exact:!0,component:he},{path:"/refs-demo",exact:!0,component:be},{path:"/studio-refresh",exact:!0,component:ve}]},Oe=(n("BY+L"),B(window.__INITIAL_STATE__)),ge=ye(Oe),je=document.getElementById("root");i.a.render(o.a.createElement(q,{store:Oe,routes:ge,history:_}),je),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},ymJX:function(e,t,n){}},[[0,"runtime~main","vendors"]]]);
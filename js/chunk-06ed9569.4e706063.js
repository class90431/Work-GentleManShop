(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-06ed9569"],{"0832":function(t,a,s){"use strict";var e=s("43f8"),n=s.n(e);n.a},"0efa":function(t,a,s){"use strict";var e=s("a98f"),n=s.n(e);n.a},"43f8":function(t,a,s){},7277:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("DashboardNavbar"),s("Alert"),s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row"},[s("DashboardSidebar"),s("main",{staticClass:"col-md-9 ml-sm-auto col-lg-10 px-4",attrs:{role:"main"}},[s("router-view")],1)],1)])],1)},n=[],i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("nav",{staticClass:"navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow"},[s("router-link",{staticClass:"logo-dashboard-navbar text-white text-decoration-none navbar-brand col-sm-3 col-md-2 mr-0",attrs:{to:"/index"}},[t._v("Gentleman")]),s("ul",{staticClass:"navbar-nav px-3"},[s("li",{staticClass:"nav-item text-nowrap"},[s("a",{staticClass:"nav-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.signout(a)}}},[t._v("登出")])])])],1)])},l=[],r={name:"DashboardNavbar",methods:{signout:function(){var t="".concat("https://vue-course-api.hexschool.io","/logout"),a=this;this.$http.post(t).then(function(t){console.log(t.data),t.data.success&&a.$router.push("/login")})}}},c=r,o=(s("0efa"),s("2877")),u=Object(o["a"])(c,i,l,!1,null,"82ee7e72",null),d=u.exports,f=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("nav",{staticClass:"col-md-2 d-none d-md-block bg-light sidebar"},[s("div",{staticClass:"sidebar-sticky"},[t._m(0),s("ul",{staticClass:"nav flex-column"},[s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link text-left",attrs:{to:"/admin/productlist"}},[s("i",{staticClass:"fas fa-box-open ml-4"}),t._v("\n          產品列表\n          ")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link text-left",attrs:{to:"/admin/orders"}},[s("i",{staticClass:"fas fa-list-alt ml-4"}),t._v("\n            訂單列表\n            ")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link text-left",attrs:{to:"/admin/coupons"}},[s("i",{staticClass:"fas fa-ticket-alt ml-4"}),t._v("\n            優惠券\n            ")])],1)]),t._m(1),s("ul",{staticClass:"nav flex-column mb-2"},[s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link text-left",attrs:{to:"/product"}},[s("i",{staticClass:"fas fa-shopping-cart ml-4"}),t._v("\n            回到商城\n            ")])],1)])])])])},m=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("h6",{staticClass:"sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"},[s("span",[t._v("管理員")]),s("a",{staticClass:"d-flex align-items-center text-muted",attrs:{href:"#"}},[s("span",{attrs:{"data-feather":"plus-circle"}})])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("h6",{staticClass:"sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"},[s("span",[t._v("使用者")]),s("a",{staticClass:"d-flex align-items-center text-muted",attrs:{href:"#"}},[s("span",{attrs:{"data-feather":"plus-circle"}})])])}],v={name:"DashboardSidebar"},b=v,h=Object(o["a"])(b,f,m,!1,null,null,null),p=h.exports,x=s("56a6"),C={name:"dashboard",components:{DashboardNavbar:d,DashboardSidebar:p,Alert:x["a"]}},_=C,k=(s("0832"),Object(o["a"])(_,e,n,!1,null,"f12ab68c",null));a["default"]=k.exports},a98f:function(t,a,s){}}]);
//# sourceMappingURL=chunk-06ed9569.4e706063.js.map
(function(t){function e(e){for(var o,c,u=e[0],i=e[1],s=e[2],d=0,l=[];d<u.length;d++)c=u[d],r[c]&&l.push(r[c][0]),r[c]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o]);f&&f(e);while(l.length)l.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,c=1;c<n.length;c++){var u=n[c];0!==r[u]&&(o=!1)}o&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},c={app:0},r={app:0},a=[];function u(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"7b08df13","chunk-1d7cff54":"61ae8c2a","chunk-25bdd9ae":"b6d1ee8b","chunk-2d0ab565":"a1ba2969","chunk-2d0e2114":"c25022a4","chunk-2d22c48a":"f597c883","chunk-2d4e5d5a":"3a5867b4","chunk-42b91764":"0a94c594","chunk-513c41c8":"f845b7dd","chunk-5e64f7bb":"2c4c22ce","chunk-6ecbe87b":"71cbd5b6","chunk-70532ca4":"c392edbb","chunk-91e0f95a":"5e452d08","chunk-a2e2e69a":"730e950c","chunk-abdcbfe2":"f6c77dcb","chunk-48c475e4":"5d421ff9","chunk-7980f3a6":"e29bd622","chunk-b7cc546a":"3225820f","chunk-e93f0ca2":"b4dcff06","chunk-fd5216ce":"0fff8a2d"}[t]+".js"}function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n={about:1,"chunk-1d7cff54":1,"chunk-25bdd9ae":1,"chunk-2d4e5d5a":1,"chunk-42b91764":1,"chunk-5e64f7bb":1,"chunk-6ecbe87b":1,"chunk-70532ca4":1,"chunk-91e0f95a":1,"chunk-a2e2e69a":1,"chunk-abdcbfe2":1,"chunk-48c475e4":1,"chunk-7980f3a6":1,"chunk-b7cc546a":1,"chunk-e93f0ca2":1,"chunk-fd5216ce":1};c[t]?e.push(c[t]):0!==c[t]&&n[t]&&e.push(c[t]=new Promise(function(e,n){for(var o="css/"+({about:"about"}[t]||t)+"."+{about:"e39d54ff","chunk-1d7cff54":"df1f7c88","chunk-25bdd9ae":"ffb3c2d0","chunk-2d0ab565":"31d6cfe0","chunk-2d0e2114":"31d6cfe0","chunk-2d22c48a":"31d6cfe0","chunk-2d4e5d5a":"0f98e794","chunk-42b91764":"68f5c977","chunk-513c41c8":"31d6cfe0","chunk-5e64f7bb":"9d9744f3","chunk-6ecbe87b":"436ceebb","chunk-70532ca4":"e99ad001","chunk-91e0f95a":"698b7936","chunk-a2e2e69a":"c29135ea","chunk-abdcbfe2":"7dc563b9","chunk-48c475e4":"2decf9da","chunk-7980f3a6":"587da59d","chunk-b7cc546a":"2d5d83ce","chunk-e93f0ca2":"6b3d83f8","chunk-fd5216ce":"c77a993c"}[t]+".css",r=i.p+o,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var s=a[u],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===o||d===r))return e()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){s=l[u],d=s.getAttribute("data-href");if(d===o||d===r)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var o=e&&e.target&&e.target.src||r,a=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=o,delete c[t],f.parentNode.removeChild(f),n(a)},f.href=r;var h=document.getElementsByTagName("head")[0];h.appendChild(f)}).then(function(){c[t]=0}));var o=r[t];if(0!==o)if(o)e.push(o[2]);else{var a=new Promise(function(e,n){o=r[t]=[e,n]});e.push(o[2]=a);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=u(t),s=function(e){d.onerror=d.onload=null,clearTimeout(l);var n=r[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),c=e&&e.target&&e.target.src,a=new Error("Loading chunk "+t+" failed.\n("+o+": "+c+")");a.type=o,a.request=c,n[1](a)}r[t]=void 0}};var l=setTimeout(function(){s({type:"timeout",target:d})},12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(e)},i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var f=d;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),c=n("2f62"),r=n("bc3a"),a=n.n(r),u=n("a7fe"),i=n.n(u),s=n("9062"),d=n.n(s),l=n("7bb1"),f=n("427f"),h=n.n(f),p=(n("e40d"),n("21b6"),n("4989"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"position-relative"},[n("keep-alive",[t.$route.meta.keepAlive?t._e():n("router-link",{staticClass:"position-absolute text-white text-decoration-none logo",attrs:{to:{name:"home"}}},[t._v("GentleMan")])],1),n("keep-alive",[n("a",{staticClass:"position-absolute text-white text-decoration-none menuLink",on:{click:function(e){e.preventDefault(),t.status.menuSwitch=!t.status.menuSwitch}}},[t._v("Menu"),n("i",{staticClass:"fas fa-bars ml-3"})])]),n("keep-alive",[t.$route.meta.keepAlive?t._e():n("transition",{attrs:{name:"slide"}},[t.status.menuSwitch?n("ul",{staticClass:"position-absolute list-unstyled ul-style w-100 m-0 flex-column justify-content-around border-top border-bottom"},[n("li",{staticClass:"border-bottom li-hover-style"},[n("router-link",{staticClass:"text-light d-block py-3 text-decoration-none",attrs:{to:"/product"}},[t._v("NEW")])],1),n("li",{staticClass:"border-bottom li-hover-style"},[n("router-link",{staticClass:"text-light d-block py-3 text-decoration-none",attrs:{to:"/product/hot"}},[t._v("HOT")])],1),n("li",{staticClass:"border-bottom li-hover-style"},[n("router-link",{staticClass:"text-light d-block py-3 text-decoration-none",attrs:{to:"/product/preorder"}},[t._v("PREORDER")])],1),n("li",{staticClass:"border-bottom li-hover-style"},[n("router-link",{staticClass:"text-light d-block py-3 text-decoration-none",attrs:{to:"/product/sale"}},[t._v("SALE")])],1),n("li",{staticClass:"border-bottom li-hover-style"},[n("router-link",{staticClass:"text-light d-block py-3 text-decoration-none",attrs:{to:"/product/suit"}},[t._v("SUIT")])],1),n("li",{staticClass:"border-bottom li-hover-style"},[n("router-link",{staticClass:"text-light d-block py-3 text-decoration-none",attrs:{to:"/product/top"}},[t._v("TOP")])],1),n("li",{staticClass:"border-bottom li-hover-style"},[n("router-link",{staticClass:"text-light d-block py-3 text-decoration-none",attrs:{to:"/product/bottom"}},[t._v("BOTTOM")])],1),n("li",{staticClass:"border-bottom li-hover-style"},[n("router-link",{staticClass:"text-light d-block py-3 text-decoration-none",attrs:{to:"/product/shoes"}},[t._v("SHOES")])],1),n("li",{staticClass:"li-hover-style"},[n("router-link",{staticClass:"text-light d-block py-3 text-decoration-none",attrs:{to:"/product/acc"}},[t._v("ACC")])],1)]):t._e()])],1),n("keep-alive",[t.$route.meta.keepAlive?t._e():n("router-link",{staticClass:"position-absolute text-white text-decoration-none hotLink ",attrs:{to:"/product/hot"}},[t._v("HOT")])],1),n("keep-alive",[t.$route.meta.keepAlive?t._e():n("router-link",{staticClass:"position-absolute text-white text-decoration-none newLink",attrs:{to:"/product"}},[t._v("NEW")])],1),n("router-view")],1)])}),m=[],b={name:"App",data:function(){return{status:{menuSwitch:!1}}},watch:{$route:function(t,e){this.status.menuSwitch=!1}}},k=b,v=(n("5fe9"),n("2877")),_=Object(v["a"])(k,p,m,!1,null,"1bf790e8",null),g=_.exports,P=n("8c4f");o["a"].use(P["a"]);var C=new P["a"]({routes:[{path:"*",redirect:"index"},{path:"/index",name:"home",component:function(){return n.e("about").then(n.bind(null,"bb51"))}},{path:"/product",name:"",component:function(){return Promise.all([n.e("chunk-abdcbfe2"),n.e("chunk-48c475e4")]).then(n.bind(null,"d2f1"))},meta:{keepAlive:!0},children:[{path:"",name:"new",component:function(){return n.e("chunk-5e64f7bb").then(n.bind(null,"67bf"))},meta:{keepAlive:!0}},{path:"hot",name:"hot",component:function(){return n.e("chunk-a2e2e69a").then(n.bind(null,"0b70"))},meta:{keepAlive:!0}},{path:"preorder",name:"preorder",component:function(){return n.e("chunk-91e0f95a").then(n.bind(null,"16fc"))},meta:{keepAlive:!0}},{path:"sale",name:"sale",component:function(){return n.e("chunk-25bdd9ae").then(n.bind(null,"df7e"))},meta:{keepAlive:!0}},{path:"suit",name:"suit",component:function(){return n.e("chunk-b7cc546a").then(n.bind(null,"ed65"))},meta:{keepAlive:!0}},{path:"top",name:"top",component:function(){return n.e("chunk-42b91764").then(n.bind(null,"ec27"))},meta:{keepAlive:!0}},{path:"bottom",name:"bottom",component:function(){return n.e("chunk-1d7cff54").then(n.bind(null,"9f5c"))},meta:{keepAlive:!0}},{path:"shoes",name:"shoes",component:function(){return n.e("chunk-2d4e5d5a").then(n.bind(null,"3cf2"))},meta:{keepAlive:!0}},{path:"acc",name:"acc",component:function(){return n.e("chunk-70532ca4").then(n.bind(null,"f950"))},meta:{keepAlive:!0}},{path:"cart",name:"cart",component:function(){return n.e("chunk-513c41c8").then(n.bind(null,"b789"))},meta:{keepAlive:!0,carouselActive:!0}},{path:"checkout/:orderId",name:"checkout",component:function(){return n.e("chunk-2d0e2114").then(n.bind(null,"7cb4"))},meta:{keepAlive:!0,carouselActive:!0}}]},{path:"/login",name:"login",component:function(){return n.e("chunk-e93f0ca2").then(n.bind(null,"a55b"))},meta:{keepAlive:!0}},{path:"/admin",name:"dashboard",component:function(){return n.e("chunk-fd5216ce").then(n.bind(null,"7277"))},meta:{keepAlive:!0,requiresAuth:!0},children:[{path:"productlist",name:"productlist",component:function(){return n.e("chunk-6ecbe87b").then(n.bind(null,"96fc"))},meta:{requiresAuth:!0}},{path:"orders",name:"orders",component:function(){return n.e("chunk-2d0ab565").then(n.bind(null,"159d"))},meta:{requiresAuth:!0}},{path:"coupons",name:"coupons",component:function(){return n.e("chunk-2d22c48a").then(n.bind(null,"f329"))},meta:{requiresAuth:!0}}]},{path:"/:id",name:"onepageproduct",component:function(){return Promise.all([n.e("chunk-abdcbfe2"),n.e("chunk-7980f3a6")]).then(n.bind(null,"18bf"))},meta:{keepAlive:!0,carouselActive:!0}}]});o["a"].prototype.$bus=new o["a"];n("a481"),n("c5f6");var y=function(t){var e=Number(t);return"$".concat(e.toFixed(0).replace(/./g,function(t,e,n){var o=e&&"."!==t&&(n.length-e)%3===0?", ".concat(t).replace(/\s/g,""):t;return o}))},O=function(t){var e=new Date(1e3*t);return e.toLocaleDateString()},A=function(t){var e=Number(t);return Math.round(e)},T=(n("ac6a"),{strict:!0,state:{tempProducts:[],new_Products:[],hot_Products:[],preorder_Products:[],sale_Products:[],suit_Products:[],top_Products:[],bottom_Products:[],shoes_Products:[],acc_Products:[]},actions:{getProducts:function(t){var e="".concat("https://vue-course-api.hexschool.io","/api/").concat("gentleman","/products/all");t.commit("LOADING",!0),a.a.get(e).then(function(e){t.commit("TEMPPRODUCTS",e.data.products),console.log("payload",e.data.products),t.commit("NEW_PRODUCTS"),t.commit("HOT_PRODUCTS"),t.commit("PREORDER_PRODUCTS"),t.commit("SALE_PRODUCTS"),t.commit("SUIT_PRODUCTS"),t.commit("TOP_PRODUCTS"),t.commit("BOTTOM_PRODUCTS"),t.commit("SHOES_PRODUCTS"),t.commit("ACC_PRODUCTS"),t.commit("LOADING",!1),console.log(t.state)})}},mutations:{TEMPPRODUCTS:function(t,e){t.tempProducts=e,t.tempProducts.forEach(function(t){t.price=parseInt(t.price),t.origin_price=parseInt(t.origin_price),t.is_enabled=parseInt(t.is_enabled)})},NEW_PRODUCTS:function(t){t.new_Products=t.tempProducts.filter(function(t){return"最新商品"===t.category&&1===t.is_enabled})},HOT_PRODUCTS:function(t){t.hot_Products=t.tempProducts.filter(function(t){return"熱賣商品"===t.category&&1===t.is_enabled})},PREORDER_PRODUCTS:function(t){t.preorder_Products=t.tempProducts.filter(function(t){return"人氣預購"===t.category&&1===t.is_enabled})},SALE_PRODUCTS:function(t){t.sale_Products=t.tempProducts.filter(function(t){return"優惠折扣"===t.category&&1===t.is_enabled})},SUIT_PRODUCTS:function(t){t.suit_Products=t.tempProducts.filter(function(t){return"套裝"===t.category&&1===t.is_enabled})},TOP_PRODUCTS:function(t){t.top_Products=t.tempProducts.filter(function(t){return"上身"===t.category&&1===t.is_enabled})},BOTTOM_PRODUCTS:function(t){t.bottom_Products=t.tempProducts.filter(function(t){return"下身"===t.category&&1===t.is_enabled})},SHOES_PRODUCTS:function(t){t.shoes_Products=t.tempProducts.filter(function(t){return"鞋子"===t.category&&1===t.is_enabled})},ACC_PRODUCTS:function(t){t.acc_Products=t.tempProducts.filter(function(t){return"配件"===t.category&&1===t.is_enabled})}},getters:{tempProducts:function(t){return t.tempProducts},new_Products:function(t){return t.new_Products},hot_Products:function(t){return t.hot_Products},preorder_Products:function(t){return t.preorder_Products},sale_Products:function(t){return t.sale_Products},suit_Products:function(t){return t.suit_Products},top_Products:function(t){return t.top_Products},bottom_Products:function(t){return t.bottom_Products},shoes_Products:function(t){return t.shoes_Products},acc_Products:function(t){return t.acc_Products}}}),S={strict:!0,state:{cart:{carts:[]}},actions:{getCart:function(t){var e=this,n="".concat("https://vue-course-api.hexschool.io","/api/").concat("gentleman","/cart");t.commit("LOADING",!0),a.a.get(n).then(function(n){t.commit("LOADING",!1),t.commit("CART",n.data.data),console.log("response.data.data",n.data.data),console.log("cart",e.state.cartsModules.cart)})},removeCartItem:function(t,e){var n=e.id,o=e.vm;t.commit("LOADING",!0);var c="".concat("https://vue-course-api.hexschool.io","/api/").concat("gentleman","/cart/").concat(n);a.a.delete(c).then(function(e){console.log(e.data),t.commit("LOADING",!1),o.$bus.$emit("messsage:push",e.data.message,"info"),t.dispatch("getCart")})},addtoCart:function(t,e){var n=e.id,o=e.size,c=e.qty,r=e.vm,u="".concat("https://vue-course-api.hexschool.io","/api/").concat("gentleman","/cart");t.commit("LOADING",!0);var i={product_id:n,size:o,qty:c};a.a.post(u,{data:i}).then(function(e){console.log(e.data),t.commit("LOADING",!1),r.$bus.$emit("messsage:push",e.data.message,"success"),t.dispatch("getCart")})}},mutations:{CART:function(t,e){t.cart=e}},getters:{cart:function(t){return t.cart}}};o["a"].use(c["a"]);var x=new c["a"].Store({strict:!0,state:{isLoading:!1},actions:{updateLoading:function(t,e){t.commit("LOADING",e)}},mutations:{LOADING:function(t,e){t.isLoading=e}},getters:{isLoading:function(t){return t.isLoading}},modules:{productsModules:T,cartsModules:S}});o["a"].use(i.a,a.a),o["a"].use(l["a"],{events:"input|blur"}),o["a"].use(c["a"]),o["a"].component("Loading",d.a),o["a"].filter("currency",y),o["a"].filter("time",O),o["a"].filter("integer",A),o["a"].config.productionTip=!1,a.a.defaults.withCredentials=!0,l["a"].Validator.localize("zh_TW",h.a),new o["a"]({router:C,store:x,render:function(t){return t(g)}}).$mount("#app"),C.beforeEach(function(t,e,n){if(t.meta.requiresAuth){var o="".concat("https://vue-course-api.hexschool.io","/api/user/check");a.a.post(o).then(function(t){t.data.success?n():n({path:"/login"})})}else n()})},"5fe9":function(t,e,n){"use strict";var o=n("ff18"),c=n.n(o);c.a},ff18:function(t,e,n){}});
//# sourceMappingURL=app.4a0f45ba.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e2114"],{"7cb4":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"checkout"},[e("div",{staticClass:"my-5 row justify-content-center"},[e("form",{staticClass:"col-md-6",on:{submit:t.payOrder}},[e("table",{staticClass:"table"},[t._m(0),e("tbody",t._l(t.order.products,function(s){return e("tr",{key:s.id},[e("td",{staticClass:"align-middle text-left"},[t._v(t._s(s.product.title))]),e("td",{staticClass:"align-middle"},[t._v(t._s(s.qty)+"/"+t._s(s.product.unit))]),e("td",[t._v(t._s(s.size))]),e("td",{staticClass:"align-middle text-right"},[t._v(t._s(t._f("integer")(s.final_total)))])])}),0),e("tfoot",[e("tr",[e("td",{staticClass:"text-right h5",attrs:{colspan:"3"}},[t._v("總計")]),e("td",{staticClass:"text-right h5"},[t._v(t._s(t._f("integer")(t.order.total)))])])])]),e("table",{staticClass:"table mt-5"},[e("tbody",[e("tr",[e("th",{staticClass:"text-left",attrs:{width:"200"}},[t._v("Email")]),e("td",{staticClass:"text-left"},[t._v(t._s(t.order.user.email))])]),e("tr",[e("th",{staticClass:"text-left"},[t._v("姓名")]),e("td",{staticClass:"text-left"},[t._v(t._s(t.order.user.name))])]),e("tr",[e("th",{staticClass:"text-left"},[t._v("收件人電話")]),e("td",{staticClass:"text-left"},[t._v(t._s(t.order.user.tel))])]),e("tr",[e("th",{staticClass:"text-left"},[t._v("收件人地址")]),e("td",{staticClass:"text-left"},[t._v(t._s(t.order.user.address))])]),e("tr",[e("th",{staticClass:"text-left"},[t._v("付款狀態")]),e("td",{staticClass:"text-left"},[t.order.is_paid?e("span",{staticClass:"text-success"},[t._v("付款完成")]):e("span",[t._v("尚未付款")])])])])]),!1===t.order.is_paid?e("div",{staticClass:"text-right"},[e("button",{staticClass:"btn btn-danger"},[t._v("確認付款去")])]):t._e()])])])},r=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("thead",[e("th",{staticClass:"text-left"},[t._v("品名")]),e("th",[t._v("數量")]),e("th",[t._v("尺寸")]),e("th",[t._v("單價")])])}],i={data:function(){return{orderId:"",order:{user:{}}}},methods:{getOrder:function(){var t=this,s="".concat("https://vue-course-api.hexschool.io","/api/").concat("gentleman","/order/").concat(t.orderId);t.isLoading=!0,this.$http.get(s).then(function(s){console.log(s),t.isLoading=!1,t.order=s.data.order,console.log(t.order)})},payOrder:function(){var t=this,s="".concat("https://vue-course-api.hexschool.io","/api/").concat("gentleman","/pay/").concat(t.orderId);t.isLoading=!0,this.$http.post(s).then(function(s){console.log(s),s.data.success&&t.getOrder(),t.isLoading=!1})}},created:function(){this.orderId=this.$route.params.orderId,console.log(this.orderId),this.getOrder()}},o=i,c=e("2877"),d=Object(c["a"])(o,a,r,!1,null,"1d37c7ed",null);s["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0e2114.c25022a4.js.map
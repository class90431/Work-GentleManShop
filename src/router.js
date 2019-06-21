import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    { // 如果使用者使用到不是我所定義的 path ,則重新導引到首頁
      path: '*',
      redirect: 'index'
    },
    { // index
      path: '/index',
      name: 'home',
      component: () => import(/* webpackChunkName: "about" */ './views/Home.vue')
    },
    { // product
      path: '/product',
      name: '',
      component: () => import('./views/Product.vue'),
      meta: {
        keepAlive: true // 需要隱藏 router-link
      },
      children: [
        { // new
          path: '',
          name: 'new',
          component: () => import('./views/New.vue'),
          meta: {
            keepAlive: true // 需要隱藏 router-link
          }
        },
        { // hot
          path: 'hot',
          name: 'hot',
          component: () => import('./views/Hot.vue'),
          meta: {
            keepAlive: true // 需要隱藏 router-link
          }
        },
        { // preorder
          path: 'preorder',
          name: 'preorder',
          component: () => import('./views/Preorder.vue'),
          meta: {
            keepAlive: true // 需要隱藏 router-link
          }
        },
        { // sale
          path: 'sale',
          name: 'sale',
          component: () => import('./views/Sale.vue'),
          meta: {
            keepAlive: true // 需要隱藏 router-link
          }
        },
        { // suit
          path: 'suit',
          name: 'suit',
          component: () => import('./views/Suit.vue'),
          meta: {
            keepAlive: true // 需要隱藏 router-link
          }
        },
        { // top
          path: 'top',
          name: 'top',
          component: () => import('./views/Top.vue'),
          meta: {
            keepAlive: true // 需要隱藏 router-link
          }
        },
        { // bottom
          path: 'bottom',
          name: 'bottom',
          component: () => import('./views/Bottom.vue'),
          meta: {
            keepAlive: true // 需要隱藏 router-link
          }
        },
        { // shoes
          path: 'shoes',
          name: 'shoes',
          component: () => import('./views/Shoes.vue'),
          meta: {
            keepAlive: true // 需要隱藏 router-link
          }
        },
        { // acc
          path: 'acc',
          name: 'acc',
          component: () => import('./views/Acc.vue'),
          meta: {
            keepAlive: true // 需要隱藏 router-link
          }
        },
        { // cart
          path: 'cart',
          name: 'cart',
          component: () => import('./views/Cart.vue'),
          meta: {
            keepAlive: true, // 需要隱藏 router-link
            carouselActive: true // 需要隱藏 carousel(輪播)
          }
        },
        { // checkout
          path: 'checkout/:orderId',
          name: 'checkout',
          component: () => import('./views/Checkout.vue'),
          meta: {
            keepAlive: true, // 需要隱藏 router-link\
            carouselActive: true // 需要隱藏 carousel(輪播)
          }
        }
      ]
    },
    { // login
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./views/Login.vue'),
      meta: {
        keepAlive: true // 需要缓存 router-link
        // requiresAuth: true 導航守衛判斷依據,此依據用來決定此頁需不需要管理者登入才能前往
      }
    },
    { // dashboard
      path: '/admin',
      name: 'dashboard',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./views/Dashboard.vue'),
      meta: {
        keepAlive: true, // 需要缓存 router-link
        requiresAuth: true // 導航守衛判斷依據,此依據用來決定此頁需不需要管理者登入才能前往
      },
      children: [
        { // productlist
          path: 'productlist',
          name: 'productlist',
          component: () => import('./views/ProductList.vue'),
          meta: {
            requiresAuth: true // 導航守衛判斷依據,此依據用來決定此頁需不需要管理者登入才能前往
          }
        },
        { // orders
          path: 'orders',
          name: 'orders',
          component: () => import('./views/Orders.vue'),
          meta: {
            requiresAuth: true // 導航守衛判斷依據,此依據用來決定此頁需不需要管理者登入才能前往
          }
        },
        { // coupons
          path: 'coupons',
          name: 'coupons',
          component: () => import('./views/Coupons.vue'),
          meta: {
            requiresAuth: true // 導航守衛判斷依據,此依據用來決定此頁需不需要管理者登入才能前往
          }
        }
      ]
    },
    { // one-page-product
      path: '/:id',
      name: 'onepageproduct',
      component: () => import('./views/OnePageProduct.vue'),
      meta: {
        keepAlive: true, // 需要隱藏 router-link
        carouselActive: true // 需要隱藏 carousel(輪播)
      }
    }
  ]
})

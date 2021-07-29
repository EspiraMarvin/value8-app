import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import store from '../store';


Vue.use(VueRouter)

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default function (/* { store, ssrContext } */) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,

    // Leave these as they are and change in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  })


  // // access control
  // const isUserLoggedIn = store().getters['users/GET_AUTH']
  //
  // Router.beforeEach(async (to, from, next) => {
  //
  //
  //   const auth = to.meta.requiresAuth;
  //   const pathRole = to.meta.role || false;
  //   const redirectLoggedIn = to.meta.redirectIfLoggedIn || false;
  //
  //   /**
  //    * public path proceed
  //    * doesn't require auth
  //    */
  //   if (!isUserLoggedIn && !auth) {
  //     next();
  //   }
  //
  //   /**
  //    * if route requires a logged in user;
  //    * and the user is not authenticated redirect to login
  //    */
  //   if (!isUserLoggedIn && auth) {
  //     next({
  //       name: 'AuthLogin'
  //     });
  //   }
  //
  //   /**
  //    * If route requires auth
  //    *
  //    * And user is logged in, check roles and proceed
  //    */
  //   if (isUserLoggedIn && auth) {
  //     const userRole = store.getters['users/GET_USER'].role;
  //     if (pathRole === userRole) {
  //       next();
  //     } else if (userRole === 'store') {
  //       // always navigate for admin roles
  //       next();
  //     } else if(userRole !== pathRole && userRole === 'warehouse') {
  //       next({
  //         name: 'WarehouseLayout'
  //       });
  //     }
  //   }
  //
  //   /**
  //    * if user is logged in
  //    * and this is an authentication route
  //    * redirect to homepage
  //    */
  //   if (isUserLoggedIn && redirectLoggedIn) {
  //     next({
  //       name: 'WarehouseLayout'
  //     });
  //   }
  //
  //   /**
  //    * if route doesn't require auth
  //    * and user is logged in just proceed
  //    */
  //   if (isUserLoggedIn && !auth) {
  //     next();
  //   }

  // })

  return Router
}

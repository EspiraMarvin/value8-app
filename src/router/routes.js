import authRoutes from 'src/router/auth'
import adminRoutes from 'src/router/admin'
import mainRoutes from 'src/router/main'
import store from '../store';

// const ifNotAuth = (_to,_from, next) => {
//   if (!store().getters['users/GET_AUTH']){
//     next();
//     return;
//   }
//   next('/')
// }
//
// console.log('ifNotAuth', ifNotAuth)
//
// const ifAuth = (_to,_from, next) => {
//   if (!store().getters['users/GET_AUTH']){
//     next();
//     return;
//   }
//   next('/auth')
// }
//
// console.log('ifAuth', ifAuth)


const routes = [
  {
    path: '/',
    meta: { requiresAuth: false },
    component: () => import('layouts/AuthLayout.vue'),
    children: [...authRoutes]
  },
  {
    path: '/retailer',
    meta: { requiresAuth: true, role: 'normal' },
    component: () => import('layouts/MainLayout.vue'),
    children: [...mainRoutes]
  },
  {
    path: '/admin',
    meta: { requiresAuth: true, role: 'admin'},
    component: () => import('layouts/AdminLayout.vue'),
    children: [...adminRoutes]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    meta: { requiresAuth: false },
    component: () => import('pages/errors/Error404.vue')
  }
]

export default routes

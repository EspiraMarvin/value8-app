import authRoutes from 'src/router/auth'
import adminRoutes from 'src/router/admin'
import mainRoutes from 'src/router/main'

const routes = [
  {
    path: '/',
    meta: { requiresAuth: false, role: 'user' },
    component: () => import('layouts/AuthLayout.vue'),
    children: [...authRoutes]
  },
  {
    path: '/retailer',
    meta: { requiresAuth: true, role: 'user' },
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

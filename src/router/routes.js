import authRoutes from 'src/router/auth'
import storeRoutes from 'src/router/store'
import warehouseRoutes from 'src/router/warehouse'

const routes = [
  {
    path: '/',
    meta: { requiresAuth: false },
    component: () => import('layouts/AuthLayout.vue'),
    children: [...authRoutes]
  },
  {
    path: '/warehouse',
    meta: { requiresAuth: true, role: 'warehouse' },
    component: () => import('layouts/WarehouseLayout.vue'),
    children: [...warehouseRoutes]
  },
  {
    path: '/store',
    meta: { requiresAuth: true, role: 'store'},
    component: () => import('layouts/StoreLayout.vue'),
    children: [...storeRoutes]
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

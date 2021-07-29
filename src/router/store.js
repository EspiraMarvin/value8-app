export default [
  {
    path: '/store',
    meta: { requiresAuth: true, role: 'store', title: 'Value Chain | Manage Products | Orders' },
    name: 'StoreLayout'
  },
  {
    path: 'products',
    meta: { requiresAuth: true, role: 'store', title: 'Value Chain | Manage Products ' },
    name: 'StoreProducts',
    component: () =>
      import(
        /* webpackChunkName: "routes" */
        'pages/ProductManagement.vue'
        )
  },
  {
    path: 'orders',
    meta: { requiresAuth: true, role: 'store', title: 'Value Chain | Manage Orders' },
    name: 'StoreOrders',
    component: () =>
      import(
        /* webpackChunkName: "routes" */
        'pages/OrderManagement.vue'
        )
  }

]

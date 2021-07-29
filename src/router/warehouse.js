export default [
  {
    path: '/warehouse',
    meta: { requiresAuth: true, role: 'user', title: 'Value Chain | Manage Products | Orders' },
    name: 'WarehouseLayout'
  },
  {
    path: 'orders',
    meta: { requiresAuth: true, role: 'user', title: 'Value Chain | Orders' },
    name: 'Orders',
    component: () =>
      import(
        /* webpackChunkName: "routes" */
        'pages/OrderManagement.vue'
        )
  }
]

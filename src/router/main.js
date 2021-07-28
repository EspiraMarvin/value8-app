export default [
  {
    path: '/',
    meta: { requiresAuth: true, role: 'user', title: 'Value Chain | Orders' },
    name: 'MainLayout',
    redirect: {
      name: 'Orders'
    }
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

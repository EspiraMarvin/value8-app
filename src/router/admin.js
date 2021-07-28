export default [
  {
    path: '/admin',
    meta: { requiresAuth: true, role: 'admin', title: 'Value Chain | Admin' },
    name: 'AdminLayout',
    redirect: {
      name: 'AdminDashboard'
    }
  },
  {
    path: 'dashboard',
    meta: { requiresAuth: true, role: 'admin', title: 'Value Chain | Manage Products | Orders' },
    name: 'AdminDashboard',
    component: () =>
      import(
        /* webpackChunkName: "routes" */
        'pages/ProductManagement.vue'
        )
  }
]

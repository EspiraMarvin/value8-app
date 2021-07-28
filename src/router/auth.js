export default [
  {
    path: '/',
    meta: { requiresAuth: false, redirectIfLoggedIn: true, title: 'Value Chain | Login' },
    name: 'AuthLayout',
    redirect: {
      name: 'AuthLogin'
    }
  },
  {
    path: 'login',
    meta: { requiresAuth: false, redirectIfLoggedIn: true, title: 'Value Chain | Login' },
    name: 'AuthLogin',
    component: () =>
      import(
        /* webpackChunkName: "routes" */
        'pages/auth/AuthLogin.vue'
        )
  }
];

export default [
  // user
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      {path: '/user', redirect: '/user/login'},
      {path: '/user/login', component: './user/login'},
    ],
  },
  // basic
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    authority: ['admin', 'user'],
    routes: [
      {path: '/', redirect: '/segment'},
      {
        name: 'segment',
        icon: 'profile',
        path: '/segment',
        component: './segment'
      },
      {
        name: 'exception',
        icon: 'warning',
        path: '/exception',
        routes: [
          // exception
          {
            path: '/exception/403',
            name: 'not-permission',
            component: './Exception/403',
          },
          {
            path: '/exception/404',
            name: 'not-find',
            component: './Exception/404',
          },
          {
            path: '/exception/500',
            name: 'server-error',
            component: './Exception/500',
          },
          {
            path: '/exception/trigger',
            name: 'trigger',
            hideInMenu: true,
            component: './Exception/TriggerException',
          },
        ],
      },
      {
        name: 'overview',
        icon: 'table',
        path: '/overview',
        component: './overview'
      },
      {
        name: 'workplace',
        icon: 'table',
        path: '/workplace',
        component: './workplace'
      },
      {
        name: 'system',
        icon: 'dashboard',
        path: '/system',
        authority: ['admin'],
        routes: [
          {
            name: 'userManagement',
            path: '/system/userManagement',
            component: 'system/userManagement'
          },
          {
            name: 'roleManagement',
            path: '/system/roleManagement',
            component: 'system/roleManagement'
          },
          {
            name: 'resourceManagement',
            path: '/system/resourceManagement',
            component: 'system/resourceManagement'
          }
        ]
      },
      {
        name: 'cdna',
        icon: 'user',
        path: '/cdna',
        component: './customerDNA'
      },
      {
        component: '404',
      },
    ],
  },

]

const loginRoutes = [
  {
    path: `/login`,
    name: 'login',
    component: () => import("@/views/util/login/index.vue"),
  },
];

export default loginRoutes;

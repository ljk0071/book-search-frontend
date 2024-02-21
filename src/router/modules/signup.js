const signupRoutes = [
  {
    path: `/signup`,
    name: 'signup',
    component: () => import("@/views/util/signup/index.vue"),
  },
];

export default signupRoutes;

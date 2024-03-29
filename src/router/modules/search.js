const url = '/search'

const searchRoutes = [
  {
    path: `${url}`,
    name: 'search',
    component: () => import("@/views/search/index.vue"),
  },
  {
    path: `${url}/detail`,
    name: 'searchDetail',
    component: () => import("@/views/search/Detail.vue"),
  },
];

export default searchRoutes;

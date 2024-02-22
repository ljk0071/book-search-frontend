import { createStore } from 'vuex';
// import createPersistedState from 'vuex-persistedstate';

export default createStore({
   plugins: [
    // createPersistedState({
    //   storage: window.sessionStorage,
    // }),
  ],
  state: {
    isLogin: false,
  },
  getters: {
  },
  mutations: {
    isLogin: function (state, payload) {
      state.isLogin = payload;
    },    
  },
  actions: {
    isLogin: function (context, payload) {
      context.commit('isLogin', payload);
    },    
  },
  modules: {},
});

import { createStore } from 'vuex';

export default createStore({
   plugins: [
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

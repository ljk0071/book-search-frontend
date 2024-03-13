import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

export default createStore({
  plugins: [
     createPersistedState({
      storage: window.sessionStorage,
    }),
  ],
  state: {
    isLogin: false,
    userName: null,
    loginType: null,
  },
  getters: {
  },
  mutations: {
    isLogin: function (state, payload) {
      state.isLogin = payload;
    },  
    isLogout: function (state) {
      state.isLogin = false;
      state.userName = null;
      state.loginType = null;
    },
    userName: function (state, payload) {
      state.userName = payload;
    },
    loginType: function (state, payload) {
      state.loginType = payload;
    },    
  },
  actions: {
    isLogin: function (context, payload) {
      context.commit('isLogin', payload);
    },
    isLogout: function (context) {
      context.commit('isLogout');
    },
    userName: function (context, payload) {
      context.commit('userName', payload);
    },
    loginType: function (context, payload) {
      context.commit('loginType', payload);
    },    
  },
  modules: {},
});

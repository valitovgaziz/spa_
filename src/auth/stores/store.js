// store.js
import { createStore } from 'vuex';
import axiosInstanse from '@/auth/axios.js';

export default createStore({
  state: {
    user: null,
    isAuthenticated: false,
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
      state.isAuthenticated = !!user;
    },
  },
  actions: {
    async login({ commit }, credentials) {
      try {
        console.log("login request");
        const response = await axiosInstanse.post('/api/auth/login', credentials);
        commit('SET_USER', response.data.user);
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
    async logout({ commit }) {
      try {
        await axiosInstanse.post('/api/logout');
        commit('SET_USER', null);
      } catch (error) {
        throw error;
      }
    },
    async checkAuth({ commit }) {
      try {
        const response = await axiosInstanse.get('/api/auth/user');
        commit('SET_USER', response.data.user);
      } catch (error) {
        commit('SET_USER', null);
      }
    },
  },
  getters: {
    isAuthenticated: (state) => state.isAuthenticated,
    user: (state) => state.user,
  },
});
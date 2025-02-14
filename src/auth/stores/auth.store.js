// src/auth/stores/auth.store.js
import { defineStore } from 'pinia';
import { reactive, ref } from 'vue';
import AuthService from '../services/auth.service.js';
import { jwtDecode } from 'jwt-decode';

export const useAuthStore = defineStore('auth', () => {
  const user = reactive({username: '', email: '', id: 0, token: ''});
  const isAuthenticated = ref(false);

  const login = async (credentials) => {
    try {
      const response = await AuthService.login(credentials);
      const decodedToken = jwtDecode(response.token);
      user.name = decodedToken.user.username;
      user.id = decodedToken.user.id;
      user.email = decodedToken.user.email;
      isAuthenticated.value = true;
      user.token = response.token;

    } catch (error) {
      console.error('Login failed', error);
      throw error;
    }
  };

  const logout = () => {
    isAuthenticated.value = false;
    user.name = '';
    user.token = '';
    user.email = '';
    user.id = 0;
  };

  const checkAuth = async () => {
    try {
      const token = user.token;
      if (token) {
        try {
          const response = await AuthService.checkAuth(token);
          user.value = response.user;
          isAuthenticated.value = true;
        } catch (error) {
          logout();
        }
      }
    } catch (error) {
      console.error('Check auth failed', error);
      throw error;

    }
  };

  return { user, isAuthenticated, login, logout, checkAuth };
});
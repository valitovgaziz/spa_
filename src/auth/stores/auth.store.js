// src/auth/stores/auth.store.js
import { defineStore } from 'pinia';
import { reactive, ref } from 'vue';
import AuthService from '../services/auth.service.js';
import { jwtDecode } from 'jwt-decode';

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null);
  const isAuthenticated = ref(false);

  const login = async (credentials) => {
    try {
      const response = await AuthService.login(credentials);
      const decodedToken = jwtDecode(response.token);
      user.value = decodedToken.user;
      console.log(user.value);
      isAuthenticated.value = true;
      localStorage.setItem('token', response.token);

    } catch (error) {
      console.error('Login failed', error);
      throw error;
    }
  };

  const logout = () => {
    user.value = null;
    isAuthenticated.value = false;
    localStorage.removeItem('token');
  };

  const checkAuth = async () => {
    try {
      const token = localStorage.getItem('token');
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
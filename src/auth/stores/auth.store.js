// src/auth/stores/auth.store.js
import { defineStore } from 'pinia';
import { ref } from 'vue';
import AuthService from '../services/auth.service.js';
import { jwtDecode } from 'jwt-decode';

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null);
  const isAuthenticated = ref(false);

  const login = async (credentials) => {
    const response = await AuthService.login(credentials);
    const decodedToken = jwtDecode(response.token);
    user.value = decodedToken.user;
    isAuthenticated.value = true;
    localStorage.setItem('token', response.token);
  };

  const logout = () => {
    user.value = null;
    isAuthenticated.value = false;
    localStorage.removeItem('token');
  };

  const checkAuth = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const response = await AuthService.checkAuth(token);
        console.loog(response.user);
        user.value = response.user;
        isAuthenticated.value = true;
      } catch (error) {
        logout();
      }
    }
  };

  return { user, isAuthenticated, login, logout, checkAuth };
});
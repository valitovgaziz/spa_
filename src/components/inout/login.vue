<template>
  <div class="login-form">
    <h1>
      {{ t('messages.inout.login') }}
    </h1>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="email">
          {{ t('messages.inout.email') }}:
        </label>
        <input v-model.trim="email" type="email" id="email" required />
      </div>

      <div class="form-group">
        <label for="password">
          {{ t('messages.inout.password') }}:
        </label>
        <input v-model.trim="password" type="password" id="password" required />
      </div>

      <button type="submit">
        {{ t('messages.inout.login') }}
      </button>
    </form>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n';

export default {
  setup() {
    const { t } = useI18n();
    return { t };
  },
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    handleSubmit() {
      if (!this.isValid(this.email, this.password)) {
        alert("Пожалуйста, заполните все поля корректно.");
        return;
      }

      this.loginUser({
        email: this.email,
        password: this.password
      }).then(() => {
        this.$router.push('/'); // Переход на главную страницу
      }).catch((error) => {
        console.error(error);
        alert('Неверный email или пароль. Попробуйте снова.');
      });
    },
    isValid(email, password) {
      if (email.length === 0 || password.length === 0) {
        return false;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return false;
      }

      if (password.length < 6) {
        return false;
      }

      return true;
    },
    async loginUser(data) {
      console.log("Login by this data: ", data);
      // try {
      //   const response = await fetch('/login', {
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/json'
      //     },
      //     body: JSON.stringify(data)
      //   });

      //   if (!response.ok) {
      //     throw new Error('Неверный email или пароль');
      //   }
      // } catch (error) {
      //   throw error;
      // }
    }
  }
};
</script>

<style scoped>
.login-form {
  padding: 0 2rem 2rem 2rem;
  border: 1px solid #ccc;
  border-radius: 1rem;
  box-shadow: 1px 2px 3px #609f7d;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
}

.form-group input {
  padding: 0.7rem;
  border: none;
  border-radius: 1rem;
  background-color: var(--light-dark-background-color);
  color: var(--text-color);
  box-shadow: 1px 2px 3px #609f7d;
}

button {
  margin-top: 0.7rem;
  padding: 0.7rem 1.7rem;
  background-color: var(--button-dark-background-color);
  color: var(--text-color);
  border: none;
  border-radius: 1rem;
  cursor: pointer;
  box-shadow: 1px 2px 3px #609f7d;
}

button:hover {
  box-shadow: 0 0 6px #609f7d;
}
</style>
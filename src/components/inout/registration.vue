<template>
  <div class="register-form">
    <h3 class="form-name-h3">
      {{ t('messages.inout.registration') }}
    </h3>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="username">
          {{ t('messages.inout.name') }}:
        </label>
        <input v-model.trim="username" type="text" id="username" required />
      </div>

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
        {{ t('messages.inout.registrationB') }}
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
      username: '',
      email: '',
      password: ''
    };
  },
  methods: {
    handleSubmit() {
      if (!this.isValid(this.username, this.email, this.password)) {
        alert("Пожалуйста, заполните все поля корректно.");
        return;
      }

      this.sendRegistrationData({
        username: this.username,
        email: this.email,
        password: this.password
      }).then(() => {
        this.$router.push('/login'); // Переход на страницу логина
      }).catch((error) => {
        console.error(error);
        alert('Что-то пошло не так. Попробуйте еще раз.');
      });
    },
    isValid(username, email, password) {
      if (username.length === 0 || email.length === 0 || password.length === 0) {
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
    async sendRegistrationData(data) {
      console.log("Register by this data: ", data);
      // try {
      //   const response = await fetch('/register', {
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/json'
      //     },
      //     body: JSON.stringify(data)
      //   });

      //   if (!response.ok) {
      //     throw new Error('Ошибка при регистрации');
      //   }
      // } catch (error) {
      //   throw error;
      // }
    }
  }
};
</script>

<style scoped>
.form-name-h3 {
  margin-top: 0;
  padding-top: 0;
  height: 1.5rem;
}
.register-form {
  max-width: fit-content;
  padding: 1rem 2rem 2rem 2rem;
  border-radius: 1rem;
  box-shadow: 1px 2px 5px #609f7d;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
}

.form-group input {
  padding: 0.7rem;
  border-radius: 1rem;
  border: 1px solid #439c5f;
  background-color: var(--light-dark-background-color);
  color: var(--texgt-color);
  box-shadow: 1px 2px 3px #439c5f;
}

button {  
  margin-top: 1rem;
  padding: 0.7rem 1.4rem;
  background-color: var(--button-dark-background-color);
  color: white;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
  box-shadow: 1px 2px 3px #a1c3ab;
  border: 1px solid rgb(124, 171, 156);
}

button:hover {
  box-shadow: 0px 0px 6px rgb(75, 103, 94);
}
</style>
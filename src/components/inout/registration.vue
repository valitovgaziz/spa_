<template>
    <div class="register-form">
      <h1>Регистрация</h1>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="username">Имя пользователя:</label>
          <input v-model.trim="username" type="text" id="username" required />
        </div>
        
        <div class="form-group">
          <label for="email">Email:</label>
          <input v-model.trim="email" type="email" id="email" required />
        </div>
        
        <div class="form-group">
          <label for="password">Пароль:</label>
          <input v-model.trim="password" type="password" id="password" required />
        </div>
        
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
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
  .register-form {
    max-width: 400px;
    margin: 50px auto;
    padding: 2rem;
    border: 1px solid #ccc;
    border-radius: 1rem;
    box-shadow: 1px 2px 3px #609f7d;
  }
  
  .form-group {
    margin-bottom: 1rem;
  }
  
  .form-group label {
    display: block;
    margin-bottom: 1rem;
  }
  
  .form-group input {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: var(--light-dark-background-color);
    color: var(--texgt-color);
    box-shadow: 1px 2px 3px inset #439c5f;
  }
  
  button {
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  </style>
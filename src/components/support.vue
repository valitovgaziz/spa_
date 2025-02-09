<template>
    <div class="support-form">
      <h2>Техническая поддержка</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="email">Ваш email:</label>
          <input
            type="email"
            id="email"
            v-model="formData.email"
            required
            placeholder="Введите ваш email"
          />
        </div>
        <div class="form-group">
          <label for="message">Сообщение:</label>
          <textarea
            id="message"
            v-model="formData.text"
            required
            placeholder="Опишите вашу проблему"
          ></textarea>
        </div>
        <button type="submit" :disabled="isLoading">
          {{ isLoading ? 'Отправка...' : 'Отправить' }}
        </button>
        <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        formData: {
          email: '',
          text: '',
        },
        isLoading: false,
        successMessage: '',
        errorMessage: '',
      };
    },
    methods: {
      async submitForm() {
        this.isLoading = true;
        this.successMessage = '';
        this.errorMessage = '';
  
        try {
          // Отправка данных на API
          console.log(this.formData);
          const response = await axios.post('https://yalarba.ru/api/support/support', this.formData);
  
          if (response.status === 201) {
            this.successMessage = 'Сообщение успешно отправлено!';
            this.formData.email = '';
            this.formData.text = '';
          } else {
            this.errorMessage = 'Произошла ошибка при отправке сообщения.';
          }
        } catch (error) {
          this.errorMessage = 'Произошла ошибка при отправке сообщения.';
        } finally {
          this.isLoading = false;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .support-form {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  input,
  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
  }
  
  textarea {
    resize: vertical;
    min-height: 150px;
  }
  
  button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
  }
  
  button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  
  .success-message {
    color: green;
    text-align: center;
    margin-top: 10px;
  }
  
  .error-message {
    color: red;
    text-align: center;
    margin-top: 10px;
  }
  
  @media (max-width: 600px) {
    .support-form {
      padding: 15px;
    }
  
    input,
    textarea {
      font-size: 14px;
    }
  
    button {
      font-size: 14px;
    }
  }
  </style>
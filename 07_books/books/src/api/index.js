import axios from 'axios';

export default {
  user: {
    login: credentials => axios.post('/api/auth', { credentials }).then(res => res.data.user),
    signup: credentials => axios.post('/api/users', { credentials }).then(res => res.data.user),
    resetPasswordRequest: email => axios.post('/api/auth/reset_password_request', { email }),
    validateToken: token => axios.post('/api/auth/validate_token', { token }),
    resetPassword: data => axios.post('/api/auth/reset_password', { data })
  },
  books: {
    fetchAll: () => axios.get('/api/books').then(res => res.data.books),
    create: book => axios.post('/api/books', { book }).then(res => res.data.book)
  }
};

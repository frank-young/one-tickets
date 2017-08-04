export default {
  isLogin () {
    return localStorage.getItem('jwt-token') !== null
  },
  login (data) {
    localStorage.setItem('first_login', data.first_login)
    localStorage.setItem('jwt-token', data.token)
  },
  logout () {
    localStorage.removeItem('jwt-token')
  }
}

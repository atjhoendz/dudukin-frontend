import Api from '@/services/Api'

export default {
  login () {
    return Api().post('/users/login')
  }
}

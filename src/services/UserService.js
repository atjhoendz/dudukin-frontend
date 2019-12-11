import Api from '@/services/Api'

export default {
  login (param) {
    return Api().post('/api/login', param)
      .then (response)
      .catch (error => {
        return error
      })
  }
}

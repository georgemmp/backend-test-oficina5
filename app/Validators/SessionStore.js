'use strict'

const Antl = use('Antl')

class SessionStore {
  get rules () {
    return {
      email: 'required|email',
      password: 'required'
    }
  }

  get messages () {
    return Antl.list('validation')
  }
}

module.exports = SessionStore

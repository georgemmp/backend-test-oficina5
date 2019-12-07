'use strict'

const Antl = use('Antl')

class CommentStore {
  get rules () {
    return {
      name: 'required',
      email: 'required|email',
      body: 'required'
    }
  }

  get messages () {
    return Antl.list('validation')
  }
}

module.exports = CommentStore

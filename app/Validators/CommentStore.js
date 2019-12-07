'use strict'

class CommentStore {
  get rules () {
    return {
      name: 'required',
      email: 'required|email',
      body: 'required'
    }
  }
}

module.exports = CommentStore

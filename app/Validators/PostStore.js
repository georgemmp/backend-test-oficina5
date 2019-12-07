'use strict'

const Antl = use('Antl')

class PostStore {
  get rules () {
    return {
      title: 'required',
      body: 'required'
    }
  }

  get messages () {
    return Antl.list('validation')
  }
}

module.exports = PostStore

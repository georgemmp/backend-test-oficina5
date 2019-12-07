'use strict'

const Antl = use('Antl')

class AlbumStore {
  get rules () {
    return {
      title: 'required'
    }
  }

  get messages () {
    return Antl.list('validation')
  }
}

module.exports = AlbumStore

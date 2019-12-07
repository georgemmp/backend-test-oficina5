'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Comment extends Model {
  static boot () {
    super.boot()
  }

  post () {
    return this.belongsTo('App/Models/Post')
  }
}

module.exports = Comment

'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Post extends Model {
  static boot () {
    super.boot()
  }

  user () {
    return this.belongsTo('App/Models/User')
  }

  comment () {
    return this.hasMany('App/Models/Comment')
  }
}

module.exports = Post

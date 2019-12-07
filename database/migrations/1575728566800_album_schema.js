'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlbumSchema extends Schema {
  up () {
    this.create('albums', (table) => {
      table.increments()
      table
        .integer('userId')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('title').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('albums')
  }
}

module.exports = AlbumSchema

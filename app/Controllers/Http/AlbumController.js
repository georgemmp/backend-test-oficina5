'use strict'

const Album = use('App/Models/Album')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with albums
 */
class AlbumController {
  /**
   * Show a list of all albums.
   * GET albums
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, params }) {
    const { page } = request.get()
    const albums = await Album.query().where('userId', params.users_id).paginate(page)

    return albums
  }

  /**
   * Create/save a new album.
   * POST albums
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, params }) {
    const data = request.only(['title'])
    const album = await Album.create({ ...data, userId: params.users_id })

    return album
  }

  /**
   * Display a single album.
   * GET albums/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const album = await Album.findOrFail(params.id)

    return album
  }

  /**
   * Update album details.
   * PUT or PATCH albums/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request }) {
    const album = await Album.findOrFail(params.id)
    const data = request.only(['title'])

    album.merge(data)
    await album.save()

    return album
  }

  /**
   * Delete a album with id.
   * DELETE albums/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params }) {
    const album = await Album.findOrFail(params.id)

    await album.delete()
  }
}

module.exports = AlbumController

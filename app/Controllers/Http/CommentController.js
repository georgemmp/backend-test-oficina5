'use strict'

const Comment = use('App/Models/Comment')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with comments
 */
class CommentController {
  /**
   * Show a list of all comments.
   * GET comments
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, params }) {
    const { page } = request.get()
    const comments = await Comment.query().where('postId', params.posts_id).paginate(page)

    return comments
  }

  /**
   * Create/save a new comment.
   * POST comments
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, params }) {
    const data = request.only(['name', 'email', 'body'])
    const comment = await Comment.create({ ...data, postId: params.posts_id })

    return comment
  }

  /**
   * Display a single comment.
   * GET comments/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params }) {
    const comment = await Comment.findOrFail(params.id)

    return comment
  }

  /**
   * Update comment details.
   * PUT or PATCH comments/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request }) {
    const comment = await Comment.findOrFail(params.id)
    const data = request.only(['name', 'email', 'body'])

    comment.merge(data)
    await comment.save()

    return comment
  }

  /**
   * Delete a comment with id.
   * DELETE comments/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const comment = await Comment.findOrFail(params.id)
    await comment.delete()
  }
}

module.exports = CommentController

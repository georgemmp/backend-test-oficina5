'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('users', 'UserController.store').validator('UserStore')
Route.post('session', 'SessionController.store').validator('SessionStore')

Route.group(() => {
  Route.resource('posts', 'PostController')
    .apiOnly()
    .validator(new Map([[['posts.store'], ['PostStore']]]))
  Route.resource('posts.comments', 'CommentController')
    .apiOnly()
    .validator(new Map(
      [
        [
          ['posts.store'], ['PostStore']
        ],
        [
          ['posts.comments.store'], ['CommentStore']
        ]
      ]
    ))
  Route.resource('users.albums', 'AlbumController')
    .apiOnly()
    .validator(new Map([[['users.albums.store'], ['AlbumStore']]]))
}).middleware(['auth'])

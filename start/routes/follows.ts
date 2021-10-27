import Route from '@ioc:Adonis/Core/Route';

Route.post('/follow', 'Follows/Follow.store').middleware('auth');
Route.post('/unfollow', 'Follows/Unfollow.store').middleware('auth');

Route.get('/following', 'Follows/Following.index').middleware('auth');

Route.group(() => {
    Route.get('/', 'Follows/Follower.index');
    Route.delete('/:id', 'Follows/Follower.destroy');
})
    .prefix('followers')
    .middleware('auth');

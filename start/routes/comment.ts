import Route from '@ioc:Adonis/Core/Route';

Route.group(() => {
    Route.post('/', 'Comment/Main.store');
    Route.put('/:id', 'Comment/Main.update');
    Route.delete('/:id', 'Comment/Main.destroy');
})
    .prefix('comments')
    .middleware('auth');

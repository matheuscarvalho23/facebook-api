import Route from '@ioc:Adonis/Core/Route';

Route.group(() => {
    Route.post('/', 'Comments/Main.store');
    Route.put('/:id', 'Comments/Main.update');
    Route.delete('/:id', 'Comments/Main.destroy');
})
    .prefix('comments')
    .middleware('auth');

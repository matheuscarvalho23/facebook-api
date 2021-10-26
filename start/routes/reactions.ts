import Route from '@ioc:Adonis/Core/Route';

Route.group(() => {
    Route.put('/', 'Reactions/Main.update');
    Route.delete('/:id', 'Reactions/Main.destroy');
})
    .prefix('reactions')
    .middleware('auth');

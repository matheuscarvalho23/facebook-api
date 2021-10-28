import Route from '@ioc:Adonis/Core/Route';

Route.group(() => {
    Route.get('/', 'Conversations/Main.index');
    Route.get('/:id', 'Conversations/Main.show');
})
    .prefix('conversations')
    .middleware('auth');

import Route from '@ioc:Adonis/Core/Route';

Route.group(() => {
    Route.get('/', 'Users/Main.show').middleware('auth');
    Route.put('/', 'Users/Main.update').middleware('auth');

    Route.group(() => {
        Route.post('/', 'Users/Register.store');
        Route.get('/:key', 'Users/Register.show');
        Route.put('/', 'Users/Register.update');
    }).prefix('/register');

    Route.group(() => {
        Route.post('/', 'Users/ForgotPassword.store');
        Route.get('/:key', 'Users/ForgotPassword.show');
        Route.put('/', 'Users/ForgotPassword.update');
    }).prefix('/forgot-password');
}).prefix('/users');

import Route from '@ioc:Adonis/Core/Route';
import './auth';
import './users';
import './uploads';
import './posts';
import './comment';
import './reactions';
import './follows';
import './profiles';
import './messages';
import './conversations';

Route.get('/', async () => {
    return { hello: 'world' };
});

Route.on('/chat').render('chat');

Route.get('/user-register', async ({ view }) => {
    return view.render('emails/register');
});

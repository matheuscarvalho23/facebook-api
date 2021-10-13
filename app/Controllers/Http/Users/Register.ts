import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import { StoreValidator } from 'App/Validators/User/Register';
import { User } from 'App/Models';
import faker from 'faker';
import Mail from '@ioc:Adonis/Addons/Mail';

export default class UserRegisterController {
    public async store({ request }: HttpContextContract) {
        const { email, redirectUrl } = await request.validate(StoreValidator);
        const user = await User.create({ email });

        await user.save();

        const key = faker.datatype.uuid() + user.id;

        user.related('keys').create({ key });

        const link = `${redirectUrl.replace(/\/$/, '')}/${key}`;

        await Mail.send((message) => {
            message.to(email);
            message.from('contato@face.com', 'Facebook');
            message.subject('Criação da conta');
            message.htmlView('emails/register', { link });
        });
    }

    public async show({}: HttpContextContract) {}

    public async update({}: HttpContextContract) {}
}

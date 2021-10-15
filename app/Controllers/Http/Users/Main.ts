import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import { UpdateValidator } from 'App/Validators/User/Main';
import { User } from 'App/Models';

export default class UsersController {
    public async index({ request }: HttpContextContract) {
        let user = User.all();
        const { keyword } = request.all();

        if (keyword) {
            const search = await User.query()
                .where('name', 'LIKE', `%${keyword}%`)
                .orWhere('username', 'LIKE', `%${keyword}%`);

            return search;
        }

        return user;
    }

    public async show({ auth }: HttpContextContract) {
        const user = auth.user!;

        await user.load('avatar');

        return user;
    }

    public async update({ request, auth }: HttpContextContract) {
        const data = await request.validate(UpdateValidator);
        const user = auth.user!;

        user.merge(data);

        await user.save();

        return user;
    }
}

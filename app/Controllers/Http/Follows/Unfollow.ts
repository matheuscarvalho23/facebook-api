import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import { User } from 'App/Models';
import { StoreValidator } from 'App/Validators/Follows/Main';

export default class UnfollowsController {
    public async store({ request, auth }: HttpContextContract) {
        const { followingId } = await request.validate(StoreValidator);

        const user = await User.findOrFail(followingId);

        await user.related('followers').detach([auth.user!.id]);
    }
}

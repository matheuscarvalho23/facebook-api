import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import { Comment, Post } from 'App/Models';
import { StoreValidator, UpdateValidator } from 'App/Validators/Comment/Main';

export default class CommentsController {
    public async store({ request, auth }: HttpContextContract) {
        const { content, postId } = await request.validate(StoreValidator);

        const post = await Post.findOrFail(postId);

        const comment = await post.related('comments').create({
            content,
            userId: auth.user!.id,
        });

        return comment;
    }

    public async update({ request, auth, params, response }: HttpContextContract) {
        const { content } = await request.validate(UpdateValidator);
        const comment = await Comment.findOrFail(params.id);

        if (auth.user!.id !== comment.userId) return response.unauthorized();

        await comment.merge({ content }).save();

        return comment;
    }

    public async destroy({ response, params, auth }: HttpContextContract) {
        const comment = await Comment.findOrFail(params.id);

        if (auth.user!.id !== comment.userId) return response.unauthorized();

        await comment.delete();
    }
}

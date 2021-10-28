import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import { Conversation } from 'App/Models';

export default class ConversationsController {
    public async index({ auth }: HttpContextContract) {
        const user = auth.user!;

        const conversations = await Conversation.query()
            .where({ user_id_one: user.id })
            .orWhere({ user_id_two: user.id })
            .preload('user_id_one', (query) => {
                query.whereNot('id', user.id);
                query.preload('avatar');
            })
            .preload('user_id_two', (query) => {
                query.whereNot('id', user.id);
                query.preload('avatar');
            });

        const newArray = conversations.map((conversation) => {
            const conversationInJSON = conversation.toJSON();

            conversationInJSON.user = conversation.user_id_one || conversation.user_id_two;

            delete conversationInJSON['user_id_one'];
            delete conversationInJSON['user_id_two'];

            return conversationInJSON;
        });

        return newArray;
    }

    public async show({ response, auth, params }: HttpContextContract) {
        const conversation = await Conversation.findOrFail(params.id);

        const verifyConversation = [conversation.userIdOne, conversation.userIdTwo];

        if (!verifyConversation.includes(auth.user!.id)) return response.unauthorized();

        await conversation.load('messages');

        return conversation;
    }
}

import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm';
import { ReactionTypes } from 'App/Utils';
import { Post, User } from 'App/Models';

export default class Reaction extends BaseModel {
    @column({ isPrimary: true })
    public id: number;

    @column()
    public type: ReactionTypes;

    @column()
    public userId: number;

    @column()
    public postId: number;

    //* Relacionamentos
    @belongsTo(() => User)
    public user: BelongsTo<typeof User>;

    @belongsTo(() => Post)
    public post: BelongsTo<typeof Post>;
}

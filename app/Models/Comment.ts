import { DateTime } from 'luxon';
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm';
import { User, Post } from 'App/Models';

export default class Comment extends BaseModel {
    @column({ isPrimary: true })
    public id: number;

    @column()
    public content: string;

    @column({ serializeAs: null })
    public userId: number;

    @column({ serializeAs: null })
    public postId: number;

    @belongsTo(() => User)
    public user: BelongsTo<typeof User>;

    @belongsTo(() => Post)
    public post: BelongsTo<typeof Post>;

    @column.dateTime({ autoCreate: true })
    public createdAt: DateTime;

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    public updatedAt: DateTime;
}

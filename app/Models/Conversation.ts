import { BaseModel, column, HasMany, hasMany, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import { Message, User } from 'App/Models';

export default class Conversation extends BaseModel {
    @column({ isPrimary: true })
    public id: number;

    @column()
    public userIdOne: number;

    @column()
    public userIdTwo: number;

    @hasMany(() => Message)
    public messages: HasMany<typeof Message>;

    @belongsTo(() => User, {
        foreignKey: 'userIdOne',
    })
    public user_id_one: BelongsTo<typeof User>;

    @belongsTo(() => User, {
        foreignKey: 'userIdTwo',
    })
    public user_id_two: BelongsTo<typeof User>;
}

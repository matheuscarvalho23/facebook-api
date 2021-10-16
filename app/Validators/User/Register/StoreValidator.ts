import { schema, rules } from '@ioc:Adonis/Core/Validator';
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

export default class StoreValidator {
    constructor(protected ctx: HttpContextContract) {}

    public schema = schema.create({
        email: schema.string({ trim: true }, [
            rules.email(),
            rules.unique({ table: 'users', column: 'email' }),
        ]),
        redirectUrl: schema.string({ trim: true }),
    });

    public cacheKey = this.ctx.routeKey;

    public messages = {};
}

// realmSchemas.js
import Realm from 'realm';

class UserSchema extends Realm.Object { }
UserSchema.schema = {
    name: 'User',
    primaryKey: 'email',
    properties: {
        email: 'string',
        name: 'string?',
        phone: 'string?',
        address: 'string?',
    },
};

export default new Realm({ schema: [UserSchema] });

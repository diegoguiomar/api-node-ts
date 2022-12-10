import { v4 as uuidV4 } from 'uuid';

class Category {
    static find() {
        throw new Error('Method not implemented.');
    }
    id?: String;
    name: String;
    description: String;
    created_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuidV4();
        }
    }
}

export { Category };
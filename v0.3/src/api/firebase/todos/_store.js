import MobxFirebaseStore from 'mobx-firebase-store';
import {db} from './../';

// key to define subscription for nesting
const allKey = 'allTodos';
class store extends MobxFirebaseStore {
    constructor() {
        super(db.ref());
    }

    all() {
        return this.getData(allKey);
    }

    allSubs() {
        return [{
            subKey: allKey,
            asList: true,
            path: `todos`,
        }];
    }
}

// export with new keyword to fire initialisation on import
export default new store();
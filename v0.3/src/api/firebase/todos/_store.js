import MobxFirebaseStore from 'mobx-firebase-store';
import {db} from './../';

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

export default new store();
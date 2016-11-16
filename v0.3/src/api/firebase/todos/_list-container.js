import React, { Component } from 'react';
import {observer} from 'mobx-react';
import {autoSubscriber} from 'firebase-nest';
import {todosStore} from './';

export default function (WrappedComponent) {
    return autoSubscriber(observer(class extends Component {
        static getSubs(props, state) {
            return todosStore.allSubs();
        }

        static subscribeSubs(subs, props, state) {
            return todosStore.subscribeSubs(subs);
        }

        render() {
            const data = todosStore.all();

            const container = Object.assign(
                {},
                this.props.container,
                { list:{ data } },
            );
            return <WrappedComponent {...this.props} container={container} />;
        }
    }))
}
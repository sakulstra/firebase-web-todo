import React, { Component } from 'react';
import {observer} from 'mobx-react';
import {autoSubscriber} from 'firebase-nest';
import {todosStore} from './';

export default function (WrappedComponent) {
    return autoSubscriber(observer(class extends Component {
        // define needed subscriptions
        static getSubs(props, state) {
            return todosStore.allSubs();
        }

        // subscribe to the subscriptions
        static subscribeSubs(subs, props, state) {
            return todosStore.subscribeSubs(subs);
        }

        render() {
            // get the data
            const data = todosStore.all();
            const container = Object.assign(
                {},
                this.props.container,
                { list:{ data } },
            );
            // pass the data down as prop
            return <WrappedComponent {...this.props} container={container} />;
        }
    }))
}
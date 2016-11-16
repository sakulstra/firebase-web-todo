### Purpose
Firebase on web can be confusing at the beginning as there are not that much resources out there as e.g. for meteor.
Anyways, firebase is a awesome platform to begin your programming experiments, it has even a free tier - so give it a try.
With this little tutorial/example repo I/We want to lower the burden to get started with firebase.
And no, this won't be a simple copy paste this tree files and now you have an app which works, but you could never deploy because it's actually a shitty project.

My goal here is to start from zero to a small/eventually useless app which includes all the parts you actually need to create a real app!

### Used packages

#### Mobx-firebase-store
This package works as middleware between firebase and our react app. It will basically listen to firebase value events and update our global mobx store.
https://github.com/nyura123/mobx-firebase-store

#### firebase-nest
Firebase nest manages subscriptions for us. We can subscribe and unsubscribe with keys and nest manages the subscription tree.
https://github.com/nyura123/firebase-nest

### Steps

#### V0.1
Here we just created the project, added storybook

#### V0.2
Added a minimal ui and routing.

#### V0.3
Start integrating firebase

### Contributions
Feel free to contribute.
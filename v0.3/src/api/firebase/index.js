import firebase from 'firebase';
const config = {
    apiKey: "AIzaSyCzQ3KJfmFpeWbeJm4v4pcFyEI8MMOAW-0",
    authDomain: "react-todos-474bc.firebaseapp.com",
    databaseURL: "https://react-todos-474bc.firebaseio.com",
    storageBucket: "react-todos-474bc.appspot.com",
    messagingSenderId: "806317374387"
};
const app = firebase.initializeApp(config);
// export all needed firebase functionality here to avoid double initialization
export default app;
export const db = app.database();
export const auth = app.auth();
export const storage = app.storage();

// add some initial data - remove this in a later step
db.ref('todos').set({});
db.ref('todos').push({text: 'dummy todo text 1'});
db.ref('todos').push({text: 'dummy todo text 2'});
db.ref('todos').push({text: 'dummy todo text 3'});
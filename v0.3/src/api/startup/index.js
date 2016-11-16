import firebase from 'firebase';
const config = {
    apiKey: "AIzaSyCzQ3KJfmFpeWbeJm4v4pcFyEI8MMOAW-0",
    authDomain: "react-todos-474bc.firebaseapp.com",
    databaseURL: "https://react-todos-474bc.firebaseio.com",
    storageBucket: "react-todos-474bc.appspot.com",
    messagingSenderId: "806317374387"
};
firebase.initializeApp(config);

const db = firebase.database();
db.ref('todos').set({});
db.ref('todos').push({text: 'dummy todo text 1'});
db.ref('todos').push({text: 'dummy todo text 2'});
db.ref('todos').push({text: 'dummy todo text 3'});
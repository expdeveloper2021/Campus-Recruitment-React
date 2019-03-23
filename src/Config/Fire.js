import * as firebase from 'firebase'

var config = {
    apiKey: "AIzaSyAciAB5wQxH4QrCIE74Z66EzHLp2I5Px6c",
    authDomain: "reactsystem-campus.firebaseapp.com",
    databaseURL: "https://reactsystem-campus.firebaseio.com",
    projectId: "reactsystem-campus",
    storageBucket: "reactsystem-campus.appspot.com",
    messagingSenderId: "539004223383"
};
firebase.initializeApp(config);

export default firebase;
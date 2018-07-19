import Rebase from 're-base';
import firebase from 'firebase';

// setting up firebase
const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyDe_uJHXzeEb6Zzn81varwLO0zWp9PcL3Q",
        authDomain: "catch-of-the-day-krissy-conant.firebaseapp.com",
        databaseURL: "https://catch-of-the-day-krissy-conant.firebaseio.com",
});

// rebase bindings
const base = Rebase.createClass(firebaseApp.database());

// named export
export { firebaseApp };
export default base;
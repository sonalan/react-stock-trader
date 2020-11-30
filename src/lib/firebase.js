import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBTQBILwFXFWT9Y_u1y86peExOhFA4zpys",
    authDomain: "react-stock-trader.firebaseapp.com",
    databaseURL: "https://react-stock-trader.firebaseio.com",
    projectId: "react-stock-trader",
    storageBucket: "react-stock-trader.appspot.com",
    messagingSenderId: "915246629084",
    appId: "1:915246629084:web:9ccbcc13a1b8bcc52ab419"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };

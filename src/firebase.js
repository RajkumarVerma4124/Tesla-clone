import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBXQEu8iGeR9JgDtB0N1z9uWqhivmtQvzI",
    authDomain: "tesla-futurecar.firebaseapp.com",
    projectId: "tesla-futurecar",
    storageBucket: "tesla-futurecar.appspot.com",
    messagingSenderId: "237224482405",
    appId: "1:237224482405:web:bca3f5ae45d3218f2e588c",
    measurementId: "G-BC4B40WGV1"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebaseApp.auth()

export { auth }
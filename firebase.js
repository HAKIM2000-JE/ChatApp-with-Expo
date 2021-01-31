import * as firebase from "firebase"

import "firebase/firestore"
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyC73Mta317LABGTKr4OnORpo2H0Cqpi3A8",
    authDomain: "chatapp-152da.firebaseapp.com",
    projectId: "chatapp-152da",
    storageBucket: "chatapp-152da.appspot.com",
    messagingSenderId: "490645053557",
    appId: "1:490645053557:web:cf3328571ce8349da8d83c"
};

let app

if (firebase.apps.length===0){
    app = firebase.initializeApp(firebaseConfig)
}else{
    app = firebase.app()
}

const db = app.firestore();
const auth = firebase.auth()
export {db , auth}
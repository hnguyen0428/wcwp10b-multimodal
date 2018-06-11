const firebase = require('firebase');

var config = {
    apiKey: "AIzaSyB6BsAMfOP08Y0gtRvaynkBwMrEcVakyME",
    authDomain: "wcwp10b-multimodal.firebaseapp.com",
    databaseURL: "https://wcwp10b-multimodal.firebaseio.com",
    projectId: "wcwp10b-multimodal",
    storageBucket: "wcwp10b-multimodal.appspot.com",
    messagingSenderId: "857662606297"
};

firebase.initializeApp(config);

export const database = firebase.database();
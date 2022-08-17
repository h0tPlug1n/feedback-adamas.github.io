import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js"
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-analytics.js"
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js"

const firebaseConfig = {
    apiKey: "AIzaSyBKHPoGUv_54hgwx_fwlK93AUlCMWaapak",
    authDomain: "test-5052d.firebaseapp.com",
    projectId: "test-5052d",
    storageBucket: "test-5052d.appspot.com",
    messagingSenderId: "430790125728",
    appId: "1:430790125728:web:8fad7323b3a31d46a281c5",
    measurementId: "G-X6K1E66XQR",
    databaseURL: "https://test-5052d-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
const form  = document.getElementById("main-form");



function submitForm() {
    //      vDB        vLocation
    set(ref(database, "/"), {}) // < Data in JSON
    .then(() => {})
    .catch(e => {});
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(event)
});

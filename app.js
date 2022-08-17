import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js"
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-analytics.js"
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js"

const firebaseConfig = {
    apiKey: "AIzaSyAplxk3WBKH3_q_8vdhSKNTQ2z3QxSNhZU",
    authDomain: "forceps-f2531.firebaseapp.com",
    projectId: "forceps-f2531",
    storageBucket: "forceps-f2531.appspot.com",
    messagingSenderId: "1019880604118",
    appId: "1:1019880604118:web:42016b81763b426a032477",
    measurementId: "G-FSM7GXCT09",
    databaseURL: "https://forceps-f2531-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
const form  = document.getElementById("main-form");

const program = form.elements['prog']
const studentName = form.elements['stu-name']
const studentEmail = form.elements['stu-email']
const studentExp = form.elements['stu-exp']
const studentCourse = form.elements['stu-course']
const studentProgRating = form.elements['stu-rate']

function submitForm() {
    set(ref(database, "forceps/"+program.value+"/"), {
        name: studentName.value,
        email: studentEmail.value,
        experience: studentExp.value,
        course: studentCourse.value,
        rating: studentProgRating.value,
    })
    .then(() => {console.log("success")})
    .catch(e => {console.log(e)});
}

form.addEventListener('submit', (event) => {
    event.preventDefault()
    submitForm()
});

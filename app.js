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

const feedbackForm  = document.getElementById("main-form");
const start = 1030;
const end = 1700;
const currTime = new Date().getHours() + String(new Date().getMinutes());

if (start < currTime && currTime < end) {
    console.log(true);
    for (let i = 0; i < feedbackForm.elements.length; i++) {
        if (feedbackForm.elements[i].name == 'prog') continue;
        feedbackForm.elements[i].disabled = false;
    }
}


const program = feedbackForm.elements['prog']
const studentName = feedbackForm.elements['stu-name']
const studentEmail = feedbackForm.elements['stu-email']
const studentExp = feedbackForm.elements['stu-exp']
const studentCourse = feedbackForm.elements['stu-course']
const studentProgRating = feedbackForm.elements['stu-rate']

function submitFeedbackForm() {
    set(ref(database, "forceps2022/" + program.value + "/"), {
        submitTime: new Date().toString(),
        name: studentName.value,
        email: studentEmail.value,
        experience: studentExp.value,
        course: studentCourse.value,
        rating: studentProgRating.value,
    })
    .then(() => {console.log("success")})
    .catch(e => {console.error(e)});
}

feedbackForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // submitFeedbackForm();
    displayFormSuccess();
});

const feedbackFormMsg = document.getElementById("form-message")
function displayFormSuccess() {
    studentName.value = '';
    studentEmail.value = '';
    studentExp.value = '';
    studentCourse.value = '';
    studentProgRating.value = '';
    
    feedbackFormMsg.classList.add("success");
    feedbackFormMsg.getElementsByTagName('SPAN')[0].innerText = "Success";
    feedbackFormMsg.getElementsByTagName('SPAN')[1].innerText = "Feedback Received";
}

function displayFormFailed() {
    feedbackFormMsg.classList.add("failed");
    feedbackFormMsg.getElementsByTagName('SPAN')[0].innerText = "Failed";
    feedbackFormMsg.getElementsByTagName('SPAN')[1].innerText = "Please Try Again";
}

const clubForm = document.getElementById("club-form");

function submitClubForm() {
    set(ref(database, "forceps2022/" + + "/"), {

    })
    .then(() => {console.log("success")})
    .catch(e => {console.error(e)});
}

clubForm.addEventListener('submit', (event) => {
    event.preventDefault();
})

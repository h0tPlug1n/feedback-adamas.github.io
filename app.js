import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js"
import { getDatabase, set, ref, get, child } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js"

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
const database = getDatabase(app);

const feedbackForm  = document.getElementById("main-form");

const program = feedbackForm.elements['prog'];
const studentProgQuality = feedbackForm.elements['stu-quality'];
const studentProgExpectations = feedbackForm.elements['stu-expect'];
const studentProgRating = feedbackForm.elements['stu-rate'];
const studentComment = feedbackForm.elements['stu-cmnt'];
const studentSection = feedbackForm.elements['stu-sec'];
const programDay = feedbackForm.elements['prog-day'];

function submitFeedbackForm() {
    set(ref(database, `forceps2023/` + program.value + "/" + Math.random()*Math.random()*10**20 + "/"), {
        submitTime: new Date().toString(),
        quality: studentProgQuality.value,
        epxectations: studentProgExpectations.value,
        rating: studentProgRating.value,
        comment: studentComment.value,
    })
    .then(() => {console.log("success");displayFormSuccess();})
    .catch(e => {console.error(e);displayFormFailed();});
}

feedbackForm.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log({
        submitTime: new Date().toString(),
        quality: studentProgQuality.value,
        epxectations: studentProgExpectations.value,
        rating: studentProgRating.value,
        comment: studentComment.value,
        programDay: programDay.value,
        section: studentSection.value,
    });

    // submitFeedbackForm();
});

const feedbackFormMsg = document.getElementById("form-message")
function displayFormSuccess() {
    studentProgExpectations .forEach(element => element.checked = false);
    studentProgQuality      .forEach(element => element.checked = false);
    studentProgRating       .forEach(element => element.checked = false);
    
    feedbackFormMsg.classList.add("success");
    feedbackFormMsg.getElementsByTagName('SPAN')[0].innerText = "Feedback Received: ";
    feedbackFormMsg.getElementsByTagName('SPAN')[1].innerText = String(program.value);
}

function displayFormFailed() {
    feedbackFormMsg.classList.add("failed");
    feedbackFormMsg.getElementsByTagName('SPAN')[0].innerText = "Failed";
    feedbackFormMsg.getElementsByTagName('SPAN')[1].innerText = "Please Try Again";
}

const clubForm = document.getElementById("club-form");

const clubStuName = clubForm.elements['stu-name'];
const clubStuEmail = clubForm.elements['stu-email'];
const clubStuCourse = clubForm.elements['stu-course'];
const clubChoice_1 = clubForm.elements['club-1'];
const clubChocie_2 = clubForm.elements['club-2'];

function submitClubForm() {
    set(ref(database, "forceps2022/Club Selection/"  + Math.random()*10**20), {
        name: clubStuName.value,
        email: clubStuEmail.value,
        course: clubStuCourse.value,
        choice1: clubChoice_1.value,
        choice2: clubChocie_2.value,
    })
    .then(() => {console.log("success"); clubFormSubmitSuccess();})
    .catch(e => {console.error(e); clubFormSubmitFailed();});
}

clubForm.addEventListener('submit', (event) => {
    event.preventDefault();
    submitClubForm();
})

const clubFormMsg = document.getElementById("club-form-message")
function clubFormSubmitSuccess() {
    clubStuName.value = '';
    clubStuEmail.value = '';
    clubStuCourse.value = '';
    clubChoice_1.value = '';
    clubChocie_2.value = '';

    clubFormMsg.classList.add("success");
    clubFormMsg.getElementsByTagName('SPAN')[0].innerText = "Success";
    clubFormMsg.getElementsByTagName('SPAN')[1].innerText = "Club Choice Received";
}

function clubFormSubmitFailed() {
    clubFormMsg.classList.add("failed");
    clubFormMsg.getElementsByTagName('SPAN')[0].innerText = "Failed";
    clubFormMsg.getElementsByTagName('SPAN')[1].innerText = "Please Try Again";
}

function getProgramData() {
    get(child(ref(database), "forceps2022/"))
    .then((snapshot) => {
        console.log(snapshot.val());
      }).catch((error) => {
        console.error(error);
      });      
}

// getProgramData();

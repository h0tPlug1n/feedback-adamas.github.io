// REQUIRED VARIABLES
const programs = document.getElementById("programs");
const notifications = programs.querySelectorAll(".notification");
const now = new Date();

const sectionSelector = document.getElementById("select-section");
const daySelector = document.getElementById("select-date")

function showSchedule() {
    const section = sectionSelector.value;
    const day = daySelector.value;
    for (let i = 0; i < programs.children.length; i++) {
        const program = programs.children[i];

        const programSection = program.getAttribute("sec");
        const programDay = program.getAttribute("day");

        if (section == programSection && day == programDay) {
            program.classList.add("selected-section");
        } else {
            program.classList.remove("selected-section");
        }
    }
    // Adding code to display "notification" correctly
    for  (let i = 0; i < notifications.length; i++) {
        const notification = notifications[i];
        const notificationSection = notification.getAttribute("sec");
    
        if (section == notificationSection) {
            notification.classList.add("selected-section");
        } else {
            notification.classList.remove("selected-section");
        }

        console.log(notification);
    }
}

//=================================================================//
// New
// Getting Section Selection
// let currentSection = '';
// function setCurrentSection(section) {
//     // console.log(`current section : ${section}`);
//     currentSection = section;
    
//     for (let i = 0; i < programs.children.length; i++) {
//         const section = programs.children[i].getAttribute("sec");
//         if (currentSection == section)
//             programs.children[i].classList.add("selected-section");
//         else
//             programs.children[i].classList.remove("selected-section");
//         console.log(section, programs.children[i]);
//     }
// }
//=================================================================//
// OLD
// Disabled for now

// let i = 0;
// for (; i < programs.children.length; i++) {
//     const hours = programs.children[i].getAttribute("hours");
//     const minutes = programs.children[i].getAttribute("minutes");
//     if (Number(hours) < now.getHours()) {
//         programs.children[i].classList.add("disabled");
//     } else if (Number(hours) == now.getHours() && Number(minutes) < now.getMinutes()) {
//         programs.children[i].classList.add("disabled");
//     } else {
//         break;
//     }
// }
// programs.children[i-1].classList.remove("disabled");
// programs.children[i-1].classList.add("current");
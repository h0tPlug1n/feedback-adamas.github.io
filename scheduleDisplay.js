// Getting Section Selection
let currentSection = '';
function setCurrentSection(section) {
    // console.log(`current section : ${section}`);
    currentSection = section;
    
    for (let i = 0; i < programs.children.length; i++) {
        const section = programs.children[i].getAttribute("sec");
        if (currentSection == section)
            programs.children[i].classList.add("selected-section");
        else
            programs.children[i].classList.remove("selected-section");
        console.log(section, programs.children[i]);
    }
}


const programs = document.getElementById("programs");
const now = new Date();

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

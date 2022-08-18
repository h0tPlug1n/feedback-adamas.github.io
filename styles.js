const programsButton = document.getElementById("btn-programs");
const clubsButton = document.getElementById("btn-clubs");

const programSection = document.getElementById("schedule-details");
const feedbackForm = document.getElementById("feedback-details");
const clubsSection = document.getElementById("club-details");
const clubFrom = document.getElementById("club-selection-form");

programsButton.addEventListener('click', event => {
    event.preventDefault();

    feedbackForm.style.display = programSection.style.display ="flex";
    clubsSection.style.display = clubFrom.style.display = "none";
    
    programsButton.classList.add("selected")
    clubsButton.classList.remove("selected");
})

clubsButton.addEventListener('click', event => {
    event.preventDefault();

    feedbackForm.style.display = programSection.style.display ="none";
    clubsSection.style.display = clubFrom.style.display = "flex";

    programsButton.classList.remove("selected");
    clubsButton.classList.add("selected");
})

programsButton.classList.toggle("selected");
clubsSection.style.display = clubFrom.style.display = "none";
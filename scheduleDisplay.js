const programs = document.getElementById("programs");
const now = new Date();

let i = 0;
for (; i < programs.children.length; i++) {
    const hours = programs.children[i].getAttribute("hours");
    const minutes = programs.children[i].getAttribute("minutes");
    if (Number(hours) < now.getHours()) {
        programs.children[i].classList.add("disabled");
    } else if (Number(hours) == now.getHours() && Number(minutes) < now.getMinutes()) {
        programs.children[i].classList.add("disabled");
    } else {
        break;
    }
}
programs.children[i-1].classList.remove("disabled");
programs.children[i-1].classList.add("current");
// Form input
try {
    document.querySelector("input#prog").setAttribute("value", programs.children[i-1].children[1].innerText)
} catch (e) {
    document.querySelector("input#prog").setAttribute("value", "")
}

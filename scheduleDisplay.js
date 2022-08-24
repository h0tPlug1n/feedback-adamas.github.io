const secCommon = document.querySelectorAll(".common");
const secA = document.querySelectorAll(".sec-a");
const secB = document.querySelectorAll(".sec-b");
const secC = document.querySelectorAll(".sec-c");
const secD = document.querySelectorAll(".sec-d");
const secE = document.querySelectorAll(".sec-e");
const now = new Date();

function disableCurrentSelector(elements) {
    let i = 0;
    for (;i < elements.length; i++) {
        const hours = Number(elements[i].getAttribute("hours"));
        const minutes = Number(elements[i].getAttribute("minutes"));        
        if (hours < now.getHours()) { elements[i].classList.add("disabled"); }
        else if (hours == now.getHours() && minutes < now.getMinutes()) { elements[i].classList.add("disabled"); }
        else { break; }
    }
    elements[i-1].classList.remove("disabled");
    elements[i-1].classList.add("current");
}

disableCurrentSelector(secCommon);
disableCurrentSelector(secA);
disableCurrentSelector(secB);
disableCurrentSelector(secC);
disableCurrentSelector(secD);
disableCurrentSelector(secE);
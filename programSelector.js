const buttons = document.querySelectorAll(".program-selector > .buttons > button");

secA.forEach(element => element.classList.remove("d-none"));
secB.forEach(element => element.classList.add("d-none"));
secC.forEach(element => element.classList.add("d-none"));
secD.forEach(element => element.classList.add("d-none"));
secE.forEach(element => element.classList.add("d-none"));

buttons.forEach(button => {
    button.addEventListener('click', event => {
        event.preventDefault()
        switch (button.value) {
            case 'A':
                secA.forEach(element => element.classList.remove("d-none"));
                secB.forEach(element => element.classList.add("d-none"));
                secC.forEach(element => element.classList.add("d-none"));
                secD.forEach(element => element.classList.add("d-none"));
                secE.forEach(element => element.classList.add("d-none"));
                break;

            case 'B':
                secA.forEach(element => element.classList.add("d-none"));
                secB.forEach(element => element.classList.remove("d-none"));
                secC.forEach(element => element.classList.add("d-none"));
                secD.forEach(element => element.classList.add("d-none"));
                secE.forEach(element => element.classList.add("d-none"));
                break;

            case 'C':
                secA.forEach(element => element.classList.add("d-none"));
                secB.forEach(element => element.classList.add("d-none"));
                secC.forEach(element => element.classList.remove("d-none"));
                secD.forEach(element => element.classList.add("d-none"));
                secE.forEach(element => element.classList.add("d-none"));
                break;

            case 'D':
                secA.forEach(element => element.classList.add("d-none"));
                secB.forEach(element => element.classList.add("d-none"));
                secC.forEach(element => element.classList.add("d-none"));
                secD.forEach(element => element.classList.remove("d-none"));
                secE.forEach(element => element.classList.add("d-none"));
                break;

            case 'E':
                secA.forEach(element => element.classList.add("d-none"));
                secB.forEach(element => element.classList.add("d-none"));
                secC.forEach(element => element.classList.add("d-none"));
                secD.forEach(element => element.classList.add("d-none"));
                secE.forEach(element => element.classList.remove("d-none"));
                break;
            default:
                break;
        }
        buttons.forEach(btn => {
            if (btn == button) { btn.classList.add("selected"); }
            else { btn.classList.remove("selected"); }
        })
    })
})
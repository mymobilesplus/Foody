//  CONTROLL CLICK ON CARDS NAVEGATION
const recipesCards = document.querySelectorAll('.card');

for(let index = 0; recipesCards.length > index; index++) {
    recipesCards[index].onclick = function() {
        window.location.href = `/recipes/${index}`
    };
};

// CONTROLL BUTTON HIDE AND SHOW //
const hide = document.querySelectorAll('.hide');
const info = document.querySelectorAll('.info');

for(let i = 0; hide.length > i; i++) {
    hide[i].addEventListener("click", function() {
        if(hide[i].textContent == "ESCONDER") {
            hide[i].textContent = "MOSTRAR";
            info[i].classList.add("off")
        } else {
            hide[i].textContent = "ESCONDER";
            info[i].classList.remove("off");
        };
       
    });
};
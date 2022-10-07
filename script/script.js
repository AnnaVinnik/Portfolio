"use strict";

const cardCompact = {
    linksOnPage: document.querySelectorAll(".card__compact"),

    toggleDescription() {
        this.linksOnPage.forEach( (elem) => {
            let children = elem.childNodes;
            let img;
            let description;
    
            for (let elem of children) {    
                if (elem.classList?.contains("card-compact__img")){
                    img = elem;
                    continue;
                }
                if (elem.classList?.contains("card-compact__description")){
                    description = elem;
                }
            }
            
            elem.addEventListener('mouseover', function() {
                img.style.opacity = "0.3";
                description.style.opacity = "1";
            });
            elem.addEventListener('mouseout', function() {
                img.style.opacity = "1";
                description.style.opacity = "0";
            });
        });
    }
}

cardCompact.toggleDescription();


startAnimation();

function startAnimation() {
    const promo = document.querySelector(".promo__descriprion_size-big");
    console.log(promo);
    setTimeout( () => {
        promo.style.left = "0";
        promo.classList.add("white");
        promo.style.opacity = "1";
    }, 10 );
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);

    async function formSend(event) {
        event.preventDefault();

        let formData = new FormData(form);
        alert(formData);

        let response = await fetch('sendmail.php', {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            alert("Yep");
        }
    }
})
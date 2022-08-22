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
                description.style.display = "block";
            });
            elem.addEventListener('mouseout', function() {
                img.style.opacity = "1";
                description.style.display = "none";
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
        // promo.style.display = "block";
        promo.style.left = "0";
    }, 10 );
}

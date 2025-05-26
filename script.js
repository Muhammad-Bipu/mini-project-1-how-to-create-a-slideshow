const slideshowElements = document.querySelectorAll(".slideshow-element");

let coutElements = 1;

setInterval(() => {
    coutElements ++;
    let currentElement = document.querySelector(".current");

    currentElement.classList.remove("current");

    if(coutElements > slideshowElements.length){
        slideshowElements[0].classList.add("current");
        coutElements = 1;
    }else{
        currentElement.nextElementSibling.classList.add("current");
    }
}, 2000);
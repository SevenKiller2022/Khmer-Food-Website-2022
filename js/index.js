const navbar = document.querySelector(".navbar");


window.addEventListener('scroll',() ->){

    navbar.classList.toggle('stick',window.scrollY>0);

};



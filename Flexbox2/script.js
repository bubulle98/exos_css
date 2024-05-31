const SHUFFLE = document.getElementById("shuffle");
const GRYFFONDOR = document.getElementById("gryffondor");
const SERPENTARD = document.getElementById("serpentard");
const SERDAIGLE = document.getElementById("serdaigle");
const POUFSOUFFLE = document.getElementById("poufsouffle");
const CHOIXPEAU = document.getElementById("choixpeau");

SHUFFLE.addEventListener("click", () => {
    GRYFFONDOR.style.order = Math.floor(Math.random()*10);
    SERPENTARD.style.order = Math.floor(Math.random()*10);
    SERDAIGLE.style.order = Math.floor(Math.random()*10);
    POUFSOUFFLE.style.order = Math.floor(Math.random()*10);
    CHOIXPEAU.style.order = Math.floor(Math.random()*10);

    console.log(GRYFFONDOR.style.order);

})
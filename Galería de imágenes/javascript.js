const fullbox = document.getElementById("fullbox");
const image = document.getElementById("full");

function closeimg(){
    fullbox.style.display = "none";
}


function openfullimg(reference){
    fullbox.style.display = "flex";
    image.src = reference;
}
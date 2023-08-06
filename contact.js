let navbar = document.getElementsByClassName('navbar');
let hamburgur1 = document.getElementById('hamburgur');
let cross=document.getElementsByClassName('cross')
let input=document.getElementsByClassName('input_and_search');
// console.log(input[0]);
function showheader() {

    header.style.height = "70vh";
    navbar[0].style.display = "flex";
    document.getElementsByClassName('line')[0].style.display= "none";
    document.getElementsByClassName('line')[1].style.display= "none";
    document.getElementsByClassName('line')[2].style.display= "none";
    input[0].style.display="flex";
    cross[0].style.display="block";
    // input[0].style.display="block";
}

function hideh(){
    cross[0].style.display="none";
    navbar[0].style.display = "none";
    header.style.height = "11vh";
    document.getElementsByClassName('line')[0].style.display= "block";
    document.getElementsByClassName('line')[1].style.display= "block";
    document.getElementsByClassName('line')[2].style.display= "block";
    input[0].style.display="none";
}
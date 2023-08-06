let section1 = document.getElementsByClassName('section1')[0];
let header = document.getElementById('header');
let btn = document.getElementsByClassName('btn');
let footer = document.getElementById('footer');
setInterval(change1, 3000);
setInterval(change2, 6000);
function change1() {
    section1.style.backgroundImage = "url('pexels-photo.jpeg')";
    header.style.background = 'rgba(0, 0, 0, 0.251) url(pexels-photo.jpeg)';
    footer.style.background = 'rgba(0, 0, 0, 0.251) url(pexels-photo.jpeg)';
    btn.style.Color = "white";
}
function change2() {
    section1.style.backgroundImage = "url(change.jpg)";
    header.style.background = 'rgba(0, 0, 0, 0.251) url(change.jpg)';
    footer.style.background = 'rgba(0, 0, 0, 0.251) url(change.jpg)';
}
let line = document.getElementById('line');

function show() {
    line.style.display = "block";
    setTimeout(hide, 700);
}
function hide() {
    line.style.display = "none";
}

let button1 = document.getElementById('chat1');
function chat1() {
    button1.style.display = "block";
    button1.style.animationName = "chat";
    button1.style.animationTimingFunction = "ease";
    button1.style.animationDuration = "1s";
    button1.style.animationIterationCount = "1";
}
function remove1() {
    button1.style.display = "none";
}

let button2 = document.getElementById('chat2');
function chat2() {
    button2.style.display = "block";
    button2.style.animationName = "chat";
    button2.style.animationTimingFunction = "ease";
    button2.style.animationDuration = "1s";
    button2.style.animationIterationCount = "1";
}
function remove2() {
    button2.style.display = "none";
}

let button3 = document.getElementById('chat3');
function chat3() {
    button3.style.display = "block";
    button3.style.animationName = "chat";
    button3.style.animationTimingFunction = "ease";
    button3.style.animationDuration = "1s";
    button3.style.animationIterationCount = "1";
}
function remove3() {
    button3.style.display = "none";
}

let button4 = document.getElementById('chat4');
function chat4() {
    button4.style.display = "block";
    button4.style.animationName = "chat";
    button4.style.animationTimingFunction = "ease";
    button4.style.animationDuration = "1s";
    button4.style.animationIterationCount = "1";
  
}
function remove4() {
    button4.style.display = "none";
}

let button5 = document.getElementById('chat5');
function chat5() {
    button5.style.display = "block";
    button5.style.animationName = "chat";
    button5.style.animationTimingFunction = "ease";
    button5.style.animationDuration = "1s";
    button5.style.animationIterationCount = "1";
}
function remove5() {
    button5.style.display = "none";
}


let navbar = document.getElementsByClassName('navbar');
let hamburgur1 = document.getElementById('hamburgur');
let cross=document.getElementsByClassName('cross')
let input=document.getElementsByClassName('input_and_search');
// console.log(input[0]);
function showheader() {

    header.style.height = "65vh";
    navbar[0].style.display = "flex";
    document.getElementsByClassName('line')[0].style.display= "none";
    document.getElementsByClassName('line')[1].style.display= "none";
    document.getElementsByClassName('line')[2].style.display= "none";
    input[0].style.display="flex";
    cross[0].style.display="block";
    // input[0].style.flexDirection="column";
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
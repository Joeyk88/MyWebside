//overskrift på de elementer jeg er med mit arbejde//
const text= document.querySelector(".sec-text");
const textLoad =() =>{setTimeout(() =>{text.textContent ="Software Udvikler";}
, 0);
//tidlinje mellem de 2 nye elementer og intervaler//
setTimeout(() => { text.textContent ="DJ";}, 4000);
setTimeout(() =>{textContent = "Freelancer";},8000);}
textLoad();
setInterval
(textLoad,12000);

//hvordan man åbner mine tabs//

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
}



















//1. Make a costumer template to sign in for information

//2. Make a system for bookking a DJ: Prize for how many hours and per.hour

//3. Where, when(date) the DJ is going a play

//4. How much will the costumer have for the set-up = Speakers, bottom boxes/subwoofer and light systems
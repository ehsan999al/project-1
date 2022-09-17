
let myGroup1 = document.getElementById("group1");
let myGroup2 = document.getElementById("group2");
let myGroup3 = document.getElementById("group3");
let myGroup4 = document.getElementById("group4");
let myGroup5 = document.getElementById("group5");
let myGroup6 = document.getElementById("group6");
let myGroup7= document.getElementById("group7");
let myGroup8 = document.getElementById("group8");
let myGroup9 = document.getElementById("group9");
let myGroup10 = document.getElementById("group10");

let elem = document.getElementById("score");

let x = 0 


 correct1 = () => {
     x++
       updateDisplay();
        return myGroup1.style.backgroundColor ="green" 
         
}

 uncorrect1 = () => {
       return myGroup1.style.backgroundColor ="red";
 }

 
 
 correct2 = () => {
       x++
       updateDisplay();
        return myGroup2.style.backgroundColor ="green";
}
 uncorrect2 = () => {
       return myGroup2.style.backgroundColor ="red";
 }

 
 
 correct3 = () => {
       x++
       updateDisplay();
        return myGroup3.style.backgroundColor ="green";
}
 uncorrect3 = () => {
       return myGroup3.style.backgroundColor ="red";
 }

 
 
 correct4 = () => {
       x++
       updateDisplay();
        return myGroup4.style.backgroundColor ="green";
}
 uncorrect4 = () => {
       return myGroup4.style.backgroundColor ="red";
 }

 
 
 correct5 = () => {
       x++
       updateDisplay();
        return myGroup5.style.backgroundColor ="green";
}
 uncorrect5 = () => {
       return myGroup5.style.backgroundColor ="red";
 }

 
 
 correct6 = () => {
       x++
       updateDisplay();
        return myGroup6.style.backgroundColor ="green";
}
 uncorrect6 = () => {
       return myGroup6.style.backgroundColor ="red";
 }

 
 
 correct7 = () => {
       x++
       updateDisplay();
        return myGroup7.style.backgroundColor ="green";
}
 uncorrect7 = () => {
       return myGroup7.style.backgroundColor ="red";
 }

 
 
 correct8 = () => {
       x++
       updateDisplay();
        return myGroup8.style.backgroundColor ="green";
}
 uncorrect8 = () => {
       return myGroup8.style.backgroundColor ="red";
 }

 
 
 correct9 = () => {
       x++
       updateDisplay();
        return myGroup9.style.backgroundColor ="green";
}
 uncorrect9 = () => {
       return myGroup9.style.backgroundColor ="red";
 }
 
 
 correct10 = () => {
       x++
       updateDisplay();
        return myGroup10.style.backgroundColor ="green";
}
 uncorrect10 = () => {
       return myGroup10.style.backgroundColor ="red";
 }


elem.innerHTML = `<p> your score is ${x}/20 </p>`;
function updateDisplay(){
    elem.innerHTML = `<p> your score is ${x}/20 </p>`;
 
};


let clicked = false;
function click() {
      document.getElementsByClassName("btn").onclick="";
    
}
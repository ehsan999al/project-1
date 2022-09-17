let form = document.getElementById('my-form');
let formErr = document.getElementById('erros');
let erros = [];
let fErr =''

console.log(form);

form.addEventListener("submit", (evt)=>{
    let {fName, lName, email} = form.elements;

    let tempName = fName.value.trim();
    if(tempName.length <2){
        let msg = "Your name "
        erros.push(msg)
        evt.preventDefault();
    }
    let tempNameLname = lName.value.trim();

    if(tempNameLname.length <2){
        let msg = "Your last name "
        erros.push(msg)
        evt.preventDefault();
    }
    
    if(!email.value.includes("@")){
        let msg = "your email "
        erros.push(msg)
        evt.preventDefault();
    }



if(erros.length >0 ){
erros.map((err)=>{
formErr.innerHTML += `
<div class="errMsg">
there is a problem with ${err}
</div>
`


})
}
    evt.preventDefault();
    formErr.innerHTML +=`You are good to go`
    console.log("You are good to go") ;

    
})




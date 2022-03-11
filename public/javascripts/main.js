// function ChangeColor(){
//     var SeletColor = document.getElementById("selectColor").value;
//     var bodyGround = document.getElementById("body");
//    bodyGround.style.backgroundColor = SeletColor;
// }
let ValidationForm = document.getElementById('validation');
let btnAllowed = document.getElementById('btn-allowed');
let checkIcon = document.getElementById('check-icon');
let exclamIcon = document.getElementById('exclam-icon');
let errorMassge = document.getElementById('errormassage');
let trunDark = document.getElementById('trun-dark');
let bodyB = document.getElementById('body');
let headB =document.getElementById('header');
trunDark.addEventListener('click',(e) =>{
    e.preventDefault();
    if(bodyB.style.backgroundColor && headB.style.backgroundColor == "white" ){
     headB.style.backgroundColor ="#3d3d3d";
    bodyB.style.backgroundColor ="#3d3d3d";
    }else{
        headB.style.backgroundColor ="white";
        bodyB.style.backgroundColor ="white";
    }
    }
)



btnAllowed.addEventListener('click',(e) =>{
    e.preventDefault();
        //    preventDefault;
        ValidationForm.style.visibility ="hidden";
        checkIcon.style.visibility ="hidden";
        exclamIcon.style.visibility ="hidden";
        errorMassge.style.visibility ="hidden";
}    
);
function ChangeColor(){
    var SeletColor = document.getElementById("selectColor").value;
    var bodyGround = document.getElementById("body");
    bodyGround.style.backgroundColor = SeletColor;
}
const form = document.getElementById('form');
const user = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit' , (e) => {
    e.preventDefault();

    checkInputs();
})
function checkInputs() {
    const userValue = user.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    if(userValue === ''){
      setErrorFor(user,'Username can \'t be blank')
    }
    else{
        // setSuccessFor(username)
    }
}
function setErrorFor(input, message){
const formControl = input.parentElement;
const small = formControl.querySelector('small');
small.innerText = message;
formControl.className = 'form-control error';
}
function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.checkName = 'form-control success';
}
// function isEmail(email) {
//  retrun /   
// }
// function validateEmail() {
//  var mail = document.links[0].onmouseenter = fun
// }


    

// function validFrom(){
//     var ageValid = document.getElementById("age").value;
//     if(ageValid == less){
//         alert("You are Child You can't eneter our website!");
//         return flase;
//     } 
// }
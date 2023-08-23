const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const age = document.getElementById("age");
const phone = document.getElementById("phone");
const mail = document.getElementById("mail")
const male = document.getElementById("male");
const female = document.getElementById("female");
const error = document.getElementById("error")
const submit = document.getElementById("submitButton")

submit.addEventListener("click" , () =>{
    submit.innerText="sumited"
})

function validationInput(input){
    if(input ==='phone' && phone.value.length !== 10){
        error.innerText='bhai plz 10 number do'
    }
    else{
        error.innerText=""
    }
}
function Agevalidate(input){
    if(input === 'age' && age.value < 18){
        error.innerText="you are not old enough"
    }else{
        error.innerText=""
    }
}
function handleForm(event){
    event.preventDefault()
    console.log({
        firstname:firstname.value,
        lastname: lastname.value,
        age:age.value,
        gmail:mail.value,
        gender : (male.checked)? "Male": "Female",
    })
}
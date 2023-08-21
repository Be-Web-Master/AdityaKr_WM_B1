let firstname = document.getElementById("firstname");
let lastname = document.getElementById("lastname");
let age = document.getElementById("age");
let phone = document.getElementById("phone");
let mail = document.getElementById("mail")
let male = document.getElementById("male");
let female = document.getElementById("female");
let error = document.getElementById("error")
let sumit = document.getElementById("submit")

sumit.addEventListener("click" , () =>{
    sumit.innerText="sumited"
})

function validationInput(input){
    if(input ==='phone' && phone.value.length !== 10){
        error.innerText='bhai plz 10 number do'
    }else if(input === 'age' && age.value < 18){
        error.innerText="you are not old enough"
    }else{
        error.innerText=""
    }
}
function handleForm(event){
    event.preventDefault()
    q
    console.log({
        firstname:firstname.value,
        lastname: lastname.value,
        age:age.value,
        gmail:mail.value,
        gender : (male.checked)? "Male": "Female",
    })
}
const firstName = document.getElementById("firstname")
const lastName = document.getElementById("lastname")
const phone = document.getElementById("phone")
const gmail = document.getElementById("gmail")
const age = document.getElementById("age")
const male = document.getElementById("male")
const female = document.getElementById("female")
let error = document.querySelector("#error")

function validationInput(input){
    if(input === 'age' && age.value < 18){
        error.innerText= "age should br greater 18"
    }else if(input ==='phone'&& phone.value.length !== 10){
        error.innerText= "phone number should have 10 digit "
    }else{
        error.innerText=""
    }
}

function handleFormSubmit(event){
    event.preventDefault();
    console.log({
        firstName:firstName.value,
        lastName:lastName.value,
        gmail:gmail.value,
        age:age.value,
        phone:phone.value,
        gender:male.checked ? "male":"female"
    })
}
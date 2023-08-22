//1. Create a button element. When the button is clicked, change the text
// of the button to "Clicked!" (Event: click).

// let btn1 = document.querySelector(".btn1");
// btn1.addEventListener("click" , ()=>{
//    btn1.innerText="clicked"
// })


// 2. Design a form with a single input field and a submit button.
//  When the form is submitted, display an alert with the text entered in
//  the input field (Event: **`submit`**).

// let form = document.querySelector("#form")
// let inp = document.querySelector("#input")
// form.addEventListener("submit",(event) => {
//   event.preventDefault();
//   console.log(event.target);
//   alert(event.target.input.value)
// })


// Create an image element. When the image is fully loaded, display an alert saying "Image loaded!" (Event: load).

// let image = document.querySelector("img")
// image.addEventListener("load",() => {
//     alert("image loaded")
// })

// Create a text input element. Add a blur event listener that alerts "Input blurred!" when the user clicks away from the input field (Event: blur).

// let input = document.querySelector("input")
// input.addEventListener("blur",() => {
//     alert("blur input")
// })


// 5. Design a form with an input field. Implement a focus event 
// listener that changes the input's border color to blue when it
//  gains focus (Event: **`focus`**).


// let input = document.querySelector("#c")
// input.style.outline="none"
// input.addEventListener("focus" , ()=>{
//    input.style.borderColor="red"
// })

// Create a paragraph of text. Add a contextmenu event listener 
// that displays an alert saying "Right-clicked!" when the user right-clicks 
// on the paragraph (Event: contextmenu).


// let para = document.querySelector("p")
// para.addEventListener("contextmenu" ,()=>{
//     alert("Right-clicked!")
// })

// Create a text input element. Implement a keydown event listener that alerts "Key pressed!" when any key is pressed 
// in the input field (Event: keydown).

// let input = document.querySelector("#input")
// input.addEventListener("keydown",(e)=>{
//      if(e.key == 'i'){
//          alert("Key pressed!")
//      }
// })

// Design an input field. Implement a keyup event listener that 
// displays an alert with the current value of the
// input field whenever a key is released (Event: keyup).

// let input = document.querySelector("#input")
// input.addEventListener("keyup" , (e)=> {
//      e.preventDefault()
//      if(e.key == 'a'){
//         alert(e.target.value)
//      }
// })

// 9. Create a div element with some text inside. Implement a mousedown event listener that
//  changes the text to "Clicked!" when the user clicks on the div (Event: **`mousedown`**).

// let div = document.querySelector("div")

// div.addEventListener("mousedown" , () => {
//     div.innerText="clicked!"
// })

//10. Create a div of full 100vh and 100vw width and when user right click on div
//  then changes background color to a random color on each click.

// let div1 = document.querySelector("#div")
// div1.addEventListener("click",()=>{
//     const randomColor = Math.floor(Math.random()*16777215).toString(16);
//     div1.style.backgroundColor= "#"+randomColor
// })

//11 Create a button and when user click on button then it show a modal with user's name, age, gender and email with a "Close" text on the top right side and hide modal click of this text.

let btn = document.querySelector("#btn")
let model = document.querySelector("#model")
let close = document.querySelector("#close")
btn.addEventListener("click" , () =>{
    model.style.display="initial"
})
close.addEventListener("click",()=>{
    model.style.display ="none";
})
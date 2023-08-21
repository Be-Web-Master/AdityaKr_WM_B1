// // Use getElementById to target the element with the ID "main-heading" and print it to the console. (getElementById)

// let mainHeading = document.getElementById("main-heading")
// console.log(mainHeading)

// // Utilize elem.type to target the input element with the ID "name" and print its type to the console. (elem.type)

// let elemType = document.getElementById("name")
// console.log(elemType.type)

// // Make use of elem.name to target the input element with the ID "name" and print its name attribute to the console. (elem.name)

// let elemType1 = document.getElementById("name")
// console.log(elemType1.name)

// // Using elem.id, target the input element with the ID "name" and print its ID attribute to the console. (elem.id)

// let elemid = document.getElementById("name")
// console.log(elemid.id)

// // With the help of elem.value, target the input element with the ID "name" and print its value to the console. (elem.value)

// let elemvalue = document.getElementById("name")
// console.log(elemvalue.value)

// // Using querySelectorAll, target all <li> elements within the <ul> with class "list" and print them to the console. (querySelectorAll)

// let li = document.querySelectorAll(".list")[0].innerHTML
// console.log(li)

// // Leveraging querySelector, target the <p> element within the <div> with class "content" and print it to the console. (querySelector)

// let a = document.querySelector(".content").innerHTML
// console.log(a)

// // Utilizing document.body.children, target all child elements of the <body> element and print them to the console. (document.body.children)
// let ab = document.body.children
// console.log(ab)

// // Using getElementsByTagName, target the first <li> element within the <ul> with class "list" and print it to the console. (getElementsByTagName)

// let TagName = document.getElementsByTagName("li")[1]
// console.log(TagName)

// // Make use of getElementsByClassName, target all elements with the class "content" and print them to the console. (getElementsByClassName)

// let ClassName = document.getElementsByClassName("content")
// console.log(ClassName)

// // Using getElementsByName, target the input element with the name "fullName" and print it to the console. (getElementsByName)

// let getElementsByName = document.getElementsByName("fullName")
// console.log(getElementsByName)

// // What classes are present in the classList of the element with the ID "main-heading"? (classList)

// let classlist = document.getElementById("main-heading")
// console.log(classlist.classList)

// // Add the class "highlight" to the element with the ID "main-heading". What classes are present now? (classList.add)

// let listadd = document.getElementById("main-heading")
// listadd.classList.add("highlight")
// console.log(listadd.classList)

// // Remove the class "highlight" from the element with the ID "main-heading". What classes are present now? (classList.remove)

// let listremove = document.getElementById("main-heading")
// listremove.classList.remove("highlight")
// let elem = document.getElementById("main-heading").classList
// console.log(elem)

// // 15. Toggle the class "active" on the element with the class "inner-box" inside the element with the ID "container". What classes are present on the "inner-box" element? (**`classList.toggle`**)

// let elem1 = document.querySelector(".inner-box")
// elem1.classList.toggle("active")
// console.log(elem1)

// // Does the element with the ID "name" have the class "input-field"? Print true or false. (classList.contains)

// let elem2 = document.querySelector("#name")
// let elem3 = elem2.classList.contains("input-field")
// console.log(elem3)

// //Does the element with the class "content" match a <div> tag? Print true or false. (matches)

// let ele = document.querySelector(".content")
// let elm3 = ele.matches("div")
// console.log(elm3)
// 

// What is the nearest ancestor of the element with the class "inner-box" that has the ID "container"? (closest)

// let close = document.querySelector(".inner-box")
// let closest1=close.closest("#container")
// console.log(closest1)

// // Print the first child element of the <body> element. (document.body)

// let child1 = document.body.children[0]
// console.log(child1)

// // 22. Print the number of child elements within the **`<body>`** element. (**`document.body.children`**)
// let child1 = document.body.childElementCount
// console.log(child1)

// //23 What is the tag name of the first child element of the <body> element? (document.body.firstChild.tagName)

// let cc = document.body.firstElementChild.tagName
// console.log(cc)

// What is the class name of the first child element of the <body> element? (document.body.firstChild.className)
// let cc1 = document.body.firstElementChild.className
// console.log(cc1)

// Print the innerHTML of the element with the class "content". (innerHTML)

// let name = document.querySelector(".content").innerHTML
// console.log(name)

// Get the value of the "type" attribute of the input element with the ID "name". (getAttribute())


// let input = document.querySelector("#name")
// let type = input.getAttribute("type")
// console.log(type) 

// Set the "placeholder" attribute of the input element with the ID "name" to "Enter your full name". (setAttribute())
const elem1=document.getElementById('name')
elem1.setAttribute("placeholder","Enter your name")
console.log(elem1)

//Q29.Does the input element with the ID "name" have the "placeholder" attribute? Print true or false. (hasAttribute())
// const elem2=document.getElementById('name').hasAttribute('placeholder')
// console.log(elem2)

// Remove the "value" attribute from the input element with the ID "name". (removeAttribute())

// const elem2=document.getElementById('name').removeAttribute('value')
// console.log(elem2)

// Print the total number of attributes present in the element with the ID "main-heading". (attributes())

// const elem2 = document.getElementById('main-heading').attributes
// console.log(elem2)

//32 Create a new <div> element using the document.createElement method. Print the created element. (document.createElement)

// let elem = document.createElement('div')
// console.log(elem)

// 33 Create a new text node with the content "This is a new text node." using the document.createTextNode method. Print the created text node. (document.createTextNode)

// let elem = document.createTextNode('This is a new text node')
// console.log(elem)


//34. Append the created text node to the element with the ID "main-heading". Print the updated element. (append)

// let append = document.createTextNode("world")
// let main = document.getElementById('main-heading').appendChild(append);
// console.log(main)

// 35 Prepend the created <div> element to the element with the class "content". Print the updated element. (prepend)

// let elem = document.createElement("div")
// elem.innerHTML=("new content")
// let conelem = document.querySelector(".content")
// conelem.prepend(elem)
// console.log(elem)

// 36 Replace the element with the ID "main-heading" with the created text node. Print the updated element. (replaceWith)

// let elem2 = document.createTextNode("#textNode")
// let elem = document.querySelector("#main-heading")
// elem.replaceWith(elem2)
// console.log(elem2)

// insert the created <div> element before the element with the class "inner-box". Print the updated parent element. (before)

// const insertCrtElem = document.getElementsByClassName('inner-box')[0]
// const insertCrtElem2=insertCrtElem.before("second")
// console.log(insertCrtElem2)

// Insert the created <div> element after the element with the class "inner-box". Print the updated parent element. (after)

// const insertCrtElem = document.getElementsByClassName('inner-box')[0]
// const insertCrtElem2=insertCrtElem.after("second")
// console.log(insertCrtElem2)

// Print the offsetHeight and offsetWidth of the element with the class "content". (offsetHeight / offsetWidth)

// let elem = document.querySelector(".content")
// console.log(elem.offsetHeight);
// console.log(elem.offsetWidth);


// Print the clientHeight and clientWidth of the element with the class "content". (clientHeight / clientWidth)

// let elem = document.querySelector(".content")
// console.log(elem.clientHeight);
// console.log(elem.clientWidth);

// Print the scrollHeight and scrollWidth of the element with the class "content". (scrollHeight / scrollWidth)

// let elem = document.querySelector(".content")
// console.log(elem.scrollHeight);
// console.log(elem.scrollWidth);

// Print the innerHeight and innerWidth of the window. (innerHeight / innerWidth)

// console.log(window.innerHeight , window.innerWidth)

// Print the outerHeight and outerWidth of the window. (outerHeight / outerWidth)
// console.log(window.outerHeight , window.outerWidth)


// Change the text content of the <h1> element with the ID "main-heading" to "Hello, DOM!".
// let elem = document.getElementById("main-heading")
// elem.textContent="Hello, DOM!"
// console.log(elem.innerText)

// Change the value of the input element with the ID "name" to "Jane Smith".
// var nameInput = document.getElementById("name");
// nameInput.value = "Jane Smith";
// console.log(nameInput.value)


// Add a new <li> element to the <ul> element with class "list" containing the text "Item 4".

// var newItem = document.createElement("li");
// newItem.textContent = "Item 4";
// var listElement = document.querySelector(".list");
// listElement.appendChild(newItem);


// Change the text content of the <p> element within the <div> with class "content" to "Updated paragraph text".

// let elem = document.querySelector(".content");
// let elem2 = elem.querySelector("p")
// elem2.textContent="Updated paragraph text"
// console.log(elem.innerHTML)

// Change the background color of the <div> element with ID "container" to blue.

// let elem = document.getElementById("container")
// elem.style.backgroundColor="blue";

// Remove the class "inner-box" from the <div> element with class "inner-box".

// let inner = document.querySelector(".inner-box") 
// inner.classList.remove("inner-box");
// console.log(inner)

// Clone the <div> element with ID "container" and append it to the body.

// let elem = document.querySelector("#container")
// let elem2 = elem.cloneNode(true);

// document.body.appendChild(elem2)

// console.log(elem2 , elem2.id)

// Wrap the contents of the <div> with ID "container" in a new <div> with class "wrapper".

// let elem = document.querySelector("#container")
// let elem2 = document.createElement("div")
// elem2.className="wrapper"
// elem2.appendChild(elem)
// console.log(elem2)

// //52. Remove the first <li> element from the <ul> with class "list".

// let em = document.querySelector("ul")
// em.removeChild(document.querySelectorAll('li')[0])
// console.log(em)

// Add the class "highlight" to the <p> element within the <div> with class "content".

// let emm = document.querySelector(".content")
// let elem = emm.querySelector("p")
// elem.classList.add("highlight");
// console.log(elem.classList)

// Change the type of the input element with ID "name" to "email".

// let elem = document.querySelector("#name")
// elem.type="email"
// console.log(elem)

// Replace the text content of the <li> element with "Item 2" to "Updated Item 2".

// let elem = document.getElementsByTagName('li')[1];
// let elem2 = elem.replaceChildren("Updated Item 2");
// console.log(elem2)


// Change the value of the input element with ID "name" to an empty string.

// let elem = document.querySelector("#name")
// elem.value="  "
// console.log(elem)

// // Remove the entire <form> element from the DOM.

// let elem = document.getElementsByTagName('form')[0]
// elem.remove()
// console.log(elem)

// Add an event listener to the <h1> element with ID "main-heading" that logs a message when clicked.

// const elem=document.getElementById('main-heading')
// elem.addEventListener('click',function(){
//     alert("heloooooo..............")
// })
// Change the font size of the <p> element within the <div> with class "content" to 18px.
// let elem = document.querySelector(".content")
// elem.getElementsByTagName('p')[0].style.fontSize="79px"

// Remove the <ul> element with class "list" from the DOM.

// let elem = document.querySelector(".list")
// elem.remove();
// console.log(elem)

// // Create a new <div> element, give it a class of "new-div", and append it to the body.

// let elem = document.createElement("div");
// elem.classList.add("newdiv")
// document.body.appendChild(elem)
// console.log(elem)

// 62. Append a new **`<p>`** element with the text "New paragraph" to the **`<div>`** with class "inner-box".


// let elem=document.getElementsByClassName('inner-box')[0]
// let newP=document.createElement('p')
// newP.textContent="New paragraph"
// elem.appendChild(newP)
// console.log(newP.innerHTML)
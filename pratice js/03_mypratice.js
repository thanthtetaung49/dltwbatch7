let tagval;

//         // the whole document
// tagval = document;
//         // <doctype> HTML tag
// tagval = document.doctype;
//         // <head> tag
// tagval = document.head;
//         // <body> tag
// tagval = document.body;
//         // URL address
// tagval = document.URL;
// // console.log(tagval);

// call <a> tag
            // all <a> tag
// tagval = document.links; // HTML collection
//         // list-item1 <a> tag => href attributes
// tagval = document.links[0].href;
//         // list-item1 <a> tag => id attributes
// tagval = document.links[0].id;
//         // list-item1 <a> tag => classname
// tagval = document.links[0].className; // HTML collection => String
            // list-item1 <a> tag => classname
// tagval = document.links[0].classList; // DOMToken Lists => Array
//         // list-item1 <a> tag => first class name
// tagval = document.links[0].classList[0];
//         // list-item1 <a> tag => second class name
// tagval = document.links[0].classList[1];
// console.log(tagval);

// call <form> tag
        // all <form> tag
// tagval = document.forms; // HTML collection
//         // first <form> tag
// tagval = document.forms[0];
//         // first <form> tag => id attributes
// tagval = document.forms[0].id;
//         // first <form> tag => action attributes
// tagval = document.forms[0].action;
//         // first <form> tag => method attributes
// tagval = document.forms[0].method;
//         // first <form> tag => class name
// tagval = document.forms[0].className; // HTML collection => string
//         // first <form> tag => class name
// tagval = document.forms[0].classList; // DOMToken Lists => Array
//         // first <form> tag => index0, first class name
// tagval =  document.forms[0].classList[0];
// // console.log(tagval);

// call <img> tag
        // all <img> tag
tagval = document.images; // HTML collection
        // first <img> tag
tagval = document.images[0];
        // first <img> tag => src attributes
tagval = document.images[0].src;
        // first <img> tag => id attributes
tagval = document.images[0].id;
        // first <img> tag => srcset attributes
tagval = document.images[0].srcset;
        // first <img> tag => class name
tagval = document.images[0].className; // HTML collection => string
        // first <img> tag => class name
tagval = document.images[0].classList; // DOMToken Lists => Array
        // first <img> tag => first class name, index0
tagval = document.images[0].classList[0];
        // first <img> tag => undefined attributes
tagval = document.images[0].type; // undefined
        // first <img> tag => undefined attributes value with .getAttribute("qualifiedName");
tagval = document.images[0].getAttribute("type");
        // first <img> tag => defined attributes value with .getAttribute("qualifiedName");
tagval = document.images[0].getAttribute("src");
console.log(tagval);

// ----------------------------------------------------------------------------------------

// change styling => .style.css properties = "css value";
// document.getElementById("taskstitle").style.backgroundColor = "green";
// document.getElementById("taskstitle").style.fontSize = "30px";
// document.getElementById("taskstitle").style.padding = "20px";
// document.getElementById("taskstitle").style.color = "#fff";
//
// // change content => .innerText, .TextContent, .innerHTML
//                                                             // .innerText without HTML tag
// document.getElementById("taskstitle").innerText = "My Lists";
//                                                             // .innerText with HTML tag
// document.getElementById("taskstitle").innerText = "<b><i>My Lists</i></b>"; // <b><i>My Lists</i></b>
//                                                             // .textContent without HTML tag
// document.getElementById("taskstitle").textContent = "Our Lists";
//                                                             // .textContent with HTML tag
// document.getElementById("taskstitle").textContent = "<b><i>Our Lists</i></b>"; // <b><i>Our Lists</i></b>
//                                                             // .innerHTML without HTML tag
// document.getElementById("taskstitle").innerHTML = "My important Lists";
//                                                             // .innerHTML with HTML tag
// document.getElementById("taskstitle").innerHTML = "<b><i>My important Lists</i></b>";
//
// // Call by class => .getElementsByClass()
// let delitem = document.getElementsByClassName("delete-item"); // HTML collection
// console.log(delitem);
// let listitem2 = delitem[1];
//     listitem2 = delitem[1].href;
//     listitem2 = delitem[1].id;
//     listitem2 = delitem[1].className; // HTML collection => string
//     listitem2 = delitem[1].classList; // DOMToken Lists => Array
//     listitem2 = delitem[1].classList[0];
// console.log(listitem2);
//
// // delitem.style.backgroundColor = "yellow"; // error because .delete-item is array
// let lstgroup = document.getElementsByClassName("list-group-item");
// console.log(lstgroup);
//
// // lstgroup.style.backgroundColor = "green"; // error because .list-group-item is array
// lstgroup[1].style.backgroundColor = "yellow";
// lstgroup[1].innerHTML = "<i>My important list of today</i>";
// // <li class="list-group-item" style="background-color: yellow;">
// // <i>My important list of today</i>
// // </li>
//
// // Call by Tag(Element) => .getElementByTagName()
// let litag = document.getElementsByTagName("li");
// console.log(litag); // HTML collection
//
// let liatt = litag[2].className; // HTML collection => string
//     liatt = litag[2].classList; // DOMToken Lists => Array
//     liatt = litag[2].classList[0];
// console.log(liatt);
//
// litag[2].style.backgroundColor = "pink";
// litag[2].style.color = "#000";
//
// litag[2].innerHTML = "<i>My Hobby</i>";
// // <li className="list-group-item" style="background-color: pink; color: rgb(0, 0, 0);"
// // <i>My Hobby</i>
// // </li>
//
// // querySelector() => only first one work
// let callquaryid = document.querySelector("#delete-item1");
// let callquaryclass = document.querySelector(".our-item");
// let callquaryelement = document.querySelector("a");
//
// console.log(callquaryid,callquaryclass,callquaryelement);
//
// let quaryli = document.querySelector("li");
//     quaryli = document.querySelector("li").style.backgroundColor = "green";
//     quaryli = document.querySelector("ul li").style.backgroundColor = "yellow";
//     queryli = document.querySelector("ul li:nth-of-type(even)").style.backgroundColor = "grey";
//     queryli = document.querySelector("ul li:nth-of-type(odd)").style.backgroundColor = "blue";
//     queryli = document.querySelector("ul li:nth-child(3)").style.backgroundColor = "orange";
//
// console.log(quaryli);
//
// console.log(document.querySelector("ul").getElementsByClassName("list-group-item"));
// console.log(document.querySelector("li").querySelector("a"));
//
// let ourlinks = document.querySelector("ul").getElementsByClassName("list-group-item");
// console.log(typeof ourlinks);
//
// // HTML collection can't looping
// // ourlinks.forEach((ourlinkvalue)=>{
// //     console.log(ourlinkvalue);
// // })
//
// // HTML collection need to change pure array type
// let changearray = Array.from(ourlinks);
// console.log(changearray, typeof changearray);
//
// changearray.forEach((value,index)=>{
//     console.log(value);
//
//     value.textContent = `${index}: My Note`;
//     // value.style.backgroundColor = "orange";
// })
//
// // querySelectorAll()
// let queryallid = document.querySelectorAll("#delete-item1");
// let queryallclass = document.querySelectorAll(".delete-item");
// let queryallelement = document.querySelectorAll("li");
//
// console.log(`${queryallid}  ${queryallclass} and ${queryallelement}`); // [object NodeLists]
//
// let myqueryli = document.querySelectorAll("ul li");
// console.log(myqueryli); // NodeLists => Array
//
// myqueryli[4].style.backgroundColor = "yellow";
// myqueryli[4].textContent = "2/9/2022 my Note";
//
// let allqueryli = document.querySelectorAll("ul li");
// console.log(allqueryli); // NodeLists => Array
//
// // NodeLists can looping
// allqueryli.forEach((eachli,index,array)=>{
//     // console.log(eachli);
//
//     eachli.textContent = `${index}: My Diary`;
//     eachli.style.backgroundColor = "blue";
// })
//
// let oddli = document.querySelectorAll("ul li:nth-of-type(odd)");
// console.log(oddli); // NodeLists => Array
//
// oddli.forEach((oddnumber,index)=>{
//     // console.log(oddnumber);
//
//     oddnumber.textContent = `odd`;
//     oddnumber.style.backgroundColor = "green";
// })
//
// let evenli = document.querySelectorAll("ul li:nth-of-type(even)");
// console.log(evenli); // NodeLists => Array
//
// evenli.forEach((evennumber,index)=>{
//     // console.log(evennumber);
//
//     evennumber.textContent = `even`;
//     evennumber.style.backgroundColor = "yellow";
// })

// -----------------------------------------------------------------------------------------------

// .children
let chl;

let myul = document.querySelector("ul");
console.log(myul);

let myli = document.querySelector("li");
console.log(myli);

// children to children
    // first <ul> => all <li>
chl = myul.children; // HTML collection
    // first <ul> => second <li>
chl = myul.children[1];
    // first <ul> => second <li> => all <a> tag
chl = myul.children[1].children; // HTML collection
    // first <ul> => second <li> => first <a> tag, index 0
chl = myul.children[1].children[0];
    // first <ul> => second <li> => first <a> tag => id attribute
chl = myul.children[1].children[0].id;
    // first <ul> => second <li> => first <a> tag => class name
chl = myul.children[1].children[0].className; // HTML collection => string
    // first <ul> => second <li> => first <a> tag => class name
chl = myul.children[1].children[0].classList; // DOMToken lists => Array
    // first <ul> => second <li> => first <a> tag => first class name, index0
chl = myul.children[1].children[0].classList[0];
    // first <ul> => second <li> => first <a> tag => class attribute
chl = myul.children[1].children[0].getAttribute("class");
    // first <ul> => second <li> => first <a> tag => all <i> tag
chl = myul.children[1].children[0].children; // HTML collection
    // first <ul> => second <li> => first <a> tag => first <i> tag
chl = myul.children[1].children[0].children[0];

console.log(chl);

// childElementCount

let count = myul.children.length;
    count = myul.childElementCount;

console.log(count);

// firstElementChild
let firstchild = document.querySelector("ul li:first-child");
    firstchild = document.querySelector("ul").firstElementChild;
console.log(firstchild);

// lastElementChild
let lastchild = document.querySelector("ul").lastElementChild;
    lastchild = document.querySelector("ul li:last-child");
console.log(lastchild);

// parentElement
let getlichild = document.querySelector("ul").firstElementChild.firstElementChild;
console.log(getlichild);

let getaparent = getlichild.parentElement;
console.log(getaparent);

// nextElementSibling
let firstli = document.querySelector("ul").firstElementChild;
console.log(firstli);
let firstlisibling = firstli.nextElementSibling;
firstlisibling = firstli.nextElementSibling.nextElementSibling;
firstlisibling = firstli.nextElementSibling.nextElementSibling.nextElementSibling;
firstlisibling = firstli.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
console.log(firstlisibling);

// previousElementSibling
let prevlisibling = firstlisibling.previousElementSibling;
prevlisibling = firstlisibling.previousElementSibling.previousElementSibling;
prevlisibling = firstlisibling.previousElementSibling.previousElementSibling.previousElementSibling;
prevlisibling = firstlisibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling;
console.log(prevlisibling);

// createElement
const createnewli = document.createElement("li");
// console.log(createnewli);

// add id
createnewli.id = "new-item";
console.log(createnewli);

// add class
createnewli.className = "list-group-item";
createnewli.className = "delete-item"; // overwrite
createnewli.className = "list-group-item delete-item";
// .add
createnewli.classList.add("deletelione","deletelitwo","deletelithree");
console.log(createnewli);

// add attribut => .setAttributes("AttName","value");

createnewli.setAttribute("type","list");
console.log(createnewli);

// add text
// createnewli.textContent = "List item 6";
// createnewli.innerText = "our list item";
// createnewli.innerHTML = "<i>List item 6</i>";

// createTextNode
createnewli.appendChild(document.createTextNode("List item 6"));
console.log(createnewli);

// create <a> tag
let createnewa = document.createElement("a");

// addhref
createnewa.href = "#";

// add id
createnewa.id = "list-item-6";

// add class
// createnewa.className = "list-item-6";
// createnewa.className = "ourlistitem6"; // overwrite
// createnewa.className = "list-tiem-6 our-listitem-6";

// .add
createnewa.classList.add("delete-item","list-item-6");

// add Attributes
// createnewli.type = "link";
createnewa.setAttribute("type","links");

// add text
// createnewa.textContent = "List item 6";

// createTextNode
// createnewa.appendChild(document.createTextNode());

console.log(createnewa);

// create i
let createnewi = document.createElement("i");

// add class
createnewi.classList.add("far","fa-trash-alt");

console.log(createnewi);

// List item 6
createnewli.appendChild(createnewa).appendChild(createnewi);

document.querySelector("ul").appendChild(createnewli);

let stylelastlink = document.querySelector("ul li:nth-child(6)");
console.log(stylelastlink);

stylelastlink.style.color = "black";

// replaceChild(new,old)
let oldheading = document.getElementById("taskstitle");
console.log(oldheading);

let newheading = document.createElement("h1");

newheading.id = "new-tasktitle";

newheading.appendChild(document.createTextNode("My New Tasks"));

console.log(newheading);

let replacechild = document.querySelector(".card-action");

replacechild.replaceChild(newheading,oldheading);
console.log(replacechild);

// remove()
// let removeli = document.querySelector("ul li:last-child");
// removeli = removeli.remove();
//
// console.log(removeli);
//
// let removeli5 = document.querySelectorAll("ul li");
// console.log(removeli5); // NodeLists
//
// removeli5[4].remove();
// removeli5[3].remove();

// removeChild()
// let firstul = document.querySelector("ul");
// let allli = document.querySelectorAll("ul li");
//
// console.log(firstul,allli); // allli => NodeLists
//
// firstul.removeChild(allli[0]);
// firstul.removeChild(allli[1]);
// firstul.removeChild(allli[2]);

// className and classList
let callli = document.querySelector("ul li");
console.log(callli);
console.log(callli.className);
console.log(callli.classList); // HTML collection
console.log(callli.classList[0]); // DOMToken Lists

// add with className and classList
callli.className = "delete-item"; // overwrite
callli.className = "list-group-item delete-item";
callli.classList.add("delete-one","delete-two");

// remove class
callli.classList.remove("delete-one","delete-two");

let calllinks = callli.children;
console.log(calllinks); // HTML collecion
console.log(calllinks[0]);

// add Class with className and classLists
// calllinks[0].className = "our-deleteone";
// calllinks[0].className = "our-deletetwo"; // overwrite
// calllinks[0].className = "our-deleteone our-deletetwo";
calllinks[0].classList.add("delete-one","delete-two");

// remove
calllinks[0].classList.remove("delete-one","delete-two");

// replace(old,new)
calllinks[0].classList.replace("delete-item","delete-one");
calllinks[0].classList.replace("our-item","delete-two");

// contains()
if (calllinks[0].classList.contains("delete-item")){
    console.log("true");
} else {
    console.log("false");
}

if (calllinks[0].classList.contains("delete-one")){
    console.log("true");
} else {
    console.log("false");
}

if (calllinks[0].className === "delete-one"){
    console.log("true");
} else {
    console.log("false");
}

if (calllinks[0].className === "delete-two"){
    console.log("true");
} else {
    console.log("false");
}

if (calllinks[0].className === "delete-one delete-two"){
    console.log("true");
} else {
    console.log("false");
}

// attribute

let callmyfirstlink = document.querySelector("ul li a");
// callmyfirstlink = callmyfirstlink.href;
// callmyfirstlink = callmyfirstlink.id;
// callmyfirstlink = callmyfirstlink.className; // HTML collection
// callmyfirstlink = callmyfirstlink.classList; // DOMToken Lists
// callmyfirstlink = callmyfirstlink.classList[0];
// callmyfirstlink = callmyfirstlink.classList[1];

let getmyattribute = callmyfirstlink.getAttribute("href");
console.log(getmyattribute);

callmyfirstlink.setAttribute("href","https://www.google.com");

let hasmyattribute = callmyfirstlink.hasAttributes("href");
console.log(hasmyattribute);

// addEventListener

let getclearbtn = document.querySelector(".clear-tasks");
let getcard = document.querySelector(".card");
let getcardaction = document.querySelector(".card-action");
let getform = document.querySelector("form");

// console.log(getclearbtn);
//
// // Method 1 => regular function
// getclearbtn.addEventListener("click",function (e){
//     console.log("i am working by click, method 1");
//     console.log(e); // pointerEvent => object
//     console.log(e.type); // event type => click
//     console.log(e.target); // target => <a href="#" class="clear-tasks" id="clear-tasks">Clear Tasks</a>
//     console.log(this); // target => <a href="#" class="clear-tasks" id="clear-tasks">Clear Tasks</a>
//     e.preventDefault();
// })

// Method 2 => arrow function
// getclearbtn.addEventListener("click",(e)=>{
//     console.log("i am working by click, method 2");
//     // console.log(e); // pointerEvent => object
//     // console.log(e.type); // event type => click
//     // console.log(e.target); // target => <a href="#" class="clear-tasks" id="clear-tasks">Clear Tasks</a>
//     console.log(this); // window => object / this is not work in arrow function
//     e.preventDefault();
// })

// mouseevent => single click, double click, mouseup, mousedown, mouseenter, mouseleave, mousemove, mouseover, mouseout

// getclearbtn.addEventListener("click",(e)=>{
//     console.log(`Event type: ${e.type}`); // single click type
// })

// getclearbtn.addEventListener("dblclick",(e)=>{
//     console.log(`Event type: ${e.type}`); // double click type
// })

// getclearbtn.addEventListener("mouseup",(e)=>{
//     console.log(`Event type: ${e.type}`); // mouse up type
// })

// getclearbtn.addEventListener("mousedown",(e)=>{
//     console.log(`Event type: ${e.type}`); // mouse down type
// })

// getcard.addEventListener("mouseenter",(e)=>{
//     console.log("Event type: " + e.type); // mouseenter type
// })

// getcard.addEventListener("mouseleave",(e)=>{
//     console.log("Event type: " + e.type); // mouseleave type
// })

// getcard.addEventListener("mousemove",(e)=>{
//     console.log("Event type: " + e.type); // mousemove type
// })

// getcard.addEventListener("mouseover",(e)=>{
//     console.log("Event type: " + e.type); // mouseover type
// })

// getcardaction.addEventListener("mouseout",(e)=>{
//     console.log("Event type: " + e.type); // mouseout type
// })

// getcard.addEventListener("mousemove",(e)=>{
//
//     let offsetx = e.offsetX;
//     let offsety = e.offsetY;
//
//     let clientx = e.clientX;
//     let clienty = e.clientY;
//
//     let callheading1 = document.querySelector("h1");
//     let callbody = document.querySelector("body");
//
//     callheading1.textContent = `ClientX: ${clientx} and ClientY: ${clienty}`;
//
//     callbody.style.background = `linear-gradient(20deg,rgba(${offsetx},${offsety},${offsetx},0.6) 30%,rgba(${clientx},${clienty},${clientx},1) 70%)`;
// })

// getform.addEventListener("submit",function (e){
//
//     console.log(e); // submit Event
//     console.log(e.target); // <form></form>
//     console.log(this); // <form></form>
//     console.log(`Event type is ${e.type}`);
//
//     e.preventDefault();
// })

// input Event type
// let callinput = document.querySelector("#tasks");
// let callheadingh1 = document.querySelector("h1");

// callinput.addEventListener("keypress",function (e) {
//     console.log(`Event type: ${e.type}`); // keypress
//
//     callheadingh1.innerHTML = `<p>${callinput.value}</p>`;
// })

// callinput.addEventListener("keydown",function (e) {
//     console.log("Event type",e.type); // keydown
//
//     callheadingh1.innerHTML = `<p>${callinput.value}</p>`;
// })

// callinput.addEventListener("keyup",function (e) {
//     console.log(`Event type: ${e.type}`); // keyup
//     callheadingh1.innerHTML = `<b>${callinput.value}</b>`;
// })

// callinput.addEventListener("input",function (e){
//     console.log(`Event type: ${e.type}`);
//
//     callheadingh1.innerHTML = `<p>${callinput.value}</p>`;
// })

// callinput.addEventListener("focus",function (e) {
//     console.log("Event type",e.type); // focus
// })

// callinput.addEventListener("blur",function (e) {
//     console.log(`Event type: ${e.type}`); // blur (focus out)
// })

// callinput.addEventListener("cut",function (e) {
//     console.log(`Event type: ${e.type}`); // cut
// })
//
// callinput.addEventListener("paste",function (e){
//     console.log(`Event type: ${e.type}`); // paste
// })

// Event Bubbling
// let callcardtitle = document.querySelector(".card-title");
// let callcardcontent = document.querySelector(".card-content");
// let callcard = document.querySelector(".card");
//
// callcardtitle.addEventListener("click",function () {
//     console.log("I am card title class.");
// })
//
// callcardcontent.addEventListener("click",function () {
//     console.log("I am card content class.");
// })
//
// callcard.addEventListener("click",function () {
//     console.log("I am card class.");
// })

let formsubmit = document.querySelector("form");

formsubmit.addEventListener("submit",function (e) {

    e.preventDefault();

    let inputtasks = document.querySelector("input").value;

    let value; // undefined

    if (localStorage.getItem("mydata") === null){
        value = [];
    } else {
        value = JSON.parse(localStorage.getItem("mydata"));
    }

    value.push(inputtasks); // push is array method

    localStorage.setItem("mydata", JSON.stringify(value));

    console.log(value);

})


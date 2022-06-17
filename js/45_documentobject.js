// let val;
//
// val = document;
// val = document.doctype;
// val = document.head;
// val = document.body;
// val = document.URL;
// console.log(val);
//
// val = document.links; // html collection
// val = document.links[0];
// val = document.links[3];
// val = document.links[3].id;
// val = document.links[3].className; // string
// console.log(val);
//
// val = document.links[3].classList; // DOMTokenList
// val = document.links[3].classList[0];
// val = document.links[3].classList[1];
// console.log(val);
//
// val = document.forms; // html collection
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].className;
// val = document.forms[0].classList; // DOMTokenList
// val = document.forms[0].action;
// val = document.forms[0].method;
// console.log(val);
//
// val = document.images; // html collection
// val = document.images[0];
// val = document.images[0].id;
// val = document.images[0].alt;
// val = document.images[0].className;
// val = document.images[0].classList; // DOMTokenList
// val = document.images[0].classList[0];
// val = document.images[0].src;
// val = document.images[0].srcset;
// // val = document.images[0].type; // undefined
// val = document.images[0].getAttribute("type");
// val = document.images[0].getAttribute("src");
//
// val = document.scripts; // html collection
// val = document.scripts[0];
// val = document.scripts[0].src;
// val = document.scripts[0].className;
// val = document.scripts[0].classList; // DOMTokenList
// val = document.scripts[0].getAttribute("id");
// val = document.scripts[0].getAttribute("src");
// val = document.scripts[0].getAttribute("type");
// console.log(val);
//
// // -------------------------------------------------------------------------------------------------------
//
// // change styling
// document.getElementById("taskstitle").style.backgroundColor = "green";
// document.getElementById("taskstitle").style.color = "black";
// document.getElementById("taskstitle").style.padding = "10px";
//
// // Change Content
// document.getElementById("taskstitle").textContent = "Books";
// document.getElementById("taskstitle").innerText = "Note";
// // document.getElementById("taskstitle").innerText = "<u style='color: yellow';>My Application</u>";
// document.getElementById("taskstitle").innerHTML = "<u style='color: yellow;'>My Application</u>"
//
// // Call by Class
// let lis = document.getElementsByClassName("list-group-item");
// console.log(lis[0]);
// lis[0].style.color = "blue";
// lis[0].textContent = "Have to Visited";
//
// // Call by Tag (Element)
// let listag = document.getElementsByTagName("li");
// console.log(listag);
// listag[1].style.backgroundColor = "pink";
// listag[1].style.color = "black";
// listag[1].innerText = "Have to Cook";
//
// // Query Selector()
// console.log(document.querySelector("#delete-item3"));
// console.log(document.querySelector(".clear-tasks"));
// console.log(document.querySelector("h3"));
//
// console.log(document.querySelector("li"));
// console.log(document.querySelector("li").style.color = "red");
// console.log(document.querySelector("ul li").style.backgroundColor = "black");
// console.log(document.querySelector("ul li:nth-of-type(odd)").style.textTransform = "uppercase");
// console.log(document.querySelector("ul li:nth-of-type(even)").style.color = "green");
// console.log(document.querySelector("ul li:nth-of-type(3)").style.backgroundColor = "yellow");
// console.log(document.querySelector("ul li:nth-child(4)").style.backgroundColor = "green");
//
// let listgroup = document.querySelector("ul").getElementsByClassName("list-group-item"); // HTML collection
// // listgroup = document.querySelector("ul").querySelector(".list-group-item"); // result = first li
// console.log(listgroup);
// console.log(typeof listgroup);
//
// let arryitems = Array.from(listgroup);
// console.log(arryitems);
//
// // arryitems.forEach(function(arritem,idx){
// //     // console.log(arritem);
//
// //     // arritem.innerText = "hello";
//
// //     arritem.innerText = `${idx} : hello`;
// // })
//
// // querySelectorAll()
// let its = document.querySelector("ul.list-group li.list-group-item");
// console.log(its);
//
// its = document.querySelectorAll("ul.list-group li.list-group-item");
// console.log(its);
//
// its.forEach(function (itm, idx) {
//     console.log(itm);
//
//     // itm.textContent = "hello";
//
//     itm.textContent = `${idx} : Hello World`;
// });
//
// let liodds = document.querySelectorAll("li:nth-of-type(odd)");
// console.log(liodds);
//
// liodds.forEach(function (liodd, idx) {
//     console.log(liodd);
//
//     liodd.style.backgroundColor = "gray";
// });
//
// let lievens = document.querySelectorAll("li:nth-of-type(even)");
// console.log(lievens);
//
// for (let x = 0; x < lievens.length; x++) {
//     console.log(x);
//
//     console.log(lievens[x]);
//
//     lievens[x].style.backgroundColor = "red";
// }
//
// // children
// let chl;
//
// const getul = document.querySelector("ul");
// console.log(getul);
//
// const getli = document.querySelector("li");
// console.log(getli);
//
// chl = getul.children; // HTML collection
// console.log(chl);
// console.log(chl[3]);
//
// chl[2].textContent = "Hello children";
// chl[2].innerHTML = `Hello children <a href="#" id="delete-item1" class=" delete-item">
// <i class="far fa-trash-alt"></i>
// </a>`;
//
// // children to children
// // chl = getul.children;
// // chl = getul.children[1];
// // chl = getul.children[1].children;
// // chl = getul.children[1].children[0];
// // chl = getul.children[1].children[0].id;
// // chl = getul.children[1].children[0].className;
// // chl = getul.children[1].children[0].classList;
// // chl = getul.children[1].children[0].href;
// // chl = getul.children[1].children[0].getAttribute("href");
// //     // ul   li          a           HTML collection
// // chl = getul.children[1].children[0].children;
// //     // ul     li        a           i
// // chl = getul.children[1].children[0].children[0];
// console.log(chl);
//
// // FirstElementChild
// chl = getul.querySelector("li:first-child");
// chl = getul.firstElementChild;
// console.log(chl);
//
// // LastElementChild
// chl = getul.querySelector("li:last-child");
// chl = getul.lastElementChild;
// console.log(chl);
//
// // childElementCount
// chl = getul.children.length;
// chl = getul.childElementCount;
//
// chl = getul.children[2].childElementCount;
// chl = getul.children[2].children[0].childElementCount;
// console.log(chl);
//
// // parentElement
// // const getfirstli = document.querySelector("li:first-child");
// let getfirstli = getli.parentElement;
//
// console.log(getfirstli);
//
// // nextElementSibling
// let firstli = document.querySelector("li:first-child");
// console.log(firstli);
// // list-item1   list-item2
// let sib = firstli.nextElementSibling;
// // list-item1   list-item2  list-item3
// sib = firstli.nextElementSibling.nextElementSibling;
// // list-item1   list-item2      list-item3          list-item4          list-item4
// sib = firstli.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
// console.log(sib);
//
// // previousElementSibling
// //  list-item1  list-item2      list-item3          list-item2              list-item1
// let prs = firstli.nextElementSibling.nextElementSibling.previousElementSibling.previousElementSibling;
// console.log(prs);
//
// // creatElement
// const newli = document.createElement("li");
//
// // add ID
// newli.id = "new-item";
//
// // add class
// newli.className = "list-group-item";
// // newli.className = "delete-me"; // overwrite
// newli.className = "list-group-item delete-me";
// newli.classList.add("delete-i","delete-j");
//
// // add attribute = setAttribute(attributeName , value)
// newli.setAttribute("type", "list");
//
// // newli.textContent = "Save Myanmar";
// // newli.innerText = "Save Myanmar";
// // newli.innerHTML = `Save Myanmar<a href=\\"#\\" id=\\"delete-item1\\" class=\\" delete-item\\">\\n" +
// //     "                            <i class=\\"far fa-trash-alt\\"></i>\\n" +
// //     // "                        </a>`;
//
// // create text Node
// newli.appendChild(document.createTextNode("Save Myanmar"));
// console.log(newli);
//
// // create link
// const newlink = document.createElement("a");
// console.log(newlink);
//
// // add href
// newlink.href = "#";
//
// // add ID
// newlink.id = "delete-item6";
//
// // add class
// newlink.classList.add("delete-item");
//
// // add i tag
// newlink.innerHTML = "<i class=\"far fa-trash-alt\"></i>"
//
// // add li
// newli.appendChild(newlink);
//
// // add ul
// document.querySelector("ul.list-group").appendChild(newli);
//
// // Replace Element
// const newtitleh2 = document.createElement("h2");
//
// // add ID
// newtitleh2.id = "tasktitle";
//
// // add text node
// let newcaption = "All my text";
// newtitleh2.appendChild(document.createTextNode(newcaption));
//
// console.log(newtitleh2);
//
// // replaceChild(new,old)
// let oldtitileh4 = document.getElementById("taskstitle");
// console.log(oldtitileh4);
//
// const getcardaction = document.querySelector(".card-action");
// getcardaction.replaceChild(newtitleh2,oldtitileh4);
// console.log(getcardaction);
//
// // remove element (self)
// const remli = document.querySelectorAll("li"); // NodeList
// console.log(remli);
// console.log(remli[0]);
//
// remli[0].remove();
// remli[5].remove();
//
// // remove child element
// const firstul = document.querySelector("ul");
// const chdli = document.querySelectorAll("li");
//
// firstul.removeChild(chdli[0]);
// firstul.removeChild(chdli[3]);
// firstul.removeChild(chdli[2]);
// console.log(chdli);
//
// // className vs classList
// const myli = document.querySelector("li:first-child");
// console.log(myli);
// console.log(myli.children);
// console.log(myli.children[0]);
//
// // a
// var mylink = myli.children[0];
// console.log(mylink);
// console.log(mylink.className);
//
// mylink.className = "delete-myself";
// mylink.className = "delete-myself delete-for-u"
//
// console.log(mylink);
//
// console.log(mylink.classList);
// // console.log(mylink.classList[0]);
// // console.log(mylink.classList[1]);
// mylink.classList.add("delete-ourself");
// mylink.classList.add("delete-all");
//
// // mylink.className = "delete-myself delete-for-u delete-all delete-ourself";
// // mylink.className = "delete-myself delete-for-u";
//
// // mylink.classList.remove("delete-for-u");
// mylink.classList.remove("delete-myself","delete-all");
//
// // replace(old,new)
// // mylink.classList.replace("delete-ourself","delete-world");
// // mylink.classList.replace("delete-for-u","delete-ourcounty");
//
// // contains()
// // classList
// if(mylink.classList.contains("delete-for-u")){
//     console.log("Yes, contains");
// }else{
//     console.log("No, not contains");
// }
//
// if(mylink.classList.contains("delete-you")){
//     console.log("Yes, contains");
// }else {
//     console.log("No, not contains");
// }
//
// // className
// if(mylink.className === "delete-for-u"){
//     console.log("Yes, contains");
// }else {
//     console.log("No, not contains");
// }
//
// console.log(mylink.className);
// if(mylink.className === "delete-for-u delete-ourself") {
//     console.log("Yes, contains");
// }else {
//     console.log("No, not contains");
// }
//
// // attribute
let firstlink = document.querySelector("a");
console.log(firstlink);

let getatt = firstlink.getAttribute("href");
let getlink = firstlink.href;
console.log(getatt);
//
let setatt = firstlink.setAttribute("href", "https://www.google.com");
console.log(setatt);
//
let hasatt = firstlink.hasAttribute("href");
console.log(hasatt); // true
let noatt = firstlink.hasAttribute("title");
console.log(noatt); // false
//
// // addEventListener(eventtype,function ())
//
// const clearbtn = document.querySelector(".clear-tasks");
// // console.log(clearbtn);
//
// // Mehod 1
// // clearbtn.addEventListener("click",function (e){ // regular function
// //     // console.log("i am working by click");
// //
// //     // console.log(e); // All objects
// //     console.log(e.target); // <a href="#" class="clear-tasks">Clear Tasks</a>
// //
// //     // console.log(this);
// //
// //     e.preventDefault();
// // })
//
// // clearbtn.addEventListener("click",(e)=>{ // arrow function
// //     // console.log(e);
// //     // console.log(e.target);
// //
// //     console.log(this); // this keyword isn't work in arrow function
// // })
//
// // Method 2
// clearbtn.addEventListener("click", myclick);
// console.log(clearbtn.classList);
//
// function myclick(e){
//     console.log("i am working by click");
//
//     console.log(e);
//     console.log(e.target);
//     console.log(this);
//
//     let val;
//     val = e.target.className;
//     val = e.target.classList; // DOMToken Lists
//     // val = e.target.id;
//
//     console.log(val);
//
//     e.target.innerText = "Finished";
//
//     // Event Type
//     val = e.type;
//
//     // coordinate event => relative to the mouse pointer on the window
//     val = e.clientX;
//     // val = e.clientY;
//
//     // coordinate event => relative to the mouse pointer on the element
//     val = e.offsetX;
//     val = e.offsetY;
//
//     console.log(val);
//
//     e.preventDefault();
// }
//
// // MouseEvent
// const clbtn = document.querySelector(".clear-tasks");
// const card = document.querySelector(".card");
// const cardatc = document.querySelector(".card-action");
// const headingh2 = document.querySelector("h2");
//
//
// // // single click
// // clbtn.addEventListener("click",mouseeventtype);
// //
// // // bouble click
// // clbtn.addEventListener("dblclick",mouseeventtype);
//
// // mouse down
// // clbtn.addEventListener("mousedown",mouseeventtype);
//
// // mouseup
// // clbtn.addEventListener("mouseup",mouseeventtype);
//
// // mouseenter
// // card.addEventListener("mouseenter",mouseeventtype);
//
// // mouseover(action to each childs mouse over)
// // card.addEventListener("mouseover",mouseeventtype);
//
// // mouseleave
// // card.addEventListener("mouseleave",mouseeventtype);
//
// // mouseout(action to each childs mouse out)
// // cardatc.addEventListener("mouseout",mouseeventtype);
//
// // mousemove
card.addEventListener("mousemove",mouseeventtype);

function mouseeventtype(e){

    console.log(`Event type is ${e.type}`);

    headingh2.textContent = `Clinet X: ${e.clientX} Client Y: ${e.clientY}`;
    headingh2.textContent = `OffsetX: ${e.offsetX} OffsetY: ${e.offsetY}`;

    document.querySelector(".card").style.backgroundColor = `rgba(${e.offsetX},${e.offsetY},${e.offsetX},0.8)`;

    document.body.style.backgroundColor = `rgba(${e.offsetX},${e.offsetY},${e.offsetX},1)`;
}
//
// // const formsubmit = document.querySelector("form");
// //
// // formsubmit.addEventListener("submit",submiteventtype);
// //
// // function submiteventtype(e){
// //     console.log(`Event type is ${e.type}`);
// //
// //     e.preventDefault();
// // }
//
// const mytasks = document.querySelector(".tasks");
// const getheadingh2 = document.querySelector("h2");
//
// // keydown
// // mytasks.addEventListener("keydown",myinputeventtype);
//
// //keypress
// // mytasks.addEventListener("keypress",myinputeventtype);
//
// // keyup
// // mytasks.addEventListener("keyup",myinputeventtype);
//
// // input
// // mytasks.addEventListener("input",myinputeventtype);
//
// // focus
// // mytasks.addEventListener("focus",myinputeventtype);
//
// // blur(focus out)
// // mytasks.addEventListener("blur",myinputeventtype);
//
// // cut
// // mytasks.addEventListener("cut",myinputeventtype);
//
// // paste
// // mytasks.addEventListener("paste",myinputeventtype);
// //
// // function myinputeventtype(e){
// //     console.log(`Event type: ${e.type}`);
// //
// //     console.log(mytasks.value);
// //     getheadingh2.textContent = mytasks.value;
// // }
//
// // Event Bubbling
// document.querySelector(".card-title").addEventListener("click",function (){
//     console.log("i am card-title");
// })
//
// document.querySelector(".card-content").addEventListener("click",function (){
//     console.log("i am card-content");
// })
//
// document.querySelector(".card").addEventListener("click",function (){
//     console.log("i am card");
// })

// Event Delegation
// const deleteitem = document.querySelector(".delete-item");
//
// deleteitem.addEventListener("click",eventdelegation);
//
// function eventdelegation(e){
//
//     console.log("i am delete item");
//     console.log(e.target);
//     e.preventDefault();
//
// }

// document.body.addEventListener("click",myeventdelegation);

// function myeventdelegation(e){
    // console.log("i am working.");
    // console.log(e.target);

                // i
    // if (e.target.className === "far fa-trash-alt"){
    //     console.log("hay i am trash,wanna fight me");
    // }

            // i    a
    // if (e.target.parentElement.className === "delete-item"){
    //     console.log("i am delete item created by a tag");
    // }

            // i    a
    // if (e.target.parentElement.className == "delete-item delete-me"){
    //     console.log("i am delete-item delete-me created by a tag");
    // }

            // i    a
    // if (e.target.parentElement.className === "delete-item delete-item4"){
    //     console.log("i am delete-item delete-item4 created by a tag");
    // }

    // console.log(e.target.parentElement);

//     if (e.target.parentElement.classList.contains("delete-item")){
//         // console.log("i am delete-item created by a tag");
//
//         // remove
//         // i
//         // e.target.remove();
//
//         // i        a
//         // e.target.parentElement.remove();
//
//         // i        a           li
//         e.target.parentElement.parentElement.remove();
//     }
//
//     e.preventDefault();
// }

var formsubmit = document.querySelector("form");

formsubmit.addEventListener("submit",function (e) {
    // console.log("i am working");
    e.preventDefault();

    const mynewtasks = document.getElementById("tasks").value;
    console.log(mynewtasks);

    // localStorage.setItem("mytasks",mynewtasks);

    let alltasks; // undefined

    if (localStorage.getItem("mytasks") === null){
        alltasks = [];
    }else {
        alltasks = JSON.parse(localStorage.getItem("mytasks"));
    }

    alltasks.push(mynewtasks);// push is array method

    localStorage.setItem("mytasks",JSON.stringify(alltasks));

    console.log(alltasks);
})

// console.log(localStorage.getItem("mytasks"));
// console.log(typeof localStorage.getItem("mytasks"));
//
// console.log(JSON.parse(localStorage.getItem("mytasks")));
// console.log(typeof JSON.parse(localStorage.getItem("mytasks")));
//
// let getalltasks = localStorage.getItem("mytasks");
//     getalltasks = JSON.parse(getalltasks);
// console.log(typeof getalltasks);
//
// getalltasks.forEach(function (getalltask){
//     console.log(getalltask);
// })
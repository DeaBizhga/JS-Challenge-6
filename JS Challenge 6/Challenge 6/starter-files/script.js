const today = new Date();
const formattoday=today.toDateString();
const sot = document.getElementById('today');
sot.innerHTML='Today is '+formattoday;


function addTask(){

    let desc= document.getElementById('taskDescription').value;

let time = document.getElementById('taskTime').value;

let date = document.getElementById('taskDate').value;

console.log(desc+date+time);

let ulElement = document.createElement('ul');
let note = document.createTextNode(date+' at '+time+' '+desc);
ulElement.appendChild(note);
let lista=document.getElementById('lista');
lista.appendChild(ulElement);



let btn = document.createElement('button');
btn.classList.add('btn');
btn.classList.add('btn-danger');
btn.textContent='Remove';

btn.onclick=function(){
    ulElement.remove();

}

ulElement.appendChild(btn);

}


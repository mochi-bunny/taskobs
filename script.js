const inpbox= document.getElementById('inp-box');
const listcont= document.getElementById('listcont');

function addTask(){ //creating listitem on selecting add button
    if (inpbox.value === ''){
        alert('No tasks entered');
    }
    else{
        let li= document.createElement('li');
        li.innerHTML = inpbox.value;
        listcont.appendChild(li);     
        let span = document.createElement('span');
        span.innerHTML= '\u00d7';
        li.appendChild(span);

    }
 inpbox.value='';
 saveData(); //saves updated content in browser
}

//on any click in the list items response is triggered
listcont.addEventListener("click", function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle('check');
    }
    else if (e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
        }
    }
, false);


function saveData(){
    localStorage.setItem('data', listcont.innerHTML);

}

function showTask(){
    listcont.innerHTML= localStorage.getItem('data');
}

showTask();
const box = document.getElementById("box");
const list = document.getElementById("list");

function addTask(){
    if(box.value === ''){
        alert("You did not enter any word")
    }
    else{
        const li = document.createElement("li");
        li.innerText = box.value;
        list.appendChild(li);
        const span = document.createElement("span");
        span.innerHTML = "&#10006";
        li.appendChild(span);
    }
    box.value = '';
    saveData();
}

list.addEventListener("click", function(badal){
    if(badal.target.tagName === "LI"){
        badal.target.classList.toggle("checked");
        saveData();
    }
    else if(badal.target.tagName === "SPAN"){
        badal.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", list.innerHTML)
}

function showTask(){
    list.innerHTML = localStorage.getItem("data");
}
showTask();

function keyEnter(event){
    if(event.key === "Enter"){
        addTask();
    }
}
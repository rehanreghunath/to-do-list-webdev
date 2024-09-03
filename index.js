const inputBox = document.getElementById("addtask");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === '') {
        alert("Add Task");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }

    inputBox.value = "";
    save();
 
}

inputBox.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        addTask();
    }
    save();
});

listContainer.addEventListener("click", function (event){
    if(event.target.tagName === "LI"){
        event.target.classList.toggle("checked");
        save();
    }
    else if(event.target.tagName === "SPAN"){
        event.target.parentElement.remove();
        save();
    }

}, false);

function save(){
    localStorage.setItem("data", listContainer.innerHTML);

}

function load(){
    listContainer.innerHTML = localStorage.getItem("data");

}

load();
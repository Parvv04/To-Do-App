const input = document.querySelector("input");
const output = document.querySelector(".output");
const container = document.querySelector(".container");
let AllTasks = [];

if(localStorage.getItem("AllTasks") !== null){
    AllTasks = JSON.parse(localStorage.getItem("AllTasks"));
    console.log(AllTasks);

    AllTasks.forEach(function(taskObj){
        addTask(taskObj);
    });
}

function addTask(OBJ){

    const task = document.createElement('div');
    task.classList.add("task");

    const p = document.createElement('p');
    p.textContent = OBJ.text;

    const checkbox = document.createElement('input');
    checkbox.classList.add("checkbox");
    checkbox.type = "checkbox";
    checkbox.value = p.textContent;
    checkbox.checked = OBJ.completion;
    if(OBJ.completion){
        p.style.textDecoration = "line-through";
    }

    const DelBtn = document.createElement("button");
    DelBtn.classList.add("delete");
    DelBtn.textContent = "REMOVE TASK";

    task.appendChild(checkbox);
    task.appendChild(p);
    task.appendChild(DelBtn);

    output.appendChild(task);

    checkbox.addEventListener("change",function(){
        checkboxHandler(checkbox);
    })

    if(document.querySelectorAll(".clear").length === 0){
        const ClrBtn = document.createElement("button");
        ClrBtn.classList.add("clear");
        ClrBtn.textContent = "Clear All";

        container.appendChild(ClrBtn);
    }

}

function checkboxHandler(checkbox){

    let TaskSelected = checkbox.value;
    let index = AllTasks.findIndex(task => task.text === TaskSelected);

    if(checkbox.checked){
        checkbox.parentElement.querySelector("p").style.textDecoration = "line-through";
        AllTasks[index].completion = true;
    }

    else{
        checkbox.parentElement.querySelector("p").style.textDecoration = "none";
        AllTasks[index].completion = false;
    }

    localStorage.setItem("AllTasks",JSON.stringify(AllTasks));
}

function deleteTask(button){
    let TaskSelected = button.parentElement.querySelector("p").textContent;
    let index = AllTasks.findIndex(task => task.text === TaskSelected);

    AllTasks.splice(index, 1);

    button.parentElement.remove();

    localStorage.setItem("AllTasks",JSON.stringify(AllTasks));
}

function CLEAR(button){
    output.innerHTML = "";
    button.remove();
    AllTasks = [];
    localStorage.setItem("AllTasks",JSON.stringify(AllTasks));
}

input.addEventListener("keydown", function(event){
    
    if(event.key === "Enter"){
        if(input.value.trim() === ""){
            return;
        }
        let taskObj = {
            text: input.value.trim(),
            completion: false
        };

        addTask(taskObj);

        AllTasks.push(taskObj);

        localStorage.setItem("AllTasks", JSON.stringify(AllTasks));

        input.value ="";
    }
})

container.addEventListener("click", function(event){

    if(event.target.classList.contains("delete")){
        deleteTask(event.target);
    }

    if(event.target.classList.contains("clear")){
        CLEAR(event.target);
    }

    localStorage.setItem("AllTasks", JSON.stringify(AllTasks));
})


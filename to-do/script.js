const input = document.querySelector('#input');
const output = document.querySelector('.output');
const container = document.querySelector('.container');
let tasks = [];

//Load tasks from local storage when the page loads
if(localStorage.getItem("tasks") !== null){
    tasks =JSON.parse(localStorage.getItem("tasks"));

    //For each task in the tasks array, create a task element with checkbox, text and delete button and append it to the output container
    tasks.forEach(function(taskObj){
        createTask(taskObj);
    });
}

function handleCheckBox(checkbox){

    let taskText = checkbox.value;
    let index = tasks.findIndex(task => task.text === taskText);

    //If the checkbox is checked, strike through the text and update the completed property of the task object in the tasks array to true, otherwise remove the strike through and update the completed property to false
    if(checkbox.checked){
        checkbox.parentElement.querySelector("p").style.textDecoration = "line-through";
        tasks[index].completed = true;
    }
    else{
        checkbox.parentElement.querySelector("p").style.textDecoration = "none";
        tasks[index].completed = false;
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
//function to create a task
function createTask(taskObject){

        //create a task element with checkbox, text and delete button
        const task = document.createElement("div");
        task.classList.add("task");

        const p = document.createElement("p");
        p.textContent = taskObject.text;

        const checkbox = document.createElement("input");
        checkbox.classList.add("checkbox");
        checkbox.type = "checkbox";
        checkbox.value = p.textContent;
        checkbox.checked = taskObject.completed;
        if(taskObject.completed){
            p.style.textDecoration = "line-through";
        }

        const button = document.createElement("button");
        button.classList.add("delete");
        button.textContent="🗑️";

        //Append the checkbox, text and delete button to the task element, then append the task to the output container
        task.appendChild(checkbox);
        task.appendChild(p);
        task.appendChild(button);
        output.appendChild(task);

        //If there is no clear button, create one and add event listener to it
        if(document.querySelectorAll(".clear").length === 0){
            const btn = document.createElement("button");
            btn.classList.add("clear");
            btn.textContent = "Clear All";

            container.appendChild(btn);

            btn.addEventListener("click", function(){
                output.innerHTML = "";
                btn.remove();
                tasks = [];
                localStorage.setItem("tasks", JSON.stringify(tasks));
            })
        }

        //Add event listener to the checkbox to strike through the text when checked and remove strike through when unchecked
        checkbox.addEventListener("change", function(){
            handleCheckBox(checkbox);
        })        
    }

input.addEventListener("keydown", function(event){

    //If empty input, do not add task
    if(event.key === "Enter"){
        if(input.value.trim() === ""){
            return;
        }

        let taskObj = {
            text: input.value.trim(),
            completed: false
        };

        //input.value was set to empty string in the createTask function, so we need to save the task text before calling the createTask function
        createTask(taskObj);

        tasks.push(taskObj);

        localStorage.setItem("tasks", JSON.stringify(tasks));

        //Clear the input field after adding the task
        input.value = "";
    }
})

//Add event listener to the output container to listen for clicks on the delete buttons
output.addEventListener("click", function(event){

    //If the clicked element is a delete button
    if(event.target.classList.contains("delete")){

        //Get the task text from the parent element of the delete button, find the index of the task text in the tasks array and remove it from the array
        let taskText = event.target.parentElement.querySelector("p").textContent;
        let index = tasks.findIndex(task => task.text === taskText);

        //splice is used to remove the task from the tasks array at the specified index
        tasks.splice(index, 1);

        //Get the task text from the parent element of the delete button
        event.target.parentElement.remove();

    }
    
    localStorage.setItem("tasks", JSON.stringify(tasks));
    
    //If there are no tasks left in the output container, remove the clear button
    if(output.children.length === 0){
        const btn = document.querySelector(".clear");
        if(btn){
            btn.remove();
        }
    }
})
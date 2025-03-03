document.addEventListener('DOMContentLoaded', function(){
const taskInput = document.getElementById('taskInput');
const addButton = document.querySelector('.addButton');
const clearButton = document.querySelector('.clearButton');
const tasksContainer= document.querySelector('tasksContainer');


loadTasks();

addButton.addEventListener('click', function(){
    const taskText = taskInput.value.trim();

    if(taskText){
        addTask(taskText);
        taskInput.value = '';
    }
})

function addTask(task){
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTask(task);
}

function displayTask(task){
    const taskElement = document.createElement('div');
    taskElement.textContent = task;
    tasksContainer.appendChild(taskElement);
}

function loadTasks(){
const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
tasks.forEach(function(task){
    displayTask(task);
})
}

clearButton.addEventListener('click', function(){
    localStorage.clear();
    tasks=[];
})
})
function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();
    if (taskText !== "") {
        var taskItem = document.createElement("li");
        taskItem.textContent = taskText;
        taskItem.addEventListener("click", toggleTask);
        
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", deleteTask);
        
        taskItem.appendChild(deleteButton);
        
        document.getElementById("pendingList").appendChild(taskItem);
        taskInput.value = "";
    }
}

function toggleTask() {
    var listItem = this;
    if (listItem.parentNode.id === "pendingList") {
        listItem.parentNode.removeChild(listItem);
        document.getElementById("completedList").appendChild(listItem);
    } else {
        listItem.parentNode.removeChild(listItem);
        document.getElementById("pendingList").appendChild(listItem);
    }
}

function deleteTask() {
    var listItem = this.parentNode;
    listItem.parentNode.removeChild(listItem);
}

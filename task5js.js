let inputText = document.getElementById("inputText");
let addButton = document.getElementById("addButton");
let listTask = document.getElementById("listTask");

let arr = JSON.parse(localStorage.getItem("task")) || [];


// Display tasks when page loads
for (let i = 0; i < arr.length; i++) {

    listTask.innerHTML +=
        "<p>" +
        arr[i] +
        "<button onclick='deleteTask(this)'>Delete</button>" +
        "</p>";
}


// Add Task
addButton.onclick = function () {

    let task = inputText.value;

    if (task !== "") {

        arr.push(task);

        localStorage.setItem("task", JSON.stringify(arr));

        listTask.innerHTML +=
            "<p>" +
            task +
            "<button onclick='deleteTask(this)'>Delete</button>" +
            "</p>";

        inputText.value = "";
    }
};


// Delete Task
function deleteTask(button) {

    // Get the task text
    let task = button.parentElement.firstChild.textContent;

    // Remove task from array
    let index = arr.indexOf(task);

    if (index !== -1) {
        arr.splice(index, 1);
    }

    // Update localStorage
    localStorage.setItem("task", JSON.stringify(arr));

    // Remove task from page
    button.parentElement.remove();
}
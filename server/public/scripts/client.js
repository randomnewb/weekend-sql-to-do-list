$(document).ready(onReady);

function onReady() {
    console.log('In Ready');
    $('body').on('click', '#submit-task', submitTask);
    $('body').on('click','.button-complete', markComplete);
    $('body').on('click','.button-delete', deleteTask);
}

let testArray = [];

function submitTask() {
    const task = {
        name: $('#task-field').val(),
        complete: false,
    }
    
    testArray.push(task);

    updateDisplay()
}

function updateDisplay() {

    $('#task-list').empty();
    for (let task of testArray) {
    
        $('#task-list').append(`
        <tr>
        <td>${task.name}</td>
        <td>
        <button class="button-complete">Mark Complete</button>
        <button class="button-delete">Delete</button>
        </td>
        </tr>
        `)
        };
}

function markComplete() {
    console.log('Complete task');
}

function deleteTask() {
    console.log('Delete task');
}
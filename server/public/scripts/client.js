$(document).ready(onReady);

function onReady() {
    console.log('In Ready');
    $('body').on('click', '#submit-task', submitTask);
    $('body').on('click','.button-complete', markComplete);
    $('body').on('click','.button-delete', deleteTask);

    updateDisplay();
}

function submitTask() {
    const task = {
        name: $('#task-field').val(),
        complete: 'N',
    }

    updateDisplay()
}

function updateDisplay() {

    $.ajax({
        type: 'GET',
        url: '/tasks'
    }).then(function (response) {
        console.log(response);
        const tasks = response;
        $('#task-list').empty();
        for (let task of tasks) {
        
            $('#task-list').append(`
            <tr>
            <td>${task.name}</td>
            <td>
            <button class="button-complete">Mark Complete</button>
            <button class="button-delete">Delete</button>
            </td>
            </tr>
            `)
            }
    }).catch(function (error) {
        console.log(error);
        alert('Something went wrong');
    })
}

function markComplete() {
    console.log('Complete task');
}

function deleteTask() {
    console.log('Delete task');
}
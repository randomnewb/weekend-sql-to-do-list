$(document).ready(onReady);

function onReady() {
    console.log('In Ready');
    $('body').on('click', '#submit-task', submitTask);
    $('body').on('click','.button-complete', markComplete);
    $('body').on('click','.button-delete', deleteTask);

    updateDisplay();
}

function deleteTask() {
    const taskId = $(this).data('id')
    console.log('deleteSong',taskId);
    $.ajax({
        type: 'DELETE',
        url: `/tasks/${taskId}`
    }).then(function(response) {
        updateDisplay();
    }).catch(function(error) {
        console.log(error);
        alert('Something went wrong');
    })
}

function submitTask() {

    $.ajax({
        type: 'POST',
        url: '/tasks',
        data: {
            name: $('#task-field').val(),
            complete: 'N',
        }
    }).then(function (response) {
        updateDisplay();
    }).catch(function (error) {
        console.log(error);
        alert('Something went wrong');
    })
    
    $('#task-field').val('');
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
            <button class="button-complete" data-id="${task.id}">Mark Complete</button>
            <button class="button-delete" data-id="${task.id}">Delete</button>
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
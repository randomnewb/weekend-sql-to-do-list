$(document).ready(onReady);

function onReady() {
    console.log('In Ready');
    $('body').on('click', '#submit-task', submitTask);
    $('body').on('click','.button-complete', markComplete);
    $('body').on('click','.button-delete', deleteTask);
    $('body').on('click','.button-undo', undoTask);

    updateDisplay();
}

// DELETE - Delete task from complete

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

// POST - Add task to database

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

// PUT - Mark task as complete

function markComplete() {
    const taskId = $(this).data('id');
    console.log('Mark complete', taskId);

    $.ajax({
        type: 'PUT',
        url: `/tasks/${taskId}`,
        data: { complete: 'Y'}
    }).then(function (response) {
        updateDisplay();
    }).catch(function (error) {
        console.log(error);
        alert('Something went wrong');
    })
}

// PUT - Undo marking task as complete

function undoTask() {
    const taskId = $(this).data('id');
    console.log('Undo', taskId);

    $.ajax({
        type: 'PUT',
        url: `/tasks/${taskId}`,
        data: { complete: 'N'}
    }).then(function (response) {
        updateDisplay();
    }).catch(function (error) {
        console.log(error) 
        alert('Something went wrong');
    });

}

// Update items on table

function updateDisplay() {

    $.ajax({
        type: 'GET',
        url: '/tasks'
    }).then(function (response) {
        console.log(response);
        const tasks = response;
        $('#task-list').empty();
        for (let task of tasks) {
        if (task.complete === 'N') {
            task.buttonMode = `<button class="button-complete" data-id="${task.id}">Mark Complete</button>`
        } else if (task.complete ==='Y') {
            task.buttonMode = `<button class="button-undo" data-id="${task.id}">Undo</button>`;
        }
            $('#task-list').append(`
            <tr data-complete="${task.complete}">
            <td>${task.name}</td>
            <td class="button-cell-background">
            ${task.buttonMode}
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
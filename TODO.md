### Setup file structure and install node packages
- [] Create folders (server, modules, public, routes)
- [] Create boilerplate files (index.html, client.js, server.js, style.css)
- [] Obtain and source jquery
- [] `npm init --yes`
- [] `npm install express`
- [] `npm install pg`
- [] Setup .gitignore
- [] Setup package.json
- [] Test and make a commit

### Database
- [] Setup database in Postico with name `weekend-to-do-app` (remember to use this same name in connection config)
- Database table has the following parameters:
    - [] Base: name, complete
    - [] Stretch: time, status, priority
- [] Create a database.sql text file with `CREATE TABLE` queries

### Front End and Logic
- [] Allow user to create a Task
- [] When user creates Task, store in database via SQL
- [] Also refresh page to show all tasks needing to still be completed
- [] Add buttons for Complete or Delete for each task
- [] Change styling for Tasks that are completed/incompleted (determined behind the scenes via code/logic)
- [] If a task is complete, store that information (true/false)
- [] When deleting a task, remove it from the front end and database

### Styling
- [] background color
- [] font family/size
- [] text color and/or bg color of tasks (signaling complete vs incomplete)
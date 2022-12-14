### Setup file structure and install node packages
- [x] Create folders (server, modules, public, routes)
- [x] Change directories to have scripts and vendors
- [x] Create boilerplate files (index.html, client.js, server.js, pool.js, style.css)
- [x] Obtain and source jquery
- [x] `npm init --yes`
- [x] `npm install express`
- [x] `npm install pg`
- [x] Setup .gitignore
- [x] Setup package.json
    - Add `"start": "nodemon server/server.js"` under scripts
- [x] Test and make a commit

### Database
- [x] Setup database in Postico with name `weekend-to-do-app` (remember to use this same name in connection config)
- Database table has the following parameters:
    - [x] Base: name, complete
    - [] Stretch: time, status, priority
- [x] Create a database.sql text file with `CREATE TABLE` queries

### Front End and Logic
- [x] Allow user to create a Task
- [x] When user creates Task, store in database via SQL
- [x] Also refresh page to show all tasks needing to still be completed
- [x] Add buttons for Complete or Delete for each task
- [x] Change styling for Tasks that are completed/incompleted (determined behind the scenes via code/logic)
- [x] If a task is complete, store that information (true/false)
- [X] When deleting a task, remove it from the front end and database

### Client/server connections
- [X] GET request
- [x] POST request
- [X] DELETE request
- [x] PUT request

### Styling
- [x] background color
- [X] font family/size
- [X] text color and/or bg color of tasks (signaling complete vs incomplete)
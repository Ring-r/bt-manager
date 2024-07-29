# bt-manager
background tasks manager

As a user
I want to have a front-end tool to manage long term actions (background tasks on server)
so that I can better organize my work

## issues
issue 1. multiuser.

issue 2. view my tasks. task information has `id`, `name`, `description`, `state`, `error` (if it is present and what to do), `link` (to page which relates to or has run the task)

issue 3. remove my task. clear unimportant information.

There are follow solutions to implement CRUD operation:
- after each CRUD operation read all tasks from server and update table;
- each CRUD operation should return only updated information (identifier of task and changed properties); an UseState of table store whole array of task; use optimized algorithms to update only changed data;
- each CRUD operation should return only updated information (identifier of task and changed properties); the table contains components which has its own `UseState`; use optimized algorithms to update only changed data by finding related `UseState`s.
What is the better solution?

issue 4. do not create task if there is not finished task in query of current or other user with the same name and arguments. add existed task to user tasks.

issue 5. do not delete task if there are several users which create task with equal arguments.

issue 6. show number of task in order.

issue 7. refresh task info manually.

issue 8. refresh tasks info manually.

issue 9. refresh task info by using timeout.

issue 10. refresh tasks info by using timeout.

issue 11. refresh tasks info by using websocket.

issue 12. show error of task if it exists.

issue 13. remove results of tasks.

issue 14. start task.

issue 15. create duplicate of command to edit and start task.

issue 16. show a progress of task; show time to finish.

issue 17. use celery for bakground tasks.

issue 18. use fastapi background task (if it is possible).

issue 19. use dramtiq for background tasks.

issue 20. group duplicated tasks has be run before. show only the last and group.

issue 21. ...

## references
- [Asynchronous Tasks with FastAPI and Celery | TestDriven.io](https://testdriven.io/blog/fastapi-and-celery/). it is an example to start.

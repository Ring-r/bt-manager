# bt-manager
background tasks manager

As a user\
I want to have a front-end tool to manage long term actions (background tasks on server)\
so that I can better organize my work

## issues
[issue 1]. multiuser.\
[issue 2.] view only user's tasks.\
task information has `id`, `name`, `description`, `state`, `error` (if it is present and what to do), `link` (to page which relates to or has run the task)\
[issue 3]. implement crud operations and ui elements for them.\
- `c`- send request to create one task (it is not important); send request to create duplicate of task (recreate);
- `r` - send request to get one, more or all tasks; refresh information about one, more or all tasks;
- `u` - send request to stop one, more or all task;
- `d` - send request to delete one, more or all tasks.
[issue 4]. do not create task if there is not finished task in query of current or other user with the same name and arguments. add existed task to user tasks.\
[issue 5]. do not delete task if there are several users which create task with equal arguments.\
[issue 6]. show number of task in order.\
[issue 7]. refresh task or tasks info manually. \
[issue 9]. refresh task or tasks info by using timeout.\
[issue 11]. refresh tasks info by using websocket.\
[issue 12]. if task finished with error then show adaptive for end-user information what is and what to do.\
[issue 16]. show a progress of task; show time to finish.\
[issue 17]. use celery for background tasks.\
[issue 18]. use fastapi background task (if it is possible).\
[issue 19]. use dramtiq for background tasks.\
[issue 20]. group duplicated tasks has be run before. show only the last and group.\
[issue 21]. ...\

## references
- [Asynchronous Tasks with FastAPI and Celery | TestDriven.io](https://testdriven.io/blog/fastapi-and-celery/). it is an example to start.

##
it is better to update `flower`:
- [ ] return data (json) instead of html.
- [ ] researc progress update push request. is it used websocket or something like it?
- [ ] change or implement code to use websocket for something (for example, for progress).

- [ ] implement code to make bulk request which call separate functions by pathes and constructe responce as an agragaton of all requests. add this information to README or dev-note. check and improve text.
i thinks (but i don't do so) it is necessary to optimize the count of request between client and server. but how often do we need this? and do we recreate something like graphql?

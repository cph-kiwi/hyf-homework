-- Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
INSERT INTO task (title, description, created, updated, due_date, status_id)
VALUES ("Call doctor", "Get test results", "2021-01-12 13:24:02", "2021-01-13 09:15:31", "2021-01-14 17:00:00", 3);

INSERT INTO user_task (user_id, task_id)
VALUES (6, 36);

-- Change the title of a task
UPDATE task
SET title='Do laundry'
WHERE id=1;

-- Change a task due date
UPDATE task
SET due_date="2021-01-14 17:00:00"
WHERE id=1;

-- Change a task status
UPDATE task
SET status_id=3
WHERE id=1;

-- Mark a task as complete
UPDATE task
SET status_id=3
WHERE id=3;

-- Delete a task
DELETE FROM task WHERE id=3;



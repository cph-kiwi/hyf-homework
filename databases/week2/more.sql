-- Get all the tasks assigned to users whose email ends in @spotify.com
USE more;

SELECT * from task
INNER JOIN user_task ON task.id=user_task.task_id
INNER JOIN user ON user_task.user_id=user.id
WHERE user.email LIKE '%@spotify.com';

-- Get all the tasks for 'Donald Duck' with status 'Not started'
SELECT * from task
INNER JOIN user_task ON task.id=user_task.task_id
INNER JOIN user ON user_task.user_id=user.id
WHERE user.name='Donald Duck' AND status_id=1;

-- Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)
SELECT * from task
INNER JOIN user_task ON task.id=user_task.task_id
INNER JOIN user ON user_task.user_id=user.id
WHERE user.name='Maryrose Meadows' AND MONTH(task.created)=9;

-- Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by)
SELECT EXTRACT(month FROM task.created) AS month, COUNT(*) FROM task
GROUP BY EXTRACT(month FROM task.created)
ORDER BY EXTRACT(month FROM task.created);

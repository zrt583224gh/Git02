class TaskTracker {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }

  removeTask(taskId) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }

  updateTaskStatus(taskId, status) {
    this.tasks.forEach(task => {
      if (task.id === taskId) {
        task.status = status;
      }
    });
  }

  updateTaskDeadline(taskId, deadline) {
    this.tasks.forEach(task => {
      if (task.id === taskId) {
        task.deadline = deadline;
      }
    });
  }

  getTasks() {
    return this.tasks;
  }

  getTask(taskId) {
    return this.tasks.find(task => task.id === taskId);
  }

  getTasksByStatus(status) {
    return this.tasks.filter(task => task.status === status);
  }

  getTasksByDeadline(deadline) {
    return this.tasks.filter(task => task.deadline === deadline);
  }
}

// Example usage
const taskTracker = new TaskTracker();

// Add tasks
taskTracker.addTask({ id: 1, title: 'Task 1', status: 'In Progress', deadline: '2024-03-05' });
taskTracker.addTask({ id: 2, title: 'Task 2', status: 'Completed', deadline: '2024-03-01' });
taskTracker.addTask({ id: 3, title: 'Task 3', status: 'In Progress', deadline: '2024-03-10' });

// Update task status
taskTracker.updateTaskStatus(1, 'Completed');

// Update task deadline
taskTracker.updateTaskDeadline(2, '2024-03-03');

// Get all tasks
const allTasks = taskTracker.getTasks();
console.log(allTasks);

// Get task by ID
const task = taskTracker.getTask(3);
console.log(task);

// Get tasks by status
const inProgressTasks = taskTracker.getTasksByStatus('In Progress');
console.log(inProgressTasks);

// Get tasks by deadline
const tasksDueOnMarch5 = taskTracker.getTasksByDeadline('2024-03-05');
console.log(tasksDueOnMarch5);

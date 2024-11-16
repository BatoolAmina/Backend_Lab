// Import the required modules
const cron = require('node-cron');

// Schedule a task to run every minute
const task = cron.schedule('* * * * *', () => {
  console.log('Running a task every minute:', new Date().toLocaleString());
});

// Start the task
task.start();

// Optional: To stop the task after a certain period (e.g., 5 minutes)
setTimeout(() => {
  task.stop();
  console.log('Task stopped.');
}, 5 * 60 * 1000); // Stop after 5 minutes

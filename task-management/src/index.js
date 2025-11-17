// const express = require('express');
// const app = express();
// const port = 3000;

// const taskRoutes = require('./routes/tasks');

// app.get('/', (req, res) => res.send('Task Management API is running!'));
// app.get('/health', (req, res) => res.json({ status: 'healthy', uptime: process.uptime() }));

// app.use('/tasks', taskRoutes);

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });


const express = require('express');
const taskRouter = require('./routes/tasks'); 

const app = express();
const port = process.env.PORT || 3000;


const tasks = [
  { id: 1, title: 'Learn Node.js', completed: false, priority: 'high', createdAt: new Date() },
  { id: 2, title: 'Build REST API', completed: false, priority: 'medium', createdAt: new Date() },
  { id: 3, title: 'Write Documentation', completed: true, priority: 'low', createdAt: new Date() },
  { id: 4, title: 'Test Endpoints', completed: false, priority: 'high', createdAt: new Date() },
  { id: 5, title: 'Push Code to GitHub', completed: false, priority: 'medium', createdAt: new Date() }
];


app.locals.tasks = tasks;

app.use(express.json());


app.get('/', (req, res) => {
  res.send('Task Management API is running!');
});


app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    uptime: process.uptime()
  });
});


app.use('/tasks', taskRouter);


app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ success: false, error: 'Internal server error' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

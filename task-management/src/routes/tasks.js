// const express = require('express');
// const router = express.Router();

// const tasks = [
//   { id: 1, title: 'Learn Node.js', completed: false, priority: 'high', createdAt: new Date() },
//   { id: 2, title: 'Build REST API', completed: false, priority: 'medium', createdAt: new Date() },
//   { id: 3, title: 'Write Documentation', completed: true, priority: 'low', createdAt: new Date() },
//   { id: 4, title: 'Test Endpoints', completed: false, priority: 'high', createdAt: new Date() },
//   { id: 5, title: 'Push Code to GitHub', completed: false, priority: 'medium', createdAt: new Date() }
// ];

// router.get('/', (req, res) => res.json(tasks));

// router.get('/:id', (req, res) => {
//   const id = parseInt(req.params.id);


//   if (isNaN(id)) {
//     return res.status(400).json({ error: 'Invalid ID format' });
//   }

  
//   const task = tasks.find(t => t.id === id);

 
//   if (!task) {
//     return res.status(404).json({ error: 'Task not found' });
//   }

//   res.json(task);
// });

// module.exports = router;

// routes/tasks.js
const express = require('express');
const router = express.Router();

// GET /tasks - Retrieve all tasks
router.get('/', (req, res) => {
  const tasks = req.app.locals.tasks || [];
  res.status(200).json({
    success: true,
    data: tasks
  });
});

router.get('/:id', (req, res) => {
  const rawId = req.params.id;

  const id = parseInt(rawId, 10);
  if (Number.isNaN(id)) {
    return res.status(400).json({ error: 'Invalid ID format' });
  }

  const tasks = req.app.locals.tasks || [];
  const task = tasks.find(t => t.id === id);

  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }

  return res.status(200).json(task);
});


router.post('/', (req, res) => {
  try {
    const { title, priority } = req.body;

    
    if (!title || typeof title !== 'string' || title.trim().length === 0) {
      return res.status(400).json({
        success: false,
        error: 'Title is required and must be a non-empty string'
      });
    }

    
    const allowedPriorities = ['low', 'medium', 'high'];
    let finalPriority = 'medium';
    if (priority) {
      if (!allowedPriorities.includes(priority)) {
        return res.status(400).json({
          success: false,
          error: 'Priority must be one of: low, medium, high'
        });
      }
      finalPriority = priority;
    }

    const tasks = req.app.locals.tasks || [];
    const newTask = {
      id: Date.now(), 
      title: title.trim(),
      completed: false,
      priority: finalPriority,
      createdAt: new Date()
    };

    tasks.push(newTask);

    return res.status(201).json({
      success: true,
      data: newTask
    });
  } catch (err) {
    console.error('POST /tasks error:', err);
    return res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
});

module.exports = router;

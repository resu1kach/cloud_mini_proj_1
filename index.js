const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json()); // To parse JSON request bodies

// 1. Registration - POST
app.post('/api/register', (req, res) => {
  res.json({ message: 'Registration endpoint hit' });
});

// 2. Login - POST
app.post('/api/login', (req, res) => {
  res.json({ message: 'Login endpoint hit' });
});

// 3. Search - GET
app.get('/api/search', (req, res) => {
  res.json({ message: 'Search endpoint hit' });
});

// 4. Profile Update - PUT
app.put('/api/profile', (req, res) => {
  res.json({ message: 'Profile update endpoint hit' });
});

// 5. Delete User - DELETE
app.delete('/api/user', (req, res) => {
  res.json({ message: 'Delete user endpoint hit' });
});

// Start server
app.listen(PORT, () => {
  console.log(`EXPRESS Server started on port ${PORT}`);
});

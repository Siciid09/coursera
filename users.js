const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const SECRET = 'your_jwt_secret'; // for lab only, put in env in real life

// simple in-memory users
const users = []; // {username, passwordHash}

router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ message: 'Missing' });
  if (users.find(u=>u.username===username)) return res.status(400).json({ message: 'User exists' });
  const hash = await bcrypt.hash(password, 8);
  users.push({ username, passwordHash: hash });
  res.json({ message: 'Registered', username });
});

router.post('/login', async (req,res) => {
  const { username, password } = req.body;
  const user = users.find(u=>u.username===username);
  if (!user) return res.status(401).json({ message: 'Invalid' });
  const ok = await bcrypt.compare(password, user.passwordHash);
  if (!ok) return res.status(401).json({ message: 'Invalid' });
  const token = jwt.sign({ username }, SECRET, { expiresIn: '1h' });
  res.json({ message: 'Logged in', token });
});

module.exports = router;

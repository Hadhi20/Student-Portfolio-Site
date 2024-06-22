const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'student_portfolio'
});

db.connect(err => {
  if (err) throw err;
  console.log('MySQL Connected...');
});

app.listen(5000, () => {
  console.log('Server started on port 5000');
});

// API routes here

app.post('/api/projects', (req, res) => {
    const { title, description, link } = req.body;
    const sql = 'INSERT INTO projects (title, description, link) VALUES (?, ?, ?)';
    db.query(sql, [title, description, link], (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  });
  
  app.get('/api/projects', (req, res) => {
    const sql = 'SELECT * FROM projects';
    db.query(sql, (err, results) => {
      if (err) throw err;
      res.send(results);
    });
  });
  
  // create routes for blogs and education

  const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'student_portfolio'
});

db.connect(err => {
  if (err) throw err;
  console.log('MySQL Connected...');
});

// Blog Routes
app.post('/api/blogs', (req, res) => {
  const { title, content } = req.body;
  const sql = 'INSERT INTO blogs (title, content) VALUES (?, ?)';
  db.query(sql, [title, content], (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.get('/api/blogs', (req, res) => {
  const sql = 'SELECT * FROM blogs';
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

app.put('/api/blogs/:id', (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const sql = 'UPDATE blogs SET title = ?, content = ? WHERE id = ?';
  db.query(sql, [title, content, id], (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.delete('/api/blogs/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM blogs WHERE id = ?';
  db.query(sql, [id], (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.listen(5000, () => {
  console.log('Server started on port 5000');
});




// Education Routes
app.post('/api/education', (req, res) => {
  const { institution, degree, field_of_study, start_date, end_date } = req.body;
  const sql = 'INSERT INTO education (institution, degree, field_of_study, start_date, end_date) VALUES (?, ?, ?, ?, ?)';
  db.query(sql, [institution, degree, field_of_study, start_date, end_date], (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.get('/api/education', (req, res) => {
  const sql = 'SELECT * FROM education';
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

app.put('/api/education/:id', (req, res) => {
  const { id } = req.params;
  const { institution, degree, field_of_study, start_date, end_date } = req.body;
  const sql = 'UPDATE education SET institution = ?, degree = ?, field_of_study = ?, start_date = ?, end_date = ? WHERE id = ?';
  db.query(sql, [institution, degree, field_of_study, start_date, end_date, id], (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.delete('/api/education/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM education WHERE id = ?';
  db.query(sql, [id], (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});


  
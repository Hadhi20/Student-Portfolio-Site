# Student Portfolio Site

This project is a responsive web application designed for students to manage their digital portfolios, including projects, blogs, and educational background. The application is built using ReactJS for the frontend and Node.js with MySQL for the backend. It is designed to be responsive on both mobile and web platforms.

## Features

- Manage and display projects
- Write and manage blogs
- Track educational background
- Responsive design for mobile and web platforms

## Tech Stack

- Frontend: ReactJS
- Backend: Node.js, Express.js
- Database: MySQL
- Styling: CSS

## Prerequisites

- Node.js and npm (Node Package Manager)
- MySQL
- Git
- Visual Studio Code (or any code editor)

## Installation

### Backend Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/student-portfolio.git
   cd student-portfolio

2.Set up the backend:
cd backend
npm install

3. Configure MySQL database:

-Open the MySQL command line and run the following commands to create the database and tables:
CREATE DATABASE student_portfolio;

USE student_portfolio;

CREATE TABLE projects (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  link VARCHAR(255)
);

CREATE TABLE blogs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE education (
  id INT AUTO_INCREMENT PRIMARY KEY,
  institution VARCHAR(255) NOT NULL,
  degree VARCHAR(255) NOT NULL,
  field_of_study VARCHAR(255),
  start_date DATE,
  end_date DATE
);

4. Start the backend server:
    node index.js
The backend server should now be running on http://localhost:5000.

##Frontend Setup
Navigate to the frontend directory and install dependencies:

cd ../student-portfolio
npm install
Start the frontend development server:

npm start

The frontend should now be running on http://localhost:3000.

API Endpoints
Projects
GET /api/projects: Get all projects
POST /api/projects: Add a new project
PUT /api/projects/
: Update a project
DELETE /api/projects/
: Delete a project

Blogs
GET /api/blogs: Get all blogs
POST /api/blogs: Add a new blog
PUT /api/blogs/
: Update a blog
DELETE /api/blogs/
: Delete a blog

Education
GET /api/education: Get all education records
POST /api/education: Add a new education record
PUT /api/education/
: Update an education record
DELETE /api/education/
: Delete an education record

Usage
Access the frontend application at http://localhost:3000.
Use the provided forms to add new projects, blogs, and educational records.
View, edit, and delete existing records.

Contributing
Contributions are welcome! Please create a pull request with a detailed description of your changes.

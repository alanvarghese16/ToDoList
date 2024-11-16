# To-Do List Application - Backend

This has the backend code for the To-Do List application. Built with Node.js and Express.The backend is responsible for handling requests from the frontend, performing CRUD operations on tasks, and interacting with the MongoDB database to store task data.

# Technologies Used

- Node.js
- Express
- Mongoose
- CORS
- MongoDB

# Project Structure

The backend consists of the following key files and folders:

- index.js: The main entry point for the application, setting up the server and defining routes.
- Models: Contains the Mongoose models for interacting with the MongoDB database.
-'Todo.js': Defines the schema for tasks, including fields for the task description and completion status.
- package.json: Lists the project dependencies and scripts for running the server.
# Requirements

Before running the backend, ensure you have the following installed:
- Node.js
- MongoDB

# Backend (Node.js & Express)
- The backend handles all data operations and business logic. It provides RESTful API endpoints that the frontend communicates with to perform CRUD operations.
- Key functionalities include:
- Adding Tasks: Accepts new tasks from the frontend and stores them in the database.
- Fetching Tasks: Retrieves the list of tasks from the database to display in the frontend.
- Updating Tasks: Modifies existing tasks based on user input.
- Deleting Tasks: Removes tasks from the database as requested by the user.

# Database (MongoDB)
- MongoDB is used to store tasks in a structured format. Each task includes a description and a completion status (completed or not).
- The database allows for efficient data retrieval and manipulation, ensuring that the user's task list is always up-to-date.
# Installation of Dependencies

***npm install express mongoose cors*** 

# Run Server

***npm start***
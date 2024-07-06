# 30-Day-MernStack-Challenge

# Day 1

### Task Breakdown:

* Set up a development environment with Node.js, MongoDB, and React<br/>
* Create a basic Express server and a React application<br/>
* Connect the React frontend to the Express backend<br/>

### Resources/Tips:

* Node.js: https://nodejs.org/
* MongoDB: https://www.mongodb.com/
* Create React App: https://create-react-app.dev/

### Daily Checklist Instructions:

* Create a New Express Project
* Start a React Application using Create React App
* Write a Basic Express Route that Sends a "Hello, World!" Response
* Build a React Component that Displays a Simple Message on the Screen
* Connect the React Frontend to the Express Backend and Fetch Data from an API Endpoint


# Day 2

### Goals:

* Learn the fundamentals of React, including components, state, and props.
* Build reusable React components.
* Use React's virtual DOM for efficient rendering.

### Resources/Tips:

* React Documentation: React Docs - Getting Started
* React Component Lifecycle: React Docs - Component Lifecycle

### Daily Checklist:

* Create a React component that accepts a prop and displays it on the screen.
* Build a reusable React component, such as a button or input field.
* Write a function in a React component that modifies the component's state.
* Update a React component to handle user interactions, such as button clicks.
* Explain the difference between state and props in React and provide an example for each.


# Day 3

### Goals:

* Create a RESTful API using Express
* Define API routes for CRUD operations (Create, Read, Update, Delete)
* Use Postman or Insomnia to test API endpoints

### Resources/Tips:

* Express Documentation: Express Docs
* Postman: Postman
* Insomnia: Insomnia

### Daily Checklist
* Create an Express route that handles a POST request to create a new resource.
* Write an Express route that retrieves a specific resource using a GET request.
* Implement an Express route that updates a resource with a PUT request.
* Build an Express route that deletes a resource using a DELETE request.
* Test your API endpoints using Postman or Insomnia and verify the expected responses.

# Day 4

### Goals:

* Set up a MongoDB database and connect it to your Express application.
* Learn MongoDB CRUD operations (Create, Read, Update, Delete).
* Use Mongoose to interact with the MongoDB database.

### Resources/Tips:

* MongoDB Atlas (Cloud Database): MongoDB Atlas
* Mongoose Documentation: Mongoose

### Daily Checklist

* Create a MongoDB database and connect it to your Express application.
* Define a Mongoose schema for a resource in your application.
* Write Mongoose queries to create, read, update, and delete resources.
* Implement an Express route that uses Mongoose to interact with the database.
* Test your database operations by sending API requests and verifying the data in the MongoDB collection.

# Day 5

### Goals:

* Implement data fetching from the backend in React using Axios or Fetch API.
* Update React components to display data from API responses.
* Handle loading states and error handling in React.

### Resources/Tips:

* Axios: Axios
* Fetch API: Fetch API

### Daily Checklist

* Write an Axios or Fetch API request to fetch data from an API endpoint in your React application.
* Update a React component to display data fetched from the backend.
* Implement a loading state in a React component while waiting for the API response.
* Handle error cases in a React component when the API request fails.
* Build a form in React that submits data to an API endpoint and handles the response.

# Day 6 

### Goals:

* Learn about React Router for client-side routing.
* Set up routes in a React application using React Router.
* Implement navigation between different pages in React.

### Resources/Tips:

React Router: React Router

### Daily Checklist

* Set up React Router in your application to define routes for different pages.
* Create a navigation menu with links to different pages using React Router.
* Build multiple React components, each associated with a different route.
* Implement a nested route structure in your React application.
* Add a 404 page for handling invalid routes in your React Router configuration.

# Day 7 

### Goals:

* Implement form handling and validation in React.
* Use form libraries (e.g., Formik, React Hook Form) for easier form management.
* Validate form inputs and display error messages.

### Resources/Tips:

* Formik
* React Hook Form

### Daily Checklist

* Build a form in React using Formik or React Hook Form.
* Validate form inputs for required fields, email format, or custom validation rules.
* Display error messages for invalid form inputs.
* Handle form submission and send data to the backend API.
* Reset the form after successful submission or cancellation.

# Day 8 

### Goals:

* Implement pagination and sorting in React.
* Retrieve paginated data from the backend API.
* Allow users to sort data based on different criteria.
  
### Resources/Tips:

* React Paginate
* Backend API Pagination Example
  
### Daily Checklist

* Fetch paginated data from the backend API and display it in a React component.
* Implement pagination controls in your React application to navigate between pages.
* Add sorting functionality to the React component to allow users to sort data based on different criteria.
* Update the API endpoints to handle pagination and sorting parameters.
* Test the pagination and sorting functionality by fetching data from the backend and verifying the results.

# Day 9 

### Goals:

* Implement user authentication and registration in the MERN stack.
* Set up user authentication using JWT (JSON Web Tokens).
* Enable user registration and login functionality.
  
### Resources/Tips:

* JWT (JSON Web Tokens)
  
### Daily Checklist

* Implement user registration functionality by creating an API endpoint that stores user information in the database.
* Set up user login functionality by verifying credentials and generating a JWT token.
* Protect specific routes in your backend API by checking the validity of the JWT token.
* Update the React frontend to handle user registration and login forms.
* Test the user authentication and registration flows, ensuring successful login and access to protected routes.

# Day 10

### Goals:

* Implement user profiles and account management.
* Allow users to view and edit their profile information.

### Resources/Tips:

* MongoDB Update Operators
* Express middleware for authentication

### Daily Checklist

* Create an API endpoint that allows users to view their profile information.
* Implement an API endpoint that allows users to update their profile information.
* Build a React component that displays the user's profile information and allows them to edit it.

# Day 11

### Goals

* Implement file uploads in the MERN stack.
* Allow users to upload files (e.g., images) to the server.
* Store the uploaded files and serve them when requested.
  
### Resources/Tips:

* Multer

### Daily Checklist

* Set up multer to handle file uploads in your Express application.
* Create an API endpoint that accepts file uploads and saves them to a designated directory.
* Modify your React frontend to include a file upload form and send files to the backend API.
* Implement an API endpoint that serves the uploaded files when requested.
* Test the file upload functionality by uploading files from the frontend and verifying their availability on the server.

# Day 12 

### Goals

* Implement real-time features with WebSocket communication.
* Set up a WebSocket server using libraries like Socket.IO.
* Update React components to handle real-time updates.
  
### Resources/Tips

* Socket.IO

### Daily Checklist

* Set up a WebSocket server using Socket.IO in your Express application.
* Update a React component to establish a WebSocket connection and receive real-time updates from the server.
* Emit WebSocket events from the server and handle them in the React component.
* Implement a chat feature using WebSocket communication in your MERN stack application.
* Test the real-time functionality by simulating multiple users and verifying that updates are received in real-time.


# Day 13 

### Goals

* Implement data validation and sanitization to improve security.
* Use libraries like Yup or Validator.js for validation.
* Sanitize user input to prevent vulnerabilities like cross-site scripting (XSS).
  
### Resources/Tips

* Yup
* Validator.js

### Daily Checklist

* Use Yup or Validator.js to validate form inputs in your React application.
* Implement server-side validation using Yup or a similar library to validate API request payloads.
* Sanitize user input to prevent cross-site scripting (XSS) vulnerabilities.
* Handle validation errors in your React components and display appropriate error messages.
* Test the validation and sanitization functionality by submitting invalid data and ensuring it is rejected or sanitized correctly.


# Day 14 

### Goals

* Implement role-based access control (RBAC) for different user roles.
* Restrict access to certain routes or features based on user roles.
* Manage user roles and permissions in the backend.

### Resources/Tips

* Access Control Lists (ACL)

### Daily Checklist

* Create different user roles in your MERN stack application (e.g., admin, user, guest).
* Implement server-side logic to enforce RBAC by checking user roles and permissions.
* Restrict access to certain routes or features based on user roles.
* Build a React component that displays different content or features based on the user's role.
* Test the role-based access control by logging in with different user accounts and verifying access to restricted routes or features.

# Day 15 

### Goals

* Implement internationalization (i18n) for multi-language support.
* Set up language files and translations.
* Update React components to display content in different languages.

### Resources/Tips

* react-i18next: https://react.i18next.com/

### Daily Checklist

* Set up language files (e.g., JSON or YAML) for different languages in your React application.
* Implement a language switcher component that allows users to switch between languages.
* Update React components to display content based on the selected language using i18n libraries like react-i18next.
* Create translation files for commonly used phrases or labels in your application.
* Test the multi-language support by switching between different languages and ensuring the content is displayed correctly.











# Musiversal Server

Welcome to the Musiversal Server! This server is designed to support the Musiversal music platform, facilitating user management, availability tracking, and other essential functionalities.

## Getting Started

To start the server, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install all dependencies.
4. Run `npm start` to start the server.
5. The server will now be running on `http://localhost:3001`.

## Thank You Note

I would like to express my gratitude to Musiversal for providing me with the opportunity to work on this code challenge. It has been an exciting and rewarding experience, and I am grateful for the chance to contribute to such an innovative platform.

## Technical Analysis

The Musiversal Server is built using Node.js and Express.js, providing a robust backend for the Musiversal music platform. Here's a brief overview of its functionality:

- **Database Interaction**: The server interacts with a MongoDB database to store user information, availability slots, and other relevant data. Mongoose is used as the ODM (Object Data Modeling) library to simplify database operations.

- **User Management**: Users can be created, retrieved, updated, and deleted using RESTful endpoints. The server supports CRUD (Create, Read, Update, Delete) operations for managing user data.

- **Availability Tracking**: The server tracks the availability of musicians, allowing users to view and manage their schedules. Availability slots are created, updated, and deleted based on user input.

- **Error Handling**: Error handling is implemented throughout the server to ensure robustness and reliability. Errors are properly logged, and appropriate error messages are sent to clients.

- **CORS Handling**: Cross-Origin Resource Sharing (CORS) is enabled to allow communication between the server and client-side applications running on different domains.

- **Graceful Shutdown**: The server handles shutdown signals (SIGINT and SIGTERM) gracefully, ensuring that database connections are closed properly before terminating.

## Endpoints

```bash
# Start the Server
npm start

# Populate Sample Musicians
curl -X POST http://localhost:3001/users/generate-sample-musicians

# Delete All Users
curl -X DELETE http://localhost:3001/users/delete-all

# Create a New User
curl -X POST http://localhost:3001/users/create -d '{"name": "John Doe", "email": "john@example.com", "services": ["guitar", "vocals"]}' -H 'Content-Type: application/json'

# Get All Users
curl http://localhost:3001/users/get-all

# Delete All Availabilities
curl -X DELETE http://localhost:3001/availability/delete-all

# Generate Availabilities for a User
curl -X POST http://localhost:3001/availability/generate-availabilities -d '{"userId": "<USER_ID>"}' -H 'Content-Type: application/json'

# Generate One Week Availabilities for a User
curl -X POST http://localhost:3001/availability/generate-one-week-availabilities -d '{"userId": "<USER_ID>"}' -H 'Content-Type: application/json'

# Delete Availabilities for a User
curl -X DELETE http://localhost:3001/availability/delete-user-availabilities -d '{"userId": "<USER_ID>"}' -H 'Content-Type: application/json'

# Get All Availabilities
curl http://localhost:3001/availability

# Get Musician Availabilities given ID and Date
curl -X POST
  -H "Content-Type: application/json" 
  -d '{"userId": "yourUserId", "date": "2024-02-10"}' 
  http://localhost:3001/availability/get-musician-slots


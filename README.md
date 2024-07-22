# CRM Automation System

## Table of Contents
1. [Introduction](#introduction)
2. [Prerequisites](#prerequisites)
3. [Project Structure](#project-structure)
4. [Setup](#setup)
5. [Running the Application](#running-the-application)
6. [Testing](#testing)
7. [Usage](#usage)
8. [Full Code](#full-code)

## Introduction
This project is a CRM automation system built using the MERN stack (MongoDB, Express.js, React.js, Node.js) and GraphQL. The system sends automated emails when specific events are triggered, such as changing the status of a lead or adding a new lead.

## Prerequisites
Before you begin, ensure you have met the following requirements:
- Node.js (v14 or higher)
- MongoDB
- npm (Node Package Manager)
- Internet connection (for downloading dependencies and email service configuration)

## Project Structure
project-root/
├── client/
│ ├── src/
│ │ ├── tests/
│ │ │ └── LeadList.test.js
│ │ ├── components/
│ │ │ └── LeadList.js
│ │ ├── queries.js
│ │ └── App.js
│ ├── public/
│ ├── package.json
│ └── ...
├── server/
│ ├── tests/
│ │ ├── unit/
│ │ │ └── lead.test.js
│ │ ├── integration/
│ │ │ └── lead.test.js
│ ├── resolvers/
│ │ └── index.js
│ ├── models/
│ │ └── Lead.js
│ ├── config/
│ │ └── nodemailer.js
│ ├── schema.js
│ ├── index.js
│ ├── package.json
│ └── ...
└── ...

bash
Copy code

## Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd project-root
2. Install Dependencies
For the client:

bash
Copy code
cd client
npm install
For the server:

bash
Copy code
cd ../server
npm install
3. Configure Environment Variables
Create a .env file in the server directory with the following content:

makefile
Copy code
MONGO_URI=mongodb://127.0.0.1:27017/crm_automation
EMAIL_SERVICE=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-email-password
Running the Application
1. Start MongoDB
Ensure your MongoDB server is running. You can start it with:

bash
Copy code
mongod
2. Start the Server
bash
Copy code
cd server
npm start
The server will be running on http://localhost:4000.

3. Start the Client
Open a new terminal and run:

bash
Copy code
cd client
npm start
The client will be running on http://localhost:3000.

Testing
Client-side Tests
To run client-side tests, navigate to the client directory and run:

bash
Copy code
npm test
Server-side Tests
To run server-side unit and integration tests, navigate to the server directory and run:

bash
Copy code
npm test
Usage
Adding a Lead
Open the application in your browser (http://localhost:3000).
Fill out the lead form with the lead's name and email.
Click the "Add Lead" button.
A welcome email will be automatically sent to the new lead.
Changing Lead Status
In the leads list, find the lead whose status you want to change.
Click the "Change Status" button next to the lead.
Enter the new status in the provided form.
Click the "Update Status" button.
The status will be updated, and a notification email will be sent to the lead
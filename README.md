# Test Cases App

This is a webpage that displays test cases. This web page is built using React, Flask and PostgreSQL.


## Table of contents

- Landing Page
- testcases table
- Steps to run locally

## Landing page

![image](https://github.com/user-attachments/assets/cf96c45a-1555-4029-aa0b-7ee74cccdac0)

![image](https://github.com/user-attachments/assets/919b36a3-7667-46de-a87b-7d902cc15d94)


## testcases table

![image](https://github.com/user-attachments/assets/13c4d41c-1cf1-4941-b106-6fce7c83be4a)


## Steps to run locally
* Node, Python and PostgreSQL should be installed.
* Open the code in a code editor like VS code
* Backend
  * Go to the backend folder in a terminal using 'cd backend'
  * Install packages using pip: Flask, psycopg2-binary, Flask-SocketIO, python-dotenv, flask-cors
  * Create a .env file and add Database details like USER, PORT and PASSWORD
  * Start backend using command 'python app.py'
* Frontend
  * Go to the frontend folder in a terminal using 'cd frontend'
  * Run command: 'npm install' to get required packages
  * To start the front end, run command: 'npm start'
  * Go the 'http://localhost:3000/' to see the app

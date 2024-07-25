# Test Cases App

This is a webpage that displays test cases. This web page is built using React, Flask and PostgreSQL.


## Table of contents

- Landing Page
- testcases table
- Steps to run locally

## Landing page

![image](https://github.com/user-attachments/assets/4fd52f04-e24b-4c18-8d40-55bf7052e9b0)

![image](https://github.com/user-attachments/assets/4f42e427-4133-4d17-be38-0fdfef03d94b)



## testcases table

![image](https://github.com/user-attachments/assets/9ec37adb-de5b-4a52-aa6f-3bda1999a931)


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

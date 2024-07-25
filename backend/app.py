from flask import Flask, request, jsonify
from flask_socketio import SocketIO, emit
import psycopg2
from dotenv import load_dotenv
import os
from flask_cors import CORS


load_dotenv()

app = Flask(__name__)
CORS(app)
socketio = SocketIO(app, cors_allowed_origins="*")

conn = psycopg2.connect(
    dbname="testcases",
    user=os.getenv('USER'),
    password=os.getenv('PASSWORD'),
    host="localhost",
    port=os.getenv('PORT')
)
cursor = conn.cursor()

@app.route('/testcases', methods=['GET'])
def get_testcases():
    cursor.execute("SELECT * FROM testcases")
    testcases = cursor.fetchall()
    return jsonify(testcases)


if __name__ == '__main__':
    socketio.run(app, debug=True)

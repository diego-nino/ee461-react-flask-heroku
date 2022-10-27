import os
from flask import Flask, send_from_directory, jsonify

app = Flask(__name__, static_url_path='', static_folder='ui/build/')


@app.route('/')
def index():
    return send_from_directory('ui/build/', 'index.html')


@app.route("/test")
def test():
    return jsonify({"test": "Hello, world"})


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 80))


def checkIn_hardware(projectID, qty):
    return qty


def checkOut_hardware(projectid, qty):
    return qty


def joinProject(projectid):
    return projectid


def leaveProject(projectid):
    return projectid

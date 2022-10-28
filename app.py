import os
from flask import Flask

app = Flask(__name__, static_url_path='', static_folder='ui/build/')


@app.route('/')
def index():
    return app.send_static_file('index.html')


if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 80))


@app.route('/checkIn-hardware/<projectId>/<qty>', methods=["GET"])
def checkIn_hardware(projectID, qty):
    data = {
        "value": qty + " hardware checked in"
    }
    return data


@app.route('/checkOut-hardware/<projectid>/<qty>', methods=["GET"])
def checkOut_hardware(projectid, qty):
    data = {
        "value": qty + " hardware checked out"
    }
    return data


@app.route('/joinProject/<projectid>', methods=["GET"])
def joinProject(projectid):
    data = {
        "value": "Joined " + projectid
    }
    return data


@app.route('/leaveProject/<projectid>', methods=["GET"])
def leaveProject(projectid):
    data = {
        "value": "Left " + projectid
    }
    return data


@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')

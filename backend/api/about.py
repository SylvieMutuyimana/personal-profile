from . import dataset
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

def aboutMe():
    about_me = dataset.read_dataset(dataset.file_paths["aboutme_path"])
    return about_me

def aboutDetails(detail):
    about_me = aboutMe()
    details = about_me.get(detail, [])
    return details

@app.route('/about', methods=['GET'])
def aboutMe_Route():
    about_me = aboutMe()
    if not about_me:
        return jsonify({"message": "No about data found"})
    return jsonify(about_me)

@app.route('/about/<detail>', methods=['GET'])
def aboutMe_DetailsRoute(detail):
    details = aboutDetails(detail)
    if not details:
        return jsonify({"message": "No data found for detail '{}'".format(detail)})
    return jsonify(details)


if __name__ == '__main__':
    app.run()

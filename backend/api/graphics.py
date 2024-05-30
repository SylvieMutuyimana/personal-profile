from . import dataset
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

def allDesigns():
    all_designs = dataset.read_dataset(dataset.file_paths["designs_path"])
    return all_designs

def theDesignData(designId):
    all_designs = allDesigns()
    theDesign = all_designs.get(designId, [])
    return theDesign

@app.route('/skills', methods=['GET'])
def allDesigns_Route():
    all_designs = allDesigns()
    if not all_designs:
        return jsonify({"message": "No skills data found"})
    return jsonify(all_designs)

@app.route('/skills/<designId>', methods=['GET'])
def theDesignData_Route(designId):
    theDesign_data = theDesignData(designId)
    if not theDesign_data:
        return jsonify({"message": "No data found for designId '{}'".format(designId)})
    return jsonify(theDesign_data)


if __name__ == '__main__':
    app.run()

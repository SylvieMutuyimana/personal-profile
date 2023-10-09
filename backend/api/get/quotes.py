from .. import dataset
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

def allquotesData():
    all_quotes = dataset.read_dataset(dataset.file_paths["quotes_path"])
    return all_quotes

def quoteData(quoteId):
    about_me = allquotesData()
    the_quote = next((quote for quote in about_me if quote["_id"]==quoteId), {})
    return the_quote

@app.route('/quotes', methods=['GET'])
def allquotesRoute():
    all_quotes = allquotesData()
    if not all_quotes:
        return jsonify({"message": "No quotes found"})
    return jsonify(all_quotes)

@app.route('/quotes/<quoteId>', methods=['GET'])
def quoteRoute(quoteId):
    authors = quoteData(quoteId)
    if not authors:
        return jsonify({"message": "No quote found for quote id '{}'".format(quoteId)})
    return jsonify(authors)


if __name__ == '__main__':
    app.run()

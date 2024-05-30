import json
from flask import Flask
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app, resources={r"/*":{"origins":"*"}})

def dataset(filename):
    current_dir = os.path.dirname(os.path.abspath(__file__))
    file_path = os.path.join(current_dir, os.pardir, "dataset", filename + ".json")
    return file_path

file_paths = {
    "payments_path": dataset("payments"),
    "aboutme_path":dataset("about"),
    "projects_path":dataset("projects"),
    "quotes_path":dataset("quotes"),
    "skills_path":dataset("skills"),
    "graphics_path":dataset("graphics")
}

#Read json file
def read_dataset(file_path):
    with open(file_path) as file:
        data = json.load(file)
    return data

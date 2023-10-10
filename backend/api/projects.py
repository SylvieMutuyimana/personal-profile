from . import dataset
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

def allProjects():
    all_projects = dataset.read_dataset(dataset.file_paths["projects_path"])
    return all_projects

def projectsTypeData(projectType):
    all_projects = allProjects()
    projectTypes = all_projects.get(projectType, [])
    return projectTypes

@app.route('/projects', methods=['GET'])
def allProjects_Route():
    all_projects = allProjects()
    if not all_projects:
        return jsonify({"message": "No projects data found"})
    return jsonify(all_projects)

@app.route('/projects/<projectType>', methods=['GET'])
def projectTypeData_Route(projectType):
    project_data = projectsTypeData(projectType)
    if not project_data:
        return jsonify({"message": "No data found for projectType '{}'".format(projectType)})
    return jsonify(project_data)


if __name__ == '__main__':
    app.run()

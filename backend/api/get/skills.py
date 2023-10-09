from .. import dataset
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

def allSkills():
    all_skills = dataset.read_dataset(dataset.file_paths["skills_path"])
    return all_skills

def skillsTypeData(skillType):
    all_skills = allSkills()
    skillTypes = all_skills.get(skillType, [])
    return skillTypes

@app.route('/about', methods=['GET'])
def allSkills_Route():
    all_skills = allSkills()
    if not all_skills:
        return jsonify({"message": "No skills data found"})
    return jsonify(all_skills)

@app.route('/skills<skillType>', methods=['GET'])
def skillTypeData_Route(skillType):
    skill_data = skillsTypeData(skillType)
    if not skill_data:
        return jsonify({"message": "No data found for skillType '{}'".format(skillType)})
    return jsonify(skill_data)


if __name__ == '__main__':
    app.run()

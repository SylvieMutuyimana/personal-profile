from flask import Flask, render_template
from flask_cors import CORS
from api.about import aboutMe_Route, aboutMe_DetailsRoute
from api.quotes import allquotesData, quoteRoute
from api.skills import allSkills_Route, skillTypeData_Route
from api.projects import allProjects_Route, projectTypeData_Route
from api.graphics import allDesigns_Route, theDesignData_Route
from api.receiveemail import sendEmail_Route
app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})  # Allow CORS for all routes and origins

# Define route for root URL
@app.route("/", methods=["GET"])
def root():
    return render_template('index.html')

# About routes
app.add_url_rule('/about', 'get_prices', aboutMe_Route, methods=['GET'])
app.add_url_rule('/about/<detail>', 'aboutMe_DetailsRoute', aboutMe_DetailsRoute, methods=['GET'])

# Quotes routes
app.add_url_rule('/quotes', 'allquotesData', allquotesData, methods=['GET'])
app.add_url_rule('/quotes/<quoteId>', 'quoteRoute', quoteRoute, methods=['GET'])

# Skills routes
app.add_url_rule('/skills', 'allSkills_Route', allSkills_Route, methods=['GET'])
app.add_url_rule('/skills/<skillType>', 'skillTypeData_Route', skillTypeData_Route, methods=['GET'])

# Projects routes
app.add_url_rule('/projects', 'allProjects_Route', allProjects_Route, methods=['GET'])
app.add_url_rule('/projects/<projectType>', 'projectTypeData_Route', projectTypeData_Route, methods=['GET'])

# Graphics routes
app.add_url_rule('/graphics', 'allDesigns_Route', allDesigns_Route, methods=['GET'])
app.add_url_rule('/graphics/<designId>', 'theDesignData_Route', theDesignData_Route, methods=['GET'])

#sending email
app.add_url_rule('/send-email', 'sendEmail_Route', sendEmail_Route, methods=['POST', 'GET'])

if __name__ == "__main__":
    app.run(debug=True)

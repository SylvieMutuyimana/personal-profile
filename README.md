# Personal Profile

This project is a personal profile system implemented with Next.js for the frontend and Python Flask for the backend. The backend also includes a website for updating data.

## Project Structure


personal-profile/
| - backend/
| | - api/            # Contains API endpoints
| | - dataset/        # Dataset for the personal profile
| | - qrCode/         # QR code generation functionality
| | - static/         # Static files served by Flask
| | - templates/      # HTML templates for Flask website
| | - app.py          # Main Flask application file
| - components/       # React components for the frontend
| - pages/            # Next.js pages
| | - _app.js         # Custom App component
| | - index.js        # Homepage
| | - layout.js       # Layout component for pages
| - public/           # Public assets
| - styles/           # CSS styles
| | - css/            # Global CSS
| | - module.css/     # CSS modules

## Backend

The backend is powered by Python Flask. It provides API endpoints for interacting with the personal profile data, handles dataset storage, QR code generation, and serves static files and HTML templates for the website.


## Frontend

The frontend is built with Next.js, a React framework. It includes various pages and components for displaying the personal profile information.

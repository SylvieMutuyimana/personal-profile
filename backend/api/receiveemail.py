from flask import Flask, request, jsonify
from flask_cors import CORS
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
#imports
app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/send-email', methods=['POST'])
def send_email():
    data = request.get_json()
    sender_email = data['name']
    email = data['email']
    phoneNum = data['phoneNum']
    message = data['message']

    try:
        receiver_email = "mutuyimanasylvie@gmail.com"

        msg = MIMEMultipart()
        msg['From'] = email
        msg['To'] = receiver_email
        msg['Subject'] = "Reaching out to you from your website"

        body = f"Hello, my name is {name}, my email is {sender_email}, my phone number is {phoneNum}. The message is: {message}"
        msg.attach(MIMEText(body, 'plain'))

        server = smtplib.SMTP('localhost', 1025)
        text = msg.as_string()
        server.sendmail(sender_email, receiver_email, text)
        server.quit()

        return jsonify({'message': 'Email sent successfully'}), 200
    except Exception as e:
        print(e)
        return jsonify({'message': 'Error sending email'}), 500

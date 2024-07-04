from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

def sendtheEmail(sender_email, receiver_email, subject, body, sender_password):
    # SMTP server setup (Gmail)
    smtp_server = 'smtp.gmail.com'
    smtp_port = 587  # For SSL use 465

    # Create a multipart message and set headers
    message = MIMEMultipart()
    message['From'] = receiver_email
    message['To'] = receiver_email
    message['Subject'] = subject

    # Add body to email
    message.attach(MIMEText(body, 'plain'))

    # Log in to the server
    try:
        server = smtplib.SMTP(smtp_server, smtp_port)
        server.starttls()  # Secure the connection
        server.login(sender_email, sender_password)

        # Send email
        server.sendmail(sender_email, receiver_email, message.as_string())
        return jsonify({'message': 'Email sent successfully'}), 200
    except Exception as e:
        return jsonify({'message': 'Error sending email'}), 500
    finally:
        server.quit()  # Disconnect from the server
        
@app.route('/send-email', methods=['GET', 'POST'])
def sendEmail_Route():
    if request.method == 'POST':
        # Check if the data is in JSON format
        if request.is_json:
            data = request.get_json()
            name = data.get('name')
            sender_email = data.get('email')
            phoneNum = data.get('phoneNum')
            body = data.get('message')
        else:
            # Otherwise, assume it's form data
            name = request.form.get('name')
            sender_email = request.form.get('email')
            phoneNum = request.form.get('phoneNum')
            body = request.form.get('message')
        msg['Subject'] = "Reaching out to you from your website"

        receiver_email = "mutuyimanasylvie@gmail.com"
        sender_password = "mutuyimana sylvie"
        message = f"Hello, my name is {name}, my email is {sender_email}, my phone number is {phoneNum}. \n{body}"
        sendtheEmail(sender_email, receiver_email, subject, body, sender_password)

    else:
        return render_template('submitemail.html')

if __name__ == '__main__':
    app.run(debug=True)

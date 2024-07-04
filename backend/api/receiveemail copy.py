from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/send-email', methods=['GET', 'POST'])
def sendEmail_Route():
    if request.method == 'POST':
        # Check if the data is in JSON format
        if request.is_json:
            data = request.get_json()
            name = data.get('name')
            sender_email = data.get('email')
            phoneNum = data.get('phoneNum')
            message = data.get('message')
        else:
            # Otherwise, assume it's form data
            name = request.form.get('name')
            sender_email = request.form.get('email')
            phoneNum = request.form.get('phoneNum')
            message = request.form.get('message')
        
        print('name: ', name)
        print('sender_email: ', sender_email)
        print('phoneNum: ', phoneNum)
        print('message: ', message)

        try:
            receiver_email = "mutuyimanasylvie@gmail.com"
            msg = MIMEMultipart()
            msg['From'] = sender_email
            msg['To'] = receiver_email
            msg['Subject'] = "Reaching out to you from your website"

            body = f"Hello, my name is {name}, my email is {sender_email}, my phone number is {phoneNum}. \n{message}"
            msg.attach(MIMEText(body, 'plain'))

            server = smtplib.SMTP('localhost', 1025)
            text = msg.as_string()
            server.sendmail(sender_email, receiver_email, text)
            server.quit()

            return jsonify({'message': 'Email sent successfully'}), 200
        except Exception as e:
            print(e)
            return jsonify({'message': 'Error sending email'}), 500
    else:
        return render_template('submitemail.html')

if __name__ == '__main__':
    app.run(debug=True)

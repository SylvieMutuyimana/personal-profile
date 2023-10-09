import qrcode
import os

url = '192.168.30.21:3000'

def generate_qrcodes(url):
    # Construct the path to the stations.json file    
    features = qrcode.QRCode(version=1, box_size=40, border=4)
    # features.add_data(f"Meshpower\n{thecharger}")
    features.add_data(url)
    features.make(fit=True)
    qr_code = features.make_image(fill_color="green", back_color="black")
    script_dir = os.path.dirname(os.path.abspath(__file__))
    image_filename = os.path.join(script_dir, f"KagabaProfile.png")
    print('saving my profile qr')
    qr_code.save(image_filename)

if __name__ == "__main__":
    if url:
        generate_qrcodes(url)

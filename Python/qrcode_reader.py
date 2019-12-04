from pyzbar.pyzbar import decode
from PIL import Image

image = 'test.png'
data = decode(Image.open(image))

# rfile = open(data[0][0].decode('utf-8', 'ignore'))
# text = rfile.read()
# rfile.close()

wfile = open('qrcode.txt', mode='w', encoding='utf-8')

wfile.write(data[0][0].decode('utf-8', 'ignore'))
wfile.close()

print(data[0][0].decode('utf-8', 'ignore'))

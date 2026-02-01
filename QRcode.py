import qrcode
data = input("Enter data to be encoded in QR Code: ")
img = qrcode.make(data)
img.show()
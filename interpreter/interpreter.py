import pytesseract
from image_manager import Image

class Interpreter:
    def interpret(self, path):
        text = pytesseract.image_to_string(Image.open(path), lang="ocr+eng")
        print(text)  
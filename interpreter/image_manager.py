from PIL import Image as PilImage

class Image:
    @staticmethod
    def open(path):
        return PilImage.open(path)
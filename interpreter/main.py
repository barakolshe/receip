from fastapi import FastAPI, File, UploadFile
import json

app = FastAPI()

@app.post("/interpret")
async def interpret_file(image: UploadFile):
    with open("tmp/receipts/result.json") as result_file:
        return json.load(result_file)

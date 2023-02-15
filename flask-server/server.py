from flask import Flask
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

data = json.load(open("./data/news.json"))


@app.route("/news")
def news():
    return data


if __name__ == "__main__":
    app.run(debug=True)

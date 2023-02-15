from flask import Flask
import json

app = Flask(__name__)

data = json.load(open("data.json"))


@app.route("/news")
def news():
    return data


if __name__ == "__main__":
    app.run(debug=True)

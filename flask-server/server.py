from flask import Flask
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

news_data = json.load(open("./data/news.json"))
tweet_data = json.load(open("./data/tweets.json"))


@app.route("/news")
def news():
    return news_data


@app.route("/tweets")
def tweets():
    return tweet_data


if __name__ == "__main__":
    app.run(debug=True)

from flask import Flask, request
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
    index = request.args.get("index")
    if index:
        news_object = tweet_data[int(index)]
        if news_object:
            return news_object
        else:
            return f"No news object found with index {index}", 404
    else:
        return tweet_data


if __name__ == "__main__":
    app.run(debug=True)

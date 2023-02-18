import openai
import tweepy
import os
import ast
import pandas as pd
import json
import re

openai.api_key = "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"

consumer_key = "MSd2CjX2z3D7y8mTTPSQg3CsV"
consumer_secret = "5CFBQgrgWN2Fk9dr9vpYNyyHFTc8J1aiirtqnBPCiPseSgi0eJ"
access_token = "1304455384304762880-Ill9A1L1zXgurjH1Ap4bxLIAAW7Ds2"
access_token_secret = "5Bz93vrdl4tGjhe7LnaRRPPx6YaX2qLDEt3CaFImCkJLU"

# Authenticate to Twitter
auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(access_token, access_token_secret)
twitter_api = tweepy.API(auth)

# loading the news.json dataset
dtset = pd.read_json(os.path.join(os.path.dirname(__file__), "./data/news.json"))
queries = dtset.loc[:, "title"]

# looping through each article
final_data = []
pattern = re.compile(r"\d+\.\s*(.*)")  # matches one or more digits followed by a period, optionally followed by
# whitespace (the \s*), and then captures any character except a newline in a group (the (.*)).

for ix in range(3):
    prompt = """Give 2 most relevant topics based on
     following news headline: {}""".format(
        queries[ix]
    )
    response = openai.Completion.create(engine="text-davinci-003", prompt=prompt, max_tokens=256)

    # preprocessing responses generated by davinci model

    query_response = response["choices"][0]["text"]

    query_array = re.findall(pattern, query_response.strip())

    queries_noRetweets = list(map(lambda query: f"{query} -filter:retweets", query_array))
    query_string = " and ".join([f'"{term}"' for term in queries_noRetweets])
    query_expression = ast.parse(query_string, mode="eval").body
    # print(query_expression)
    recent_tweets = twitter_api.search_tweets(q=query_expression, count=3)

    print(recent_tweets)
#     tweet_json_data = {"title_of_article": queries[ix], "search_query": query_string, "tweets": []}
#     image_url = []
#     video_url = None
#     for tweet in recent_tweets:
#         url_of_tweet = "https://twitter.com/twitter/statuses/" + str(tweet.id)
#         if "media" in tweet.entities:
#             for image in tweet.entities["media"]:
#                 image_url += image["media_url"]
#         if "extended_entities" in tweet._json:
#             video_url = tweet.extended_entities["media"][0]["video_info"]["variants"][0]["url"]
#         if tweet.text and url_of_tweet:
#             v1 = int(tweet.retweet_count)
#             v2 = int(tweet.favorite_count)
#             score = v1 * (0.6) + v2 * (0.4)
#             tweet_json_data["tweets"].append(
#                 {
#                     "tweet_id": tweet.id,
#                     "tweet_content": tweet.text,
#                     "tweet_url": url_of_tweet,
#                     "tweet_images_url": image_url,
#                     "tweet_video_url": video_url,
#                     "tweet_retweetcount": v1,
#                     "tweet_likecount": v2,
#                     "tweet_score": score,
#                 }
#             )

#     final_data.append(tweet_json_data)

# # writing the tweets into a json file
# with open("tweets.json", "w") as json_file:
#     json.dump(final_data, json_file)

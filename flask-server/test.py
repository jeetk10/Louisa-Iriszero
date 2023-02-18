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
api = tweepy.API(auth, wait_on_rate_limit=True)

# search_query = "Narendra Modi -filter:retweets"

# # Search for tweets containing search query
# tweets = tweepy.Cursor(api.search_tweets, q=search_query, tweet_mode="extended", include_entities=True).items(1)

tweets = api.get_status("1626829257459793920", tweet_mode="extended")
# Extract video URLs from tweets

# if "extended_entities" in tweets._json:
#     media = tweets["extended_entities"]["media"][0]
#     video_url = media["video_info"]["variants"][1]["url"]
#     print(video_url)
# else:
#     print("No video found in the tweet.")
print(tweets["id"])

# with open("tweets_sample.json", "w") as f:
#     json.dump(tweets._json, f)
#     f.write("\n")

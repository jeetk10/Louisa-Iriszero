import textrazor
import tweepy
import re

consumer_key = "MSd2CjX2z3D7y8mTTPSQg3CsV"
consumer_secret = "5CFBQgrgWN2Fk9dr9vpYNyyHFTc8J1aiirtqnBPCiPseSgi0eJ"
access_token = "1304455384304762880-Ill9A1L1zXgurjH1Ap4bxLIAAW7Ds2"
access_token_secret = "5Bz93vrdl4tGjhe7LnaRRPPx6YaX2qLDEt3CaFImCkJLU"
# Authenticate to Twitter
auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(access_token, access_token_secret)
api = tweepy.API(auth)

textrazor.api_key = "3954483c7ed591de1dde3d2f9d17b3d7427f0cf75411dbeaf327b170"
client = textrazor.TextRazor(extractors=["entities", "topics"])
client.set_cleanup_mode("cleanHTML")
client.set_classifiers(["textrazor_newscodes"])
response = client.analyze_url(
    "https://www.cityam.com/a-big-tech-style-restructure-in-whitehall-might-just-make-our-science-sector/"
)

# this will give us all entities be it topics,categories,people mentioned,expertise fields,etc.
# entities = list(response.entities())
# entities.sort(key=lambda x: x.relevance_score, reverse=True)
# seen = set()
# for entity in entities:
#     if entity.id not in seen:
#         print(entity.id)
#         seen.add(entity.id)

# this is for printing topics
# for topic in response.topics():
#  	if topic.score > 0.3:
#  		print(topic.label)


for category in response.categories():
    print(category.label)
    tweets = []
    query = f"{category.label} -filter:retweets"
    recent_tweets = api.search_tweets(q=query, count=3)
    for tweet in recent_tweets:
        tweets.append(tweet.text)
    for tweet in tweets:
        print(tweet)

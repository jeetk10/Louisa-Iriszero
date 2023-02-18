import pytz
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from datetime import datetime


def find_score(
    user_description,
    user_followers,
    tweet_created_at,
    tweet_full_text,
    likes,
    retweets,
    hashtags,
    news_title,
    news_text,
    news_date,
):
    # preprocess the tweet and news text
    if hashtags:
        tweet_text = user_description + " " + tweet_full_text + " " + " ".join(str(x) for x in hashtags.values())
    else:
        tweet_text = user_description + " " + tweet_full_text
    news_text = news_title + " " + news_text

    # convert tweet and news text to a TF-IDF representation
    tfidf_vectorizer = TfidfVectorizer()
    tfidf_matrix = tfidf_vectorizer.fit_transform([tweet_text, news_text])

    # compute cosine similarity between tweet and news text
    similarity = cosine_similarity(tfidf_matrix)[0, 1]

    # adjust similarity score based on tweet and news metadata
    follower_weight = min(user_followers / 1000000, 1)  # normalize follower count between 0 and 1
    time_weight = (
        datetime.now(pytz.utc) - tweet_created_at.replace(tzinfo=pytz.utc)
    ).days / 365  # normalize time difference between 0 and 1
    like_weight = min(likes / 1000, 1)  # normalize like count between 0 and 1
    retweet_weight = min(retweets / 1000, 1)  # normalize retweet count between 0 and 1
    metadata_weight = (follower_weight + time_weight + like_weight + retweet_weight) / 4  # take average of weights

    # compute time difference between tweet creation time and news publication time
    news_datetime = datetime.strptime(news_date, "%B %d, %Y ")
    news_datetime = news_datetime.replace(tzinfo=pytz.utc)
    time_diff = (news_datetime - tweet_created_at).days / 365  # normalize time difference between 0 and 1

    # compute final score as weighted average of similarity and metadata, with an additional weight for time difference
    score = 0.7 * similarity + 0.2 * metadata_weight + 0.1 * (1 - time_diff)

    return score

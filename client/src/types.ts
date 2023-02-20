export interface Tweet {
    tweet_id: string;
    tweet_created_at: string,
    tweet_text: string;
    hashtags: string[];
    tweet_url: string;
    tweet_images_url: [];
    tweet_video_info: {};
    user_info: {};
    tweet_retweetcount: number;
    tweet_likecount: number;
    tweet_score: number;
}

export interface Tweets {
    title_of_article: string;
    search_query: string;
    tweets: Tweet[];
}
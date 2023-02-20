export interface VideoVariants {
    bitrate: number;
    content_type: string;
    url: string;
}


export interface Tweet {
    tweet_id: string;
    tweet_created_at: string,
    tweet_text: string;
    hashtags: string[];
    tweet_url: string;
    tweet_images_url: [];
    tweet_video_info: {
        aspect_ratio: number[];
        duration_millis: number;
        variants: VideoVariants[];
    };
    user_info: {
        name: string;
        screen_name: string;
        profile_image_url: string;
        location: string;
        description: string;
        friends: number;
        followers: number;
    };
    tweet_retweetcount: number;
    tweet_likecount: number;
    tweet_score: number;
}

export interface Tweets {
    title_of_article: string;
    search_query: string;
    tweets: Tweet[];
}
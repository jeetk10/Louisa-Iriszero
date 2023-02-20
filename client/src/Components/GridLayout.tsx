import { useState, useEffect } from "react";
import axios from "axios";
import {
  Button,
  Center,
  Flex,
  Link,
  Heading,
  SimpleGrid,
  Spacer,
} from "@chakra-ui/react";

import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";

import Cards from "../Components/Card";
import { getTweets } from "../api";
import { Tweet, Tweets } from "../types";

const GridLayout = () => {
  const [data, setData] = useState<Tweets[]>([]);
  useEffect(() => {
    (async () => {
      setData(await getTweets());
    })();
  }, []);

  var currentId=0
  async function handlePreviousClick(){
    currentId=currentId-1
    let url="http://localhost:5000/tweets?index="+currentId
    var res=await axios.get(url)
    console.log(res.data)
  }
  async function handleNextClick(){
    currentId=currentId+1
    let url="http://localhost:5000/tweets?index="+currentId
    var res=await axios.get(url)
    console.log(res.data)
  }
  return (
    <>
    <       Flex>
              <Button
                variant="outline"
                mx="2em"
                colorScheme="blue"
                leftIcon={<GrLinkPrevious />}
                onClick={handlePreviousClick}
              >
                Previous
              </Button>
              <Spacer />
              <Button
                variant="outline"
                mx="2em"
                colorScheme="blue"
                leftIcon={<GrLinkNext />}
                onClick={handleNextClick}
              >
                Next
              </Button>
            </Flex>
    <div>
      {
      data.map((each_title) => {
        return each_title["tweets"] && each_title["tweets"].length > 0 ? ( //Does not return the news articles which contain 0 tweets
          <>
            <Flex marginTop={10}>
              <Spacer/>
              <Heading
                boxShadow="lg"
                bgGradient="linear(to-t,gray.100,gray.200)"
              >
                <Center
                  textAlign="justify"
                  sx={{
                    transition: "box-shadow 0.3s",
                    "&:hover": {
                      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.25)",
                    },
                  }}
                  px="0.5em"
                  pb="0.2em"
                  pt="0.15em"
                  fontFamily="serif"
                >
                  <Link
                    sx={{
                      textDecoration: "none",
                      color: "gray.800",

                      "&:hover": {
                        textDecor: "none",
                        color: "gray.600",
                      },
                    }}
                  >
                    {each_title["title_of_article"]}
                  </Link>
                </Center> 
              </Heading>
              <Spacer />
            </Flex>
            <SimpleGrid columns={4}>
              {each_title["tweets"].map((tweet) => {
                return (
                  <Cards
                    userName={tweet.user_info.name}
                    tweetContent={tweet.tweet_text}
                    profileImage={tweet.user_info.profile_image_url}
                    screenName={tweet.user_info.screen_name}
                    mediaURL={tweet.tweet_images_url}
                    likeCount={tweet.tweet_likecount}
                    retweet={tweet.tweet_retweetcount}
                    video={tweet.tweet_video_info?.variants?.map(
                      (video_urls) => {
                        return video_urls.url;
                      }
                    )}
                  />
                );
              })}
            </SimpleGrid>
          </>
        ) : null;
      })}
    </div>
    </>
  );

};

export default GridLayout;

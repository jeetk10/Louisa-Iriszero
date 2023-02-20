import {
  Button,
  Center,
  Grid,
  Link,
  GridItem,
  SimpleGrid,
  Spacer,
  LinkBox,
} from "@chakra-ui/react";
import { Box, Container } from "@chakra-ui/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Avatar,
  Heading,
  Text,
  IconButton,
  Image,
} from "@chakra-ui/react";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
import data from "../../../flask-server/data/tweets.json";
import Cards from "../Components/Card";

const image = data.map((each_title) => {
  return each_title.tweets.map((video) => {
    return video.tweet_images_url;
  });
});
console.log(image);
const GridLayout = () => {
  return (
    <div>
      {data.map((each_title) => {
        return each_title.tweets && each_title.tweets.length > 0 ? ( //Does not return the news articles which contain 0 tweets
          <>
            <Flex marginTop={10}>
              <Button
                variant="outline"
                mx="2em"
                colorScheme="blue"
                leftIcon={<GrLinkPrevious />}
              >
                Previous
              </Button>
              <Spacer />
              <Heading
                boxShadow="lg"
                bgGradient="linear(to-t,gray.100,gray.200)"
              >
                <Center
                  textAlign="justify"
                  px="0.5em"
                  pb="0.2em"
                  pt="0.15em"
                  fontFamily="serif"
                >
                  <Link
                    sx={{
                      textDecoration: "none",
                      color: "gray.800",
                      transition: "box-shadow 0.3s",
                      "&:hover": {
                        textDecor: "none",
                        color: "gray.600",
                        boxShadow: "0 1px 2px rgba(0, 0, 0, 0.25)",
                      },
                    }}
                  >
                    {each_title.title_of_article}
                  </Link>
                </Center>
              </Heading>
              <Spacer />
              {/* onClick={nextPage()} */}
              <Button
                variant="outline"
                mx="2em"
                colorScheme="blue"
                leftIcon={<GrLinkNext />}
              >
                Next
              </Button>
            </Flex>
            <SimpleGrid columns={4}>
              {each_title.tweets.map((tweet) => {
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
  );

  //  async function nextPage(){
  //   return(window.location.replace(""))
  // }
};

export default GridLayout;

import { Button, Center, Grid, GridItem, SimpleGrid, Spacer } from "@chakra-ui/react";
import { Box, Container } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter,Flex,Avatar,Heading,Text,IconButton,Image} from '@chakra-ui/react'
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
import data from '../../../flask-server/data/tweets.json';
import Cards from '../Components/Card'


const image=data.map(each_title=>{
  return(
    each_title.tweets.map( video=>{
      return(video.tweet_images_url)
    })
  )
})
console.log(image);
const GridLayout = () => {
  return(
    <div>
      {data.map(each_title=>{
      return(
        each_title.tweets && each_title.tweets.length>0 ?    //Does not return the news articles which contain 0 tweets
        <>
        <Flex marginTop={10}>
          <Button variant='solid' colorScheme={"teal"} leftIcon={<GrLinkPrevious/>}>Previous</Button>
          <Spacer/>
          <Heading><Center><a>{each_title.title_of_article}</a></Center></Heading>
          <Spacer/>
          {/* onClick={nextPage()} */}
           <Button variant='solid' colorScheme={"teal"}   leftIcon={<GrLinkNext/>}>Next</Button>
        </Flex>
        <SimpleGrid columns={4}>
          {each_title.tweets.map(tweet=>{
            return(
              
                <Cards 
                  userName={tweet.user_info.name}
                  tweetContent={tweet.tweet_text} 
                  profileImage={tweet.user_info.profile_image_url} 
                  screenName={tweet.user_info.screen_name}
                  mediaURL={tweet.tweet_images_url}
                  likeCount={tweet.tweet_likecount}
                  retweet={tweet.tweet_retweetcount}
                  video={tweet.tweet_video_info?.variants?.map(video_urls=>{
                    return(video_urls.url)
                  })}
                />
            
            )
          }
          )}
          </SimpleGrid>
          
        </> 
        :null
      )
    })
  }
    </div>
  )

  //  async function nextPage(){
  //   return(window.location.replace(""))
  // }
};

export default GridLayout;

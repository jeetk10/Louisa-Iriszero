import { Center, Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import { Box, Container } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter,Flex,Avatar,Heading,Text,IconButton,Image} from '@chakra-ui/react'
import data from '../../../flask-server/data/tweets.json';
import Cards from '../Components/Card'


const GridLayout = () => {
  return(
    <Box alignItems="center">
      {data.map(each_title=>{
      return(
        <>
        <Heading>{each_title.title_of_article}</Heading>
          {each_title.tweets.map(tweet=>{
            return(
              <SimpleGrid>
                <Cards 
                  userName={tweet.user_info.name}
                  tweetContent={tweet.tweet_text} 
                  profileImage={tweet.user_info.profile_image_url} 
                  screenName={tweet.user_info.screen_name}
                  mediaURL={tweet.tweet_url}
                  // video={tweet.tweet_url}
                />
            </SimpleGrid>
            )
          }
          )}
        </> 
      )
    })
  }
    </Box>
    
    
  )

  // return (
    
  //   data && data.map( records=>{
  //     return(
  //       records && records.map(innerData=>{
  //         return(
  //         innerData && innerData.map(x=>{
  //           return(
  //             <Box>
  //             <Heading colorScheme={"whiteAlpha"} >{x.title_of_article}</Heading>
  //             <SimpleGrid spacing={4}>
  //             {x.tweets && x.tweets.map(content=>{
  //               return(
  //               <><Cards userName="Team Iris_Zero" tweetContent={content.tweet_content} /><div id="root"></div></>
  //               )
  //             })
  //           }
  //             </SimpleGrid >
  //           </Box>
  //           )
  //       })
  //         )
  //       })
  //     )
  //   })
  // );
};

export default GridLayout;

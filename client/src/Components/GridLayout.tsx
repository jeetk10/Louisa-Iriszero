import { Center, Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import { Box, Container } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter,Flex,Avatar,Heading,Text,IconButton,Image} from '@chakra-ui/react'
import data from '../../../flask-server/data/tweets.json';
import Cards from '../Components/Card'
const GridLayout = () => {
 

  return (
    
    data.map( records=>{
      return(
        records.map(innerData=>{
          return(
          innerData.map(x=>{
            return(
              x.tweets.map(content=>{
                return(
                <Cards userName="Team Iris_Zero" tweetContent={content.tweet_content}/>
                )
              })
            )
        })
          )
        })
      )
    })
  );
};

export default GridLayout;

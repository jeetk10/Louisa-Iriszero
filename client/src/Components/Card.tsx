import {Button, Card, CardFooter, Divider, Icon} from "@chakra-ui/react";
import {Avatar, Box, CardBody, CardHeader, Flex, Heading,Text,Image } from "@chakra-ui/react";
import { FcLike } from "react-icons/fc"
import {FaRetweet} from "react-icons/fa"

const Cards=(props: { 
    userName: string | undefined,
    tweetContent: string | undefined;
    profileImage: string | undefined;
    screenName: string | undefined;
    mediaURL: any[] | string | undefined;
    video:  any[] |string | undefined;
    likeCount: number | undefined;
    retweet: number | undefined;
}
    )=>{

    return (
        <div id="root">
            <Card maxW='md' margin="10" maxH="md" overflow={"scroll"}>
                <CardHeader>
                    <Flex>
                        <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                            <Avatar name={props.profileImage} src={props.profileImage} />
                            <Box>
                                <Heading size='sm'>{props.userName}</Heading>
                                <Text>@{props.screenName}</Text>
                            </Box>
                        </Flex>
                    </Flex>
                </CardHeader>
                <CardBody>
                    <Text>
                        {props.tweetContent}
                    </Text>
                    {props.mediaURL && props.mediaURL.length>0 && props.video?.length==null ? 
                    <Image
                        objectFit='cover'
                        src={props.mediaURL}
                        alt={props.mediaURL}
                    />
                    : null}
                    {   props.video && props.video.length>0 ?
                        <video src={props.video} width="cover" height="300px" controls></video>
                        :null
                    }
                    
                    
                </CardBody>
                <CardFooter
                    flexWrap='wrap'
                 >
                    <Button variant='ghost' leftIcon={<FcLike/>} >{props.likeCount}</Button>
                    <Button variant='ghost' leftIcon={<FaRetweet/>}>{props.retweet}</Button>
                </CardFooter>

            </Card>
        </div>
    );
}

export default Cards;
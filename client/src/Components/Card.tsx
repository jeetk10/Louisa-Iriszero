import {Card, IconButton} from "@chakra-ui/react";
import {Avatar, Box, CardBody, CardHeader, Flex, Heading,Text,Image } from "@chakra-ui/react";


const Cards=(props: { 
    userName: string | undefined,
    tweetContent: string | undefined;
    profileImage: string | undefined;
    screenName: string | undefined;
    mediaURL: string | undefined;
    // video: string | undefined;
}
    )=>{

    return (
        <div id="root">
            <Card maxW='md' margin="10">
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
                    {/* <Image
                        objectFit='cover'
                        src={props.mediaURL}
                        alt={props.mediaURL}
                    /> */}
                    {/* <video src={props.video} width="cover" height="cover" controls></video> */}
                </CardBody>

            </Card>
        </div>
    );
}

export default Cards;
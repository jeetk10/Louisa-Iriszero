import {Card, IconButton} from "@chakra-ui/react";
import {Avatar, Box, CardBody, CardHeader, Flex, Heading,Text } from "@chakra-ui/react";
import React from "react";

const Cards=(props: { 
    userName: string | undefined,
    tweetContent: string | undefined;
}
    )=>{

    return (
        <div id="root">
            <Card maxW='md' margin="10">
                <CardHeader>
                    <Flex>
                        <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                            <Avatar name={props.userName} src="" />

                            <Box>
                                <Heading size='sm'>{props.userName}</Heading>
                            </Box>
                            
                        </Flex>
                    </Flex>
                </CardHeader>
                <CardBody>
                    <Text>
                        {props.tweetContent}
                    </Text>
                </CardBody>

            </Card>
        </div>
    );
}

export default Cards;
import {Box, Flex, HStack, Divider, Center} from '@chakra-ui/react'
import {Outlet, Link} from "react-router-dom"
import {Helmet} from "react-helmet";
import React from "react";

export default function App() {
    return (
        <Box>
            <Helmet>
                <title>P2P - Playstation To PC</title>
            </Helmet>
            <Box bg='brand' color={"whitesmoke"} px={4}>
                <HStack spacing='12px'>
                    <Flex h={50} alignItems={'center'}>
                        P2P : Playstation To PC
                    </Flex>
                    <Center height={'40px'}>
                        <Divider orientation='vertical'/>
                    </Center>
                    <Link to="/">Home</Link>
                    <Center height={'40px'}>
                        <Divider orientation='vertical'/>
                    </Center>
                    <Link to="/about">About</Link>
                </HStack>
            </Box>
            <Box style={{padding: "1rem 0"}}> <Outlet/> </Box>
        </Box>
    );
}

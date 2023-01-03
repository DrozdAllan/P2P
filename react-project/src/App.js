import {Box, Flex, HStack, Divider, Center, Text} from '@chakra-ui/react'
import {Outlet, Link} from "react-router-dom"
import {Helmet} from "react-helmet";
import React from "react";

export default function App() {
    return (
        <Box>
            <Helmet>
                <title>P2P - Playstation To PC</title>
            </Helmet>
            <Box bg='brand' color="whitesmoke" px="4">
                <HStack spacing='12px'>
                    <Flex h="50" alignItems="center">
                        <Text fontSize={["sm","md"]}>
                        P2P : Playstation To PC
                        </Text>
                    </Flex>
                    <Center height="40px">
                        <Divider orientation='vertical'/>
                    </Center>
                    <Link to="/">
                        <Text fontSize={["sm","md"]}>
                        Home
                        </Text>
                    </Link>
                    <Center height="40px">
                        <Divider orientation='vertical'/>
                    </Center>
                    <Link to="/about">
                        <Text fontSize={["sm","md"]}>
                            About
                        </Text>
                    </Link>
                </HStack>
            </Box>
            <Box py="6"> <Outlet/> </Box>
        </Box>
    );
}

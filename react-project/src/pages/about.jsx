import React from "react";
import {Box, Text, Link} from "@chakra-ui/react";

export default function About() {
    return (
    <Box align={'center'}>
        <Text fontSize={{ base: '2xl', md:'3xl' }}>
           About this app
        </Text>
        <Text mt="5">
            This app is developed by <Link href="https://allandrozd.com/" isExternal fontWeight='bold'>Allan Drozd</Link>
        </Text>
    </Box>
    );
}

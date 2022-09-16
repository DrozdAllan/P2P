import React from "react";
import {Box, Text, Link} from "@chakra-ui/react";
import GameComponent from "../components/gameComponent";

export default function About() {
    return (
        <div>
    <Box>
        <Text fontSize="2xl">
           About this app
        </Text>
        <Text mt="5">
            This app is developed by <Link href="https://allandrozd.com/" isExternal>Allan Drozd</Link>
        </Text>
    </Box>
        </div>
    );
}

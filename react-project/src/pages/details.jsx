import React from "react";
import {useParams} from "react-router-dom";
import GameComponent from '../components/gameComponent';
import {Box} from "@chakra-ui/react";

export default function Details() {
    const {id} = useParams();

    return (
        <Box>
            <GameComponent id={id}/>
        </Box>
    );
}

import React from "react";
import {useParams} from "react-router-dom";
import GameComponent from '../components/gameComponent';
import {Box} from "@chakra-ui/react";

export default function Details() {
    const {id} = useParams();

    return (
        <Box style={{padding: "1rem 0"}}>
            <GameComponent id={id}/>
        </Box>
    );
}

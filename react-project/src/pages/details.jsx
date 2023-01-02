import React from "react";
import {useParams} from "react-router-dom";
import GameComponent from '../components/gameComponent';

export default function Details() {
    const {id} = useParams();

    return (
        <main style={{padding: "1rem 0"}}>
            <GameComponent id={id} />
        </main>
    );
}

import React from "react";
import { useContext } from "react";
import {AppContext} from '../App';

export const Home = () => {
    const { username  } = useContext(AppContext);
    return <h1> THIS IS HOME PAGE and username is: {username} </h1>
}
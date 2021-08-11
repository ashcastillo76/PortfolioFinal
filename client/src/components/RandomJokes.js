import axios from 'axios';
import { React, useState, useEffect } from 'react'

const RandomJokes = () => {
    const [ joke, setJoke ] = useState({});

    const jokeAPI = async () =>{
        let arrayOfJokes = [];
        try{
            const data = axios.get('https://officeapi.dev/api/quotes/random');
            console.log(data);
        }catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        jokeAPI();
    }, [])

    return (
        <div>
            {joke.data}
        </div>
    )
}

export default RandomJokes;

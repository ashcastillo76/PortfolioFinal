import axios from 'axios';
import React, { useState, useEffect } from 'react'


function QuoteAndAuthor() {
const [quote, setQuote] = useState('"Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me."');
const [author, setAuthor] = useState("Michael Scott")

useEffect(() => {
    axios.get("https://officeapi.dev/api/quotes/random")
    .then(
        (quote) => {
            setQuote(quote.data.content);
            setAuthor(quote.data.character.firstname);
        }
    )
},[])

let getRandomQuote = () => {
    fetch("https://officeapi.dev/api/quotes/random")
    .then(res => res.json())
    .then(
        (quote) => {
            setQuote(quote.content);
            setAuthor(quote.character);
        }
    )
}

    return (
            <div className="cardBody">
                <p className="card-text">{quote}</p>
                <h5 className="card-title">-- {author}</h5>
            </div>
    )
}
export default QuoteAndAuthor;
import React, { useState, useEffect } from "react";
import './HomePage.css'

const HomePage = () => {
  const [quoteData, setQuoteData] = useState(null);

  useEffect(() => {
    const cachedQuote = localStorage.getItem("quote");
    const cachedTime = localStorage.getItem("quoteTime");

    // Current timestamp in milliseconds
    const now = new Date().getTime();

    // Check if we have a cached quote and if it's less than 24 hours old
    if (cachedQuote && cachedTime && (now - cachedTime < 24 * 60 * 60 * 1000)) {
      setQuoteData(JSON.parse(cachedQuote));
    } else {
      fetchQuoteFromAPI();
    }
  }, []);

  const fetchQuoteFromAPI = () => {
   const url = 'https://quotes-by-api-ninjas.p.rapidapi.com/v1/quotes';
   const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '615b0fc0b0msh2910a64eb542accp19fad2jsn802d83f8a850',
		'X-RapidAPI-Host': 'quotes-by-api-ninjas.p.rapidapi.com'
	}
   };

    fetch(url, options)
      .then(response => response.json())
      .then(data => {
        setQuoteData(data);
        localStorage.setItem("quote", JSON.stringify(data));
        localStorage.setItem("quoteTime", new Date().getTime());
      })
      .catch(error => {
        console.error("Error fetching quote:", error);
      });
  };

  if (!quoteData) {
    return <div>Loading...</div>;
  }

  return (
      <div className="quoteContainer" >
         <h5><i><b>{quoteData[0].quote}</b></i></h5>
         <p>-{quoteData[0].author}</p>
      </div>
      );
  
};

export default HomePage;



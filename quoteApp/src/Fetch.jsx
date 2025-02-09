import React, { useState, useEffect } from 'react';
import './App.css';

const API_URL = 'https://api.api-ninjas.com/v1/quotes';
const API_KEY = '1o60nPBiT5aVZ298KApx+w==iYh7w5XVpwj5zs9J';

function FetchQuotes() {
    // error handling and state storing variables
  const [quote, setQuote] = useState(null);
  const [error, setError] = useState(null);

  // Function to fetch a random quote
  const fetchQuote = async () => {
    try {
      setError(null); // Reset errors before new fetch
      console.log('Fetching quote...'); //loading msg for console

      const response = await fetch(API_URL, {
        method: 'GET',
        headers: {
          'X-Api-Key': API_KEY, // 🔹 Required API key
        },
      });

      console.log('Response:', response);

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
 

      if (data.length > 0) {
        setQuote(data[0]); // API returns an array with one quote object
      } else {
        setError('No quotes found.');
      }
    } catch (err) {
      console.error('Fetch error:', err);
      setError(err.message);
    }
  };

  // Fetch a quote when the component mounts
  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="quote-container">
      <h1>Inspirational Quotes</h1>
      {error && <div className="error">{error}</div>}
      {quote && (
        <div className="quote-card">
          <p className="quote">"{quote.quote}"</p>
          <p className="author">- {quote.author}</p>
        </div>
      )}
      <button onClick={fetchQuote}>Get New Quote</button>
    </div>
  );
}

export default FetchQuotes;

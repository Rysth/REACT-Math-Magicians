import { useEffect, useState } from 'react';
import QuoteLoading from './QuoteLoading';
import './Quote.css';

const API = 'https://api.api-ninjas.com/v1/quotes';

export default function Quote() {
  const [quote, setQuote] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchNinjaAPI = async () => {
      try {
        const response = await fetch(API, {
          method: 'GET',
          headers: {
            'X-Api-Key': process.env.REACT_APP_API_KEY,
          },
        });
        const data = await response.json();
        setQuote({
          message: data[0]?.quote,
          author: data[0]?.author,
        });
      } catch (error) {
        setError(true);
        throw new Error('Error fetching data.');
      }
    };

    fetchNinjaAPI();

    setTimeout(() => {
      setLoading(true);
    }, 1500);
  }, []);

  return (
    <div className="quote">
      {!loading && !error ? (
        <QuoteLoading timer={500} />
      ) : (
        <>
          <p className="quote-description">{quote ? quote.message : ''}</p>
          <p className="quote-description author">{quote ? quote.author : ''}</p>
        </>
      )}
    </div>
  );
}

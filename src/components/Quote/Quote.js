import { useEffect, useState } from 'react';
import QuoteLoading from './QuoteLoading';
import './Quote.css';

const API = 'https://api.api-ninjas.com/v1/quotes';
const API_KEY = 'ZHOU94s8oucCFyxrpI2JwA==M2wNPrWjlPP3IxK8';

export default function Quote() {
  const [quote, setQuote] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchNinjaAPI = async () => {
      try {
        const response = await fetch(API, {
          method: 'GET',
          headers: {
            'X-Api-Key': API_KEY,
          },
        });
        const data = await response.json();
        setQuote({
          message: data[0]?.quote,
          author: data[0]?.author,
        });
      } catch (error) {
        throw new Error('Error fetching data.');
      }
    };

    fetchNinjaAPI();

    setTimeout(() => {
      setLoading(true);
    }, 1000);
  }, []);

  return (
    <div className="quote">
      {!loading ? (
        <QuoteLoading timer={1000} />
      ) : (
        <>
          <p className="quote-description">{quote ? quote.message : ''}</p>
          <p className="quote-description author">{quote ? quote.author : ''}</p>
        </>
      )}
    </div>
  );
}

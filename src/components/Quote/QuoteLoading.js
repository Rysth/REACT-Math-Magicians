import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

export default function QuoteLoading({ timer }) {
  const [message, setMessage] = useState('Loading');

  useEffect(() => {
    const interval = setInterval(() => {
      setMessage((prevMessage) => {
        if (prevMessage === 'Loading...') {
          clearInterval(interval);
          return prevMessage;
        }
        return prevMessage.concat('.');
      });
    }, timer);

    return () => {
      clearInterval(interval);
    };
  }, [timer]);

  return <p className="quote-loading">{message}</p>;
}

QuoteLoading.defaultProps = {
  timer: 1000,
};

QuoteLoading.propTypes = {
  timer: PropTypes.number,
};

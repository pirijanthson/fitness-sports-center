import { useState, useEffect } from 'react';
import ScrollReveal from '../ScrollReveal'
import './QuoteSection.css';

const fallbackQuotes = [
  { text: "The only bad workout is the one that didn't happen.", author: "Unknown" },
  { text: "Strength does not come from winning. Your struggles develop your strengths.", author: "Arnold Schwarzenegger" },
  { text: "Definition of a really good workout: when you hate doing it, but you love finishing it.", author: "Unknown" },
  { text: "The clock is ticking. Are you becoming the person you want to be?", author: "Greg Plitt" },
  { text: "Your body can stand almost anything. It’s your mind that you have to convince.", author: "Unknown" }
];

export default function QuoteSection() {
  const [quote, setQuote] = useState(fallbackQuotes[0]);
  const [loading, setLoading] = useState(true);

  const fetchQuote = async () => {
    setLoading(true);
    try {
      // Using Quotable API with tags
      const response = await fetch('https://api.quotable.io/random?tags=fitness,motivational');
      if (!response.ok) throw new Error('API unstable');
      const data = await response.json();
      if (data.content) {
        setQuote({ text: data.content, author: data.author });
      } else {
        throw new Error('No content');
      }
    } catch (error) {
      console.warn('Quote API failed, using fallback.');
      const randomFallback = fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)];
      setQuote(randomFallback);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <section className="quote-section">
      <ScrollReveal direction="down" distance={40}>
        <div className="container quote__container">
          <div className="quote__icon">
            <i className="fa-solid fa-quote-left"></i>
          </div>
          <div className={`quote__content ${loading ? 'quote__content--loading' : ''}`}>
            <p className="quote__text">"{quote.text}"</p>
            <p className="quote__author">— {quote.author}</p>
          </div>
          <button 
            className="quote__refresh" 
            onClick={fetchQuote} 
            disabled={loading} 
            aria-label="Refresh quote"
            title="Get another dose of motivation"
          >
            <i className={`fa-solid fa-arrows-rotate ${loading ? 'fa-spin' : ''}`}></i>
          </button>
        </div>
      </ScrollReveal>
    </section>
  );
}

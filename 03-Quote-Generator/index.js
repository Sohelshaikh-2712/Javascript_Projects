const quotes = [
  {quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: 'Nelson Mandela'
  },
  {quote: "The future belongs to those who believe in the beauty of their dreams.",
    author: 'Eleanor Roosevelt'
  },
  {quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    author: 'Mother Teresa'
  },
  {quote: "never give up on yourself and  your dreams",
    author: 'Sohel shaikh'
  },
  {quote: "You must be the change you wish to see in the world",
    author: 'Mahatma Gandhi'
  },
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde"
  },
  {
    quote: "Life is really simple, but we insist on making it complicated.",
    author: " Confucius"
  },
  {
    quote: "If you want to make your dreams come true, the first thing you have to do is wake up.",
    author: "J.M. Power"
  },
  {
    quote: "You will face many defeats in life, but never let yourself be defeated.",
    author: "Maya Angelou"
  },
  {
    quote: "It is during our darkest moments that we must focus to see the light",
    author: "Aristotle"
  }
  
]


const quote = document.querySelector("#quote");
const author = document.querySelector("#author");
const btn = document.querySelector("#newQuote");


const displayQuote=()=>{
  let random = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[random].quote;
  author.innerText = `~${quotes[random].author}`;
}

window.onload = displayQuote;

btn.addEventListener("click", displayQuote);


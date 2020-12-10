import React, { useState ,  useEffect }from 'react';
import './App.css';


function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  let index; 

  const getQuote = function get(){ fetch("https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
  .then(response => response.json())
  .then(data => {
    index = Math.floor(Math.random() * data.quotes.length);
    setQuote(data.quotes[index].quote);
    setAuthor(data.quotes[index].author);
  })}
  
  useEffect(getQuote, []);

  // eslint-disable-next-line
  let twitterLink = "https://twitter.com/intent/tweet?text=" + '"' + quote + '" -' + author;
  let tumblrLink = "https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes&caption=" + 
  encodeURIComponent(author)+"&content=" + encodeURIComponent(quote) +
  "&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button"; 
  
  return (
    <div className="App">
      <div className="container" id="quote-box">
        <div id="text">{quote}</div><br/>
        <div id="author">{"-" + author}</div>
        <div className="buttons">
        <button className = "button"id="new-quote" onClick = {getQuote}>New Quote</button>
        <a className="fa fa-twitter" id="tweet-quote" title="Post this quote on twitter!" target="_blank"
  href= {twitterLink}></a>
        <a className="fa fa-tumblr" href={tumblrLink} target="_blank"></a>
        </div>
      </div>
    </div>
  );
}

export default App;

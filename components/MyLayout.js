import quotes from "../data/quotes.json";
import Header from "./Header";
import Hero from "./Hero"

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

const Layout = props => {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  
  return (
  <div style={layoutStyle}>
    <Header />
    <Hero 
        title={props.title}
        quote={quote.text}
        cite={quote.author}
      />
    {props.children}
  </div>
);
}

export default Layout;
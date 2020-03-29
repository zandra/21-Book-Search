import Header from "./Header";
import Hero from "./Hero"

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

const Layout = props => {
  
  return (
  <div style={layoutStyle}>
    <Header />
    <Hero 
        title={props.title}
        quote={props.quoteText}
        cite={props.quoteAuthor}
      />
    {props.children}
  </div>
);
}

export default Layout;
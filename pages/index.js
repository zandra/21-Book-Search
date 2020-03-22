import Layout from '../components/MyLayout';
import Hero from '../components/Hero';
import Spotlight from "../components/Spotlight";
import quotes from "../data/quotes.json";

export default function Index() {

  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  console.log(quote);
  return (
    <Layout>
      <Hero 
        title="Google Book Search"
        quote={quote.text}
        cite={quote.author}
      />
      <Spotlight />
    </Layout>
  );
}
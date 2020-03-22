import Layout from '../components/MyLayout';
import Hero from '../components/Hero';
import SearchInput from '../components/SearchInput';

const Search = (props) => (
    <Layout>
      <SearchInput />
    </Layout>
);

Search.getStaticProps = async function() {
  // const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  // const data = await res.json();

  // console.log(`Show data fetched. Count: ${data.length}`);
}
export default Search;
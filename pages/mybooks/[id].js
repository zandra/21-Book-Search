import Layout from '../../components/MyLayout';
import fetch from 'isomorphic-unfetch';
import useSWR from 'swr';

const fetcher = url => fetch(url).then(r => r.json())

const Saved = ({data}) => (
  <Layout>
    <h1>{data.id}</h1>
  </Layout>
);

Saved.getInitialProps = async function(context) {
  const { id } = context.query;
  const { data, error } = useSWR( `/api/books/${id}`, fetcher);
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  console.log(data)
  return { props: { data } };
};

export default Saved;

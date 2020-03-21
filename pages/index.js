import Link from 'next/link';
import Head from 'next/head';

export default function Index() {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossorigin="anonymous"
        />
        <title>My Bookshelf</title>
      </Head>
      <p>Hello Next</p>
      <Link href="/saved"><a>Saved Books</a></Link>{'  '}
      <Link href="/search"><a>Search</a></Link>
  </div>
    
  );
}
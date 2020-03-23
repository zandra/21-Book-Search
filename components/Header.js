import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/search">
      <a>Search</a>
    </Link>
    <Link href="/saved">
      <a>Saved Books</a>
    </Link>
    <style jsx>{`
      a {
        margin-right: 15px;
        padding-bottom: 10px;
        text-decoration: none;
      }
    `}</style>
  </div>
)

export default Header;
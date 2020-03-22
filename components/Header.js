import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/saved">
      <a style={linkStyle}>Saved Books</a>
    </Link>
    <Link href="/search">
      <a style={linkStyle}>Search</a>
    </Link>
  </div>
)

export default Header;
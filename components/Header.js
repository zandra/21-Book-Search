import Link from 'next/link'
import { Fragment } from 'react'

const Header = () => (
  <Fragment>
    <Link href="/">
      <a>Home</a>
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
  </Fragment>
)

export default Header;
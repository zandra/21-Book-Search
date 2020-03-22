import Link from 'next/link';

const Hero = (props) => {
  // styles
  const bannerStyle = {
    border: '1px solid #DDD'
  }
  const blockquoteStyle = {
    marginTop: '5px',
    fontSize: '18px'
  }

  const titleStyle = {
    fontFamily: 'Garamond',
    color: '#559834',
    fontSize: '24px'
  }

  return (
  <div className="banner" style={bannerStyle}>
    <div className="hero">
      <div className="container">
        <div className="row">
          <div className="col">
            <blockquote className="blockquote text-right" style={blockquoteStyle}>
              <p className="mb-0">{props.quote}</p>
              <footer className="blockquote-footer"><cite title="Source Title">{props.cite}</cite></footer>
            </blockquote>
          </div>
        </div>
        <div className="row">
          <div className="col title" style={titleStyle}>
            <h2 className="title">{props.title}</h2>
          </div>
          <div className="col buttons">
            <Link href="/search">
              <button type="button" className="btn btn-primary m-1">Book search</button>
            </Link>
            <button type="button" className="btn btn-primary">Saved books</button>
          </div>
        </div>
      {/* container, hero & banner end */}
      </div>
    </div>
  </div>
  );
}
export default Hero;
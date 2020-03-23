import Link from 'next/link';

const Hero = (props) => (
  <div className="banner">
    <div className="hero">
      <div className="container">
        <div className="row">
          <div className="col">
            <blockquote className="blockquote text-right">
              <p className="mb-0">{props.quote}</p>
              <footer className="blockquote-footer"><cite title="Source Title">{props.cite}</cite></footer>
            </blockquote>
          </div>
        </div>
        <div className="row">
          <div className="col title">
            <h2 className="title">{props.title}</h2>
          </div>
          <div className="col buttons">
            <Link href="/search">
              <button type="button" className="btn btn-primary m-1">Book search</button>
            </Link>
            <Link href="/saved">
              <button type="button" className="btn btn-primary">Saved books</button>
            </Link>
          </div>
        </div>
      {/* container, hero & banner end */}
      </div>
    </div>
    <style jsx>{`
      .banner {
        border: 1px solid #DDD;
        margin-top: 10px;
      }
      .blockquote {
        margin-top: 5px;
        font-size: 18px;
      }
      .title {
        font-family: 'Garamond';
        color: #559834;
        font-size: 24px;
      }
    `}
    </style>
  </div>
  );
export default Hero;
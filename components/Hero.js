export default props => (
  <div className="banner">
    <div className="hero">
      <blockquote className="blockquote text-right">
        <p className="mb-0">{props.quote}</p>
        <footer className="blockquote-footer"><cite title="Source Title">{props.cite}</cite></footer>
      </blockquote>
    <h2 className='title'>{props.title}</h2>
    </div>
    <style jsx>{`
      .banner {
        margin: 20px;
      }
      .blockquote {
        padding-right: 20px;
        padding-top: 10px;
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
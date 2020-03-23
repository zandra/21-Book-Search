import Card from 'react-bootstrap/Card';

const cardStyle = {
  maxHeight: 200,
  margin: 5,
  overflow: "auto"
}

const SearchResultCard = (props) => (

  <Card className="flex-row" style={cardStyle} key={props.id}>
      <Card.Img variant="left" src={props.image}  alt={props.title} />
    <Card.Body>
      <Card.Title>              
        {props.title}  
          <Card.Subtitle className="mb-2 text-muted">
            {props.authors}
          </Card.Subtitle>
      </Card.Title>
      <Card.Text style={cardStyle}>
        {props.description}
      </Card.Text>
        <small className="text-muted">{props.publisher} {props.publishedDate} ({props.pageCount} pages)</small>
    </Card.Body>
  </Card>
  );

export default SearchResultCard;
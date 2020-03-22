import Card from 'react-bootstrap/Card';

const cardStyle = {
  maxHeight: 200,
  margin: 5,
  overflow: "auto"
}

const SearchResultCard = (props) => (

  <Card className="flex-row" style={cardStyle} key={props.id}>
      <Card.Img variant="left" src={props.volume.imageLinks.thumbnail} alt={props.volume.title} />
    <Card.Body>
      <Card.Title>              
        {props.volume.title}  
          <Card.Subtitle className="mb-2 text-muted">
            {props.volume.authors}
          </Card.Subtitle>
      </Card.Title>
      <Card.Text style={cardStyle}>
        {props.volume.description}
      </Card.Text>
        <small className="text-muted">{props.volume.publisher} {props.volume.publishedDate} ({props.volume.pageCount} pages)</small>
    </Card.Body>
  </Card>
  );

export default SearchResultCard;
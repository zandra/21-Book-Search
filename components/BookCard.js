import Card from 'react-bootstrap/Card';

const cardStyle = {
  maxHeight: 200,
  margin: 5,
  overflow: "auto"
}

const BookCard = (props) => (

  <Card className="flex-row" style={cardStyle} key={props.volume.id}>
      <Card.Img variant="left" src={props.volume.image} alt={props.volume.title} />
    <Card.Body>
      <Card.Title>              
        {props.volume.title}  
          <Card.Subtitle className="mb-2 text-muted">
            {props.volume.authors}
          </Card.Subtitle>
      </Card.Title>
      <Card.Text style={cardStyle}>
        {props.volume.description}
        <small className="text-muted">Date Added: {props.volume.dateAdded}</small>
      </Card.Text>
    </Card.Body>
  </Card>
  );

export default BookCard;
import Head from './Head';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const cardStyle = {
  maxHeight: 200,
  margin: 5,
  overflow: "auto"
}

const BookCard =(props) => (
  <>
  <Head />
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
      <Button variant="primary">Remove</Button>
  </Card>
  </>
  );

export default BookCard;
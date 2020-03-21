import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import styles from './BookCard.module.css'

export default function BookCard(props) {
  return (
    <Card className="flex-row" key={props.id}>
        <Card.Img variant="left" src={props.volume.imageLinks.thumbnail} alt={props.volume.title} />
      <Card.Body>
        <Card.Title>              
          {props.volume.title}  
            <Card.Subtitle className="mb-2 text-muted">
              {props.volume.authors}
            </Card.Subtitle>
        </Card.Title>
        <Card.Text>
          {props.volume.description}
        </Card.Text>
          <small className="text-muted">{props.volume.publisher} {props.volume.publishedDate} ({props.volume.pageCount} pages)</small>
      </Card.Body>
        <Button variant="primary">Remove</Button>
    </Card>
  )
}
import { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup'; 
import FormControl from 'react-bootstrap/FormControl'; 
import Button from 'react-bootstrap/Button';
 
export default function SearchInput(props)  {
  const [search, setSearch] = useState("");

  return (
    <InputGroup className="mb-3">
      <InputGroup.Prepend>
        <InputGroup.Text id="googlbookSearch">Google Books</InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        aria-label="Search Input"
        aria-describedby="googlbook-search-input"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <Button variant="primary" type="submit" onClick={props.searchGoogle}>Search</Button>
    </InputGroup>
  );
}



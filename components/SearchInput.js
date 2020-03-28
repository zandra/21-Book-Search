import { useState } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap'; 

export default function SearchInput(props)  {

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



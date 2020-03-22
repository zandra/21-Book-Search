import InputGroup from 'react-bootstrap/InputGroup'; 
import FormControl from 'react-bootstrap/FormControl'; 
 
 const SearchInput = (props) => (
    <InputGroup className="mb-3">
      <InputGroup.Prepend>
        <InputGroup.Text id="googlbook-search-input">Google Books</InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        aria-label="Search"
        aria-describedby="googlbook-search-input"
      />
  </InputGroup>
);

export default SearchInput;

import React from "react";
import { Form, FormControl, Nav, Navbar } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";

const Filter = ({ title, handleChange,ratingChanged }) => {
 
  return (
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">ANIMEX</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#News">News</Nav.Link>
    </Nav>

      <div>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            onChange={handleChange}
            value={title}
          />
        </Form>
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={30}
          activeColor="#ffd700"
          isHalf={true}
        />
      </div>
    </Navbar>
  );
};

export default Filter;

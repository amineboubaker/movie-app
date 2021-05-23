import React from "react";
import { Form, FormControl, Nav, Navbar } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const Filter = ({ title, handleChange,ratingChanged }) => {
 
  return (
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">ANIMEX</Navbar.Brand>
    <Nav className="mr-auto">
      <Link to="/" href="#home">Home</Link>
      <Link href="#features">Features</Link>
      <Link href="#News">News</Link>
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

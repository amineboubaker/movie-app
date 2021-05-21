import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MovieCardDetails = ({movieList,match}) => {
    const movie = movieList.find((el) => el.id == match.params.id);
    console.log(movie)

    return (
        <div>
             <Card style={{ width: '22rem' }}>
      <Card.Img variant="top" src={movie.posterUrl} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.description}</Card.Text>
       
      </Card.Body>
    </Card>
            <Link to="/">
          <Button variant="primary">Go Back</Button>
        </Link>
        
        </div>
    )
}

export default MovieCardDetails

import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
   <Col xs={12} sm={6} md={4} lg={3} >
          <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>

 <Card className="h-100">
    <Card.Img variant="top" src={movie.poster} />
    <Card.Body>
      <Card.Title>{movie.title}</Card.Title>
      <Card.Text>{movie.year}</Card.Text>
    </Card.Body>
  </Card>
  </Link>
</Col>

  );
};

export default MovieCard;

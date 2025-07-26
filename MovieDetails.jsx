import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { Container, Card, Button } from 'react-bootstrap';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios.get(`https://fooapi.com/api/movies/${id}`)
      .then(res => setMovie(res.data.data));
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <Container className="mt-4">
      <Card>
  <Card.Img variant="top" src={movie.poster} />
  <Card.Body>
    <Card.Title>{movie.title}</Card.Title>
    <Card.Text><strong>Year:</strong> {movie.year}</Card.Text>
    <Card.Text><strong>Rated:</strong> {movie.rated}</Card.Text>
    <Card.Text><strong>Released:</strong> {movie.released}</Card.Text>
    <Card.Text><strong>Runtime:</strong> {movie.runtime}</Card.Text>
    <Card.Text><strong>Genre:</strong> {movie.genre}</Card.Text>
    <Card.Text><strong>Director:</strong> {movie.director}</Card.Text>
    <Card.Text><strong>Writer:</strong> {movie.writer}</Card.Text>
    <Card.Text><strong>Actors:</strong> {movie.actors}</Card.Text>
    <Card.Text><strong>Plot:</strong> {movie.plot}</Card.Text>
    <Card.Text><strong>Language:</strong> {movie.language}</Card.Text>
    <Card.Text><strong>Country:</strong> {movie.country}</Card.Text>
    <Card.Text><strong>Awards:</strong> {movie.awards}</Card.Text>
    <Card.Text><strong>IMDb Rating:</strong> {movie.imdbRating}</Card.Text>
    <Card.Text><strong>Box Office:</strong> {movie.boxOffice}</Card.Text>
    <Button variant="primary" as={Link} to="/">Back to list</Button>
  </Card.Body>
</Card>

    </Container>
  );
};

export default MovieDetails;

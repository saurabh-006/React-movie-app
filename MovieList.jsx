import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
import { Pagination, Container, Row } from 'react-bootstrap';

const MovieList = ({searchQuery}) => {
  const [allMovies, setAllMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 8; // 4 per row * 2 rows

  useEffect(() => {
    axios.get(`https://fooapi.com/api/movies`)
      .then(res => {
        setAllMovies(res.data.data);
      });
  }, []);

  // Get current movies to show
  const indexOfLast = currentPage * moviesPerPage;
  const indexOfFirst = indexOfLast - moviesPerPage;
  const currentMovies = allMovies.slice(indexOfFirst, indexOfLast);

  const filteredMovies = currentMovies.filter(movie =>
  movie.title.toLowerCase().includes(searchQuery.toLowerCase())
);


  const totalPages = Math.ceil(allMovies.length / moviesPerPage);

  return (
    <Container>
      <Row className="mt-4 g-4 justify-content-center">
        {filteredMovies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Row>

        {/* ______________pagination_________________________________ */}

      <Pagination className="justify-content-center mt-4">
        {[...Array(totalPages)].map((_, idx) => (
          <Pagination.Item
            key={idx}
            active={idx + 1 === currentPage}
            onClick={() => setCurrentPage(idx + 1)}
          >
            {idx + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </Container>
  );
};

export default MovieList;

// src/components/Navbar.jsx
import React from 'react';
import { Navbar, Container, Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AppNavbar = ({ onSearch }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Container>
        {/* Left- App Title */}
        <Navbar.Brand as={Link} to="/">🎬 MovieApp</Navbar.Brand>

        {/* Right- Search bar */}
        <Form className="d-flex ms-auto" onSubmit={e => e.preventDefault()}>
          <FormControl
            type="search"
            placeholder="Search movies"
            className="me-2"
            onChange={(e) => onSearch && onSearch(e.target.value)}
          />
        </Form>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;

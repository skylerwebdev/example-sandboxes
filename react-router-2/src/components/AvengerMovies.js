import React from 'react';

function AvengerMovies(props) {
  return (
    <ul>{props.avenger.movies.map(movie => <li key={movie}>{movie}</li>)}</ul>
  );
}

export default AvengerMovies;

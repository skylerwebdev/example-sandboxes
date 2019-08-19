import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import { Container, Grid } from "semantic-ui-react";
export default function MovieList() {
  // NOTE: The value given to setState() must be of the same type as your vale is expected to be
  const [films, setFilms] = useState([]);

  useEffect(() => {
    axios
      .get(`https://ghibliapi.herokuapp.com/films/`, {
        params: {}
      })
      .then(response => {
        const films = response.data;
        console.log("studio ghibli films", films);
        setFilms(films);
      });
  }, []);

  return (
    <Container text>
      <Grid relaxed columns={3} divided="vertically">
        <Grid.Row padded="vertically" columns={3}>
          {films.map(film => {
            return (
              <MovieCard
                key={film.id}
                id={film.id}
                title={film.title}
                description={film.description}
              />
            );
          })}
        </Grid.Row>
      </Grid>
    </Container>
  );
}

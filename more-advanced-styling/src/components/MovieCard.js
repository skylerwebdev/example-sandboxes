import React from "react";
import { Card, Grid } from "semantic-ui-react";
const MovieCard = props => {
  // NOTE: The value given to setState() must be of the same type as your vale is expected to be
  return (
    <Grid.Column padded key={props.id}>
      <Card>
        <Card.Content>
          <Card.Header>Film title: {props.title}</Card.Header>
          <Card.Description>{props.description}</Card.Description>
        </Card.Content>
      </Card>
    </Grid.Column>
  );
};
export default MovieCard;

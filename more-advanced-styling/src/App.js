import React from "react";
import MovieList from "./components/MovieList";
import VehicleList from "./components/VehicleList";
import "./styles.css";
import MenuEx from "./components/MenuEx";
import styled from "styled-components";
import { Button, Icon } from "semantic-ui-react";

const StyledButton = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => (props.primary ? "palevioletred" : "white")};
  color: ${props => (props.primary ? "white" : "palevioletred")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
const TomatoButton = styled(StyledButton)`
  color: tomato;
  border-color: tomato;
`;
const Image = styled.img`
  width: 400px;
  height: 400px;
  border-radius: 50%;
`;

function App() {
  return (
    <div className="App">
      <MenuEx />
      <Image src="https://i.pravatar.cc/" />
      <Button animated>
        <Button.Content visible>Next</Button.Content>
        <Button.Content hidden>
          <Icon name="arrow right" />
        </Button.Content>
      </Button>
      <TomatoButton>Tomato Button</TomatoButton>
      <StyledButton primary>Primary</StyledButton>
      <h1>Studio Ghibli API</h1>
      <MovieList />
      <VehicleList />
    </div>
  );
}

export default App;

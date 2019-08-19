import styled from "styled-components";
import { primary } from "./StyleVariable";

export const Image = styled.img`
  max-width: 175px;
  border-radius: 100%;
`;

export const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => (props.primary ? primary : "white")};
  color: ${props => (props.primary ? "white" : primary)};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${primary};
  border-radius: 3px;
`;

import React, { useEffect, useState } from "react";
import { Header, Image, Table } from "semantic-ui-react";
import axios from "axios";
import PetCard from "./PetCard";

export default function PetGrid({ limit }) {
  // https://dog.ceo/api/breed/hound/images/random/15
  const [pets, setPets] = useState([]);
  const [breed, setBreed] = useState("corgi");

  useEffect(() => {
    axios
      .get(`https://dog.ceo/api/breed/${breed}/images/random/15`)
      .then(response => {
        const doggos = response.data.message;
        // console.log("dogs api:", doggos);
        // KEY PART, SAVE TO STATE:
        setPets(doggos);
      });
  }, [breed]);

  console.log("breed", breed);
  return (
    <div className="pet-grid">
      <button onClick={() => setBreed("chihuahua")}>Chihuahua</button>
      <button onClick={() => setBreed("terrier")}>Terrier</button>
      <Table basic="very" celled collapsing>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Doggo</Table.HeaderCell>
            <Table.HeaderCell>Adopt Me</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {pets.map(petUrl => {
            return <PetCard key={petUrl} breed={breed} imgUrl={petUrl} />;
          })}
        </Table.Body>
      </Table>

      {/* <div className="cat-card">
        <img
          src="https://adorbs-as-a-service.herokuapp.com/api/v1/250w/200h/"
          alt="kittehs!"
        />
      </div> */}
    </div>
  );
}
// const images = [`https://adorbs-as-a-service.herokuapp.com/api/v1/250w/200h/`]

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

/*
  deleted:
    state, ✅
    handleChanges, ✅
    handleSubmit ✅
    form onSubmit ✅
    input values ✅
    input onChange ✅
    labels ✅
*/

// Tasks - Add two fields - size, notes. Don't forget to add them to the values in mPTV

const AnimalForm = ({ errors, touched, values, handleSubmit, status }) => {
  const [animals, setAnimals] = useState([]);
  console.log(animals);

  useEffect(() => {
    if (status) {
      setAnimals([...animals, status]);
    }
  }, [status]);

  return (
    <div className="animal-form">
      <h1>Animal Form</h1>
      <Form>
        <Field type="text" name="species" placeholder="Species" />
        {touched.species && errors.species && (
          <p className="error">{errors.species}</p>
        )}

        <Field type="text" name="size" placeholder="Size" />
        {touched.size && errors.size && <p className="error">{errors.size}</p>}

        <Field component="select" className="food-select" name="food">
          <option>Please Choose an Option</option>
          <option value="herbivore">Herbivore</option>
          <option value="carnivore">Carnivore</option>
          <option value="omnivore">Omnivore</option>
        </Field>

        <label className="checkbox-container">
          Vaccinations
          <Field
            type="checkbox"
            name="vaccinations"
            checked={values.vaccinations}
          />
          <span className="checkmark" />
        </label>

        <Field
          component="textarea"
          type="text"
          name="notes"
          placeholder="Notes"
        />
        {touched.notes && errors.notes && (
          <p className="error">{errors.notes}</p>
        )}

        <button type="submit">Submit!</button>
      </Form>

      {animals.map(animal => (
        <p key={animal.id}>{animal.species}</p>
      ))}
    </div>
  );
};

// Higher Order Component - HOC
// Hard to share component / stateful logic (custom hooks)
// Function that takes in a component, extends some logic onto that component,
// returns a _new_ component (copy of the passed in component with the extended logic)
const FormikAnimalForm = withFormik({
  mapPropsToValues({ species, size, notes, food, vaccinations }) {
    return {
      vaccinations: vaccinations || false,
      food: food || '',
      species: species || '',
      size: size || '',
      notes: notes || ''
    };
  },

  validationSchema: Yup.object().shape({
    species: Yup.string().required('You silly!!!'),
    size: Yup.string().required(),
    notes: Yup.string()
  }),

  handleSubmit(values, { setStatus }) {
    axios
      .post('https://reqres.in/api/users/', values)
      .then(res => {
        setStatus(res.data);
      })
      .catch(err => console.log(err.response));
  }
})(AnimalForm); // currying functions in Javascript

export default FormikAnimalForm;

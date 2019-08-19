import React, { useState } from "react";

export default function SignupForm() {
  // Use an object to track multiple fields:
  const [user, setUser] = useState({ username: "", password: "", email: "" });
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  /*
Controlled Inputs

1. ✅ onChange handler
2. ✅ Somewhere track our state
3. ✅ Apply state to the input

*/
  function handleChange(event) {
    /*
demonstrate the ability to handle multiple inputs in a form
* Use an object to track our state (user)
* Set a `name` on each input that correlates with the state object's keys (email, password, etc.)
* When updating state, copy values into the `user` object (using spread: ...user)
* Then set the changed input based on target.name & target.value.
    */
    const updatedUser = { ...user, [event.target.name]: event.target.value };
    console.log(
      "handleChange",
      event.target.name,
      event.target.value,
      updatedUser
    );
    setUser(updatedUser);
  }
  // function handleEmail(event) {
  //   console.log("changed Email", event.target.value);
  //   setUser({ email: event.target.value });
  // }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("user state", user);
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Signup</legend>
        <div className="form-group row">
          <label for="username" className="col-sm-2 col-form-label">
            Username
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                name="username"
                placeholder="Enter your username"
                value={user.username}
                onChange={handleChange}
              />
            </div>
          </label>
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={user.password}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </fieldset>
    </form>
  );
}

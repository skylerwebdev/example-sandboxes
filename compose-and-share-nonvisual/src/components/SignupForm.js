import React, { useState, useEffect } from "react";
import { useInput } from "./useInput.js";
import { useLocalStorage } from "./useLocalStorage.js";

export default function SignupForm() {
  console.time("useInput");
  const [username, setUsername, handleUsername] = useInput("", "username");
  const [password, setPassword, handlePassword] = useInput("", "password");
  const [email, setEmail, handleEmail] = useInput("", "email");
  const [region, setRegion] = useLocalStorage("region", { name: "US" });
  console.timeEnd("useInput");

  function handleSubmit(event) {
    event.preventDefault();
    // console.log("user state", user);
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Signup</legend>
        <button onClick={() => setRegion({ name: "EU" })}>Europe</button>
        <button onClick={() => setRegion({ name: "US" })}>Americas</button>
        <div className="form-group row">
          <label htmlFor="username" className="col-sm-2 col-form-label">
            Username
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                name="username"
                placeholder="Enter your username"
                value={username}
                onChange={handleUsername}
              />
            </div>
          </label>
        </div>
        {region.name === "EU" && (
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={email}
              onChange={handleEmail}
            />
          </div>
        )}
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
            onChange={handlePassword}
            value={password}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </fieldset>
    </form>
  );
}

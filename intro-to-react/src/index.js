import React from "react";
import ReactDOM from "react-dom";

import BasicButton from "./components/BasicButton";
import BasicInput from "./components/BasicInput";
import Header from "./components/Header";
import ArticleCard from "./components/ArticleCard";
import "./styles.scss";
// Example Imports - Don't use CDNs (<script>, <link>)
// ES6/ESM: import axios from "axios";
// ES5/CJS: const axios = require('axios');

const App = () => (
  <div className="App">
    <BasicButton clickCount={1} />
    <BasicInput />
    <Header />
    <ArticleCard article={{}} category={"testing"} />
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

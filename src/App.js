import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import News from "./component/News";
import About from "./component/About";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<News />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    );
  }
}

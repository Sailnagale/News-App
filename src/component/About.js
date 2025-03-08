import React, { Component } from "react";

export class About extends Component {
  render() {
    return (
      <div className="container my-5">
        <h2>About Us</h2>
        <p>
          Welcome to our website! We aim to provide the latest news and updates
          on various topics. Stay informed with us and enjoy our curated
          content. Our team is dedicated to bringing you accurate and timely
          information.
        </p>
        <div className="my-4 p-4 bg-light border rounded">
          <h4>Contact Information</h4>
          <p className="mb-1">
            <strong>Name:</strong> Sail Nagale
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:sailnagale20@gmail.com">sailnagale20@gmail.com</a>
          </p>
        </div>
      </div>
    );
  }
}

export default About;

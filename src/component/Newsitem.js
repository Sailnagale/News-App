import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let { title, description, imageurl, href } = this.props;
    return (
      <div>
        <div className="card" style={{ width: "15rem" }}>
          <img src={imageurl} className="card-img-top" alt="logo" />
          <div className="card-body">
            <h5 className="card-title">{title + "..."}</h5>
            <p className="card-text">{description + "...."}</p>
            <a
              rel="noreferrer"
              href={href}
              target="_blank"
              className="btn btn-dark"
            >
              Read
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;

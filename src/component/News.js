import React, { Component } from "react";
import Newsitem from "./Newsitem";

export class News extends Component {
  articles = [
    // Your articles array here
  ];

  constructor() {
    super();
    console.log("This is the constructor");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?category=business&apiKey=bcc785399d854ed48c7fb27395fb7db7&page=${this.state.page}`;
    let data = await fetch(url);
    let pdata = await data.json();
    console.log(pdata);
    this.setState({ articles: pdata.articles });
  }

  previous = async () => {
    let url = `https://newsapi.org/v2/top-headlines?category=business&apiKey=bcc785399d854ed48c7fb27395fb7db7&page=${
      this.state.page - 1
    }`;
    let data = await fetch(url);
    let pdata = await data.json();
    console.log(pdata);

    this.setState({
      page: this.state.page - 1,
      articles: pdata.articles,
    });
  };

  next = async () => {
    let url = `https://newsapi.org/v2/top-headlines?category=business&apiKey=bcc785399d854ed48c7fb27395fb7db7&page=${
      this.state.page + 1
    }`;
    let data = await fetch(url);
    let pdata = await data.json();
    console.log(pdata);

    this.setState({
      page: this.state.page + 1,
      articles: pdata.articles,
    });
  };

  render() {
    return (
      <div>
        <h2>Daily Dose Of Internet</h2>
        <div className="container my-3">
          <div className="container row my-3">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <Newsitem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 90)
                        : ""
                    }
                    imageurl={element.urlToImage}
                    href={element.url}
                  ></Newsitem>
                </div>
              );
            })}
          </div>
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            class="btn btn-dark"
            onClick={this.previous}
          >
            &laquo; previous
          </button>
          <button
            disabled={this.state.page >= 100}
            type="button"
            class="btn btn-dark"
            onClick={this.next}
          >
            Next &raquo;
          </button>
        </div>
      </div>
    );
  }
}

export default News;

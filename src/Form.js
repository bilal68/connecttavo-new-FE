import React, { Component } from "react";
import { FormErrors } from "./FormErrors";
import "./Form.css";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      detailsList: {},
    };
  }

  handleChange = (event) => {
    this.setState({ url: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch(
      `https://connectavo-bk.herokuapp.com/?url=${this.state.url}`
    ).then((res) => {
      return res.json();
    });

    this.setState({
      ...this.state.value,
      detailsList: {
        ...response,
      },
    });
  };

  render() {
    return (
      <div>
        <h1> URL</h1>
        <form className="demoForm " onSubmit={this.handleSubmit}>
          <input
            type="url"
            className="form-control mt-5"
            value={this.state.url}
            onChange={this.handleChange}
          />
          <input
            className="btn btn-primary mt-2"
            type="submit"
            value="Submit"
          />
        </form>

        {/* <form className="demoForm" onSubmit={this.handleSubmit}>
          <h2>Enter Url here</h2>
          <div className="panel panel-default">
            <FormErrors formErrors={this.state.formErrors} />
          </div>
          <div
            className={`form-group ${this.errorClass(
              this.state.formErrors.url
            )}`}
          >
            <label htmlFor="url">url</label>
            <input
              type="url"
              required
              className="form-control"
              name="url"
              placeholder="url"
              value={this.state.url}
              onChange={this.handleUserInput}
            />
          </div>
       
          <button
            type="submit"
            className="btn btn-primary"
            disabled={!this.state.formValid}
          >
            submit
          </button>
        </form> */}

        <ul className="list-group mt-5" style={{ marginTop: "20px" }}>
          {Object.keys(this.state.detailsList).map((key) => {
            return (
              <li className="list-group-item" key={key}>
                {" "}
                {key} : {this.state.detailsList[key]}{" "}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Form;

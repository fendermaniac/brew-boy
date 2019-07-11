import React, { Component } from "react";
import loader from "../images/loader.svg";

class Card extends Component {
  constructor() {
    super();
    this.state = {
      loading: true
    };
  }

  hideSpinner = () => {
    this.setState({
      loading: false
    });
  };

  render() {
    const { id, name, street, city, state } = this.props;
    return (
      <div className="card" key={id}>
        <h2>{name}</h2>
        <address>
          {`${street}`}
          <br />
          {`${city}, ${state}`}
        </address>
        <div>
          <div className="iframe-wrapper">
            {this.state.loading ? (
              <div>
                <p>loading...</p> 
                <img src={loader} />
              </div>
            ) : null}
          </div>
          <iframe
            src={`http://maps.google.com/maps?q=${name}, ${street}, ${city}, ${state}&z=15&output=embed`}
            onLoad={this.hideSpinner}
            width="360"
            height="270"
            frameBorder="0"
          />
        </div>
      </div>
    );
  }
}

export default Card;

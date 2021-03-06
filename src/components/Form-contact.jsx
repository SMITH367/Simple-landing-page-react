import React, { Component } from "react";
import '../assets/css/Button.css'
import "../assets/css/Form.css";
class FormContat extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="form-container">
        <form action="" class="form">
          <label className="label" htmlFor="">Contactanos ahora!</label>
          <input
            className="form-element"
            type="text"
            name=""
            id=""
            placeholder="Nombre"
            minLength="3"
          />
          <input
            className="form-element"
            type="email"
            name=""
            id=""
            placeholder="Email"
          />
          <textarea
            className="information-send"
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Mensaje"
            minLength="7"
          ></textarea>
            <input type="submit" value="Enviar" className="button button-submit"  />
        </form>
      </div>
    );
  }
}

export { FormContat };

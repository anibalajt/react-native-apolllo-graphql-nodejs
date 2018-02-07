import React from "react";

// import { contentInput, input, btn, textBtn } from '../utils/style'

export default ({ args, handleRegister, handleChange }) => {
  return (
    <div>
      <div>
        <input
          type="text"
          onChange={text => {
            handleChange(text, "email");
          }}
          placeholder="Email"
          name="Email"
        />
      </div>
      <div>
        <input
          type="text"
          onChange={text => {
            handleChange(text, "password");
          }}
          placeholder="Password"
          name="Password"
        />
      </div>
      <div>
        <input
          type="text"
          onChange={text => {
            handleChange(text, "rpassword");
          }}
          placeholder="Confirmar Password"
          name="Confirmar Password"
        />
      </div>
      <div>
        <div>
          <div
            onClick={() => {
              handleRegister(args);
            }}
          >
            <span>Registrar</span>
          </div>
        </div>
      </div>
    </div>
  );
};

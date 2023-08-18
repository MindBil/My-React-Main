import React from 'react';
import "./Button.css"
import PropTypes from "prop-types";


{/* <Button text="Press me!" />

const Button = ({ text }) => (
    <button>{text}</button>
  ) */}

const Button = () => (
    <div className="btn-wrapper">
        <button type="button" className="btn">My Buttttton</button>
    </div>
)

export default Button


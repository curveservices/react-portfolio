import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const Button = (props) => {
  const buttonStyles = {
    background: props.background,
    color: props.color,
    fontSize: props.fontSize ? props.fontSize + "px" : "16px",
    boxShadow: props.boxShadow,
  };

  // Detect external links
  const isExternal = props.link?.startsWith("http");

  return isExternal ? (
    // Use an <a> tag for external links
    <a
      href={props.link}
      target={props.target || "_blank"}
      rel="noopener noreferrer"
      aria-label={`Link to ${props.text}`}
      className="flat-btn"
      style={buttonStyles}
    >
      {props.text}
    </a>
  ) : (
    // Use react-router <Link> for internal navigation
    <Link to={props.link} aria-label={`Link to ${props.text}`}>
      <button
        className="flat-btn"
        style={buttonStyles}
        onClick={props.onClick}
        type={props.type}
        value={props.value}
      >
        {props.text}
      </button>
    </Link>
  );
};

export default Button;

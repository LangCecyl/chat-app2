import React from "react";
import "./style.css";
import PropTypes from "prop-types";

function Contact({ name, avatar, Status }) {
  return (
    <div className="Contact">
      <img className="avatar" src={avatar} alt={name} />
      <div>
        <p className="name">{name}</p>
        <div className="status">
          <div className={Status === "online" ? "status-online" : "status-offline"} />
          <p className="status-text">{Status}</p>
        </div>
      </div>
    </div>
  );
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  online: PropTypes.bool
};

export default Contact;

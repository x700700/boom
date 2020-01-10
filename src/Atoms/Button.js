import React from "react";

const Button = ({ label }) => {
  return (
    <div className="my-form-btn-container">
      <input className="my-btn" type="submit" value={label} />
    </div>
  );
};
export default Button;

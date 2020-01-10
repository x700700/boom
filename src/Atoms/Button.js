import React from "react";

const Button = ({ label }) => {
  return (
    <div>
      <input type="submit" value={label} />
    </div>
  );
};
export default Button;

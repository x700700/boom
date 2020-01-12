import React from "react";

const SubmitButton = ({ label }) => {
  return (
    <div className="my-form-btn-container">
      <input className="my-btn" type="submit" value={label} />
    </div>
  );
};
export default SubmitButton;

import React from "react";

const Student = ({ name, age }) => {
  return (
    <div>
      <div>
        <h1>{name}</h1>
        <h1>{age}</h1>
      </div>
    </div>
  );
};

export default Student;

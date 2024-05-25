import React from "react";
const Card = (props) => {
  const { student } = props;
  return (
    <div class="card">
      <img src={student.image.src} alt={student.image.alt} />
      <h4>{student.name}</h4>
      <p>{student.class}</p>
      <small>{student.hobbies}</small>
    </div>
  );
};

export default Card;

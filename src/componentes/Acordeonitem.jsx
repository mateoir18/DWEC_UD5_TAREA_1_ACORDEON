import React from "react";

export const Acordeonitem = ({
  index,
  pregunta,
  respuesta,
  abierto,
  setAbierto,
}) => {
  const activar = () => {
    setAbierto(abierto === index ? null : index);
  };

  return (
    <li className={abierto ? "accordion_item active" : "accordion_item" }>
      <button className="button" onClick={activar}>
        {abierto ? "-" : "+"} {pregunta}
      </button>
      <div className={abierto ? "answer_wrapper open" : "answer_wrapper"}>
        <div className="answer">{respuesta}</div>
      </div>
    </li>
  );
};

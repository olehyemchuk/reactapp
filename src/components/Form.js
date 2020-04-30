import React, { useState, useContext } from "react";
import { AlertContext } from "./../context/alert/alertContext";

export const Form = () => {
  const [value, setValue] = useState("");
  const alert = useContext(AlertContext);

  const submitHandler = (event) => {
    event.preventDefault();

    if (value.trim()) {
      alert.show("note was created", "success");
      setValue("");
    } else {
      alert.show("Enter note name!");
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <input
          className="form-control"
          type="text"
          placeholder="Name of note"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></input>
      </div>
    </form>
  );
};

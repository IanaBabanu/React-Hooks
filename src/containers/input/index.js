import React, { useContext, useState, useRef, useEffect } from "react";
import { ToDoContext } from "../app/context";
import  useFocus  from "../../hooks/useFocus";
import "./index.sass";

const Input = () => {
  const [value, setValue] = useState("");
  const { dispatch } = useContext(ToDoContext);
  const inputRef  = useFocus();

  const onChange = ({ target: { value } }) => {
    setValue(value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (value) {
      dispatch({type: 'addToList', payload: value});
    }
    setValue("");
  };

  return (
    <div className="input-wrapper">
      <div className="input-wrapper__title">Press Enter to add a task</div>

      <form className="input-wrapper__form" onSubmit={handleClick}>
        <input
          placeholder="Enter New Task"
          type="text"
          onChange={onChange}
          value={value}
          ref={inputRef}
          />
      </form>
    </div>
  );
};

export default Input;

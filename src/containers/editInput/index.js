import React, { useContext, useState, useRef } from "react";
import { ToDoContext } from "../app/context";
import  useFocus  from "../../hooks/useFocus";
import "./index.sass";

const InputEdit = ({ task, setEnableEdit }) => {
  const [newValue, setNewValue] = useState("");
  const inputRef  = useFocus();
  const { dispatch } = useContext(ToDoContext);

  const onChange = ({ target: { value } }) => {
    setNewValue(value);
  };

  const handleEdit = (e) => {
    e.preventDefault();

    if (newValue) {
      dispatch({type: 'editFromList', payload: {id: task.id, newValue }});
    }
    setEnableEdit(false);
  };

  return (
    <form className="input-form" onSubmit={handleEdit}>
      <input
        className="edit-input"
        type="text"
        onChange={onChange}
        value={newValue}
        placeholder={task.text}
        ref={inputRef}
      />
    </form>
  );
};

export default InputEdit;

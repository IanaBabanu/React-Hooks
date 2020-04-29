import React, { useContext, useState, useRef } from "react";
import { ToDoContext } from "../app/context";
import DeleteBtn from "../../components/deleteBtn/index";
import EditBtn from "../../components/editBtn/index";
import "./index.sass";
import InputEdit from "../editInput";

const Item = ({ task }) => {
  const [enableEdit, setEnableEdit] = useState(false);
  const { dispatch } = useContext(ToDoContext);

  const setEdit = () => {
    setEnableEdit(true);
  };

  return (
    <li className="task-item" key={task.id}>
      <div className="btn-group">
        {enableEdit ? (
          <InputEdit task={task} setEnableEdit={setEnableEdit} />
        ) : (
          <div className="task-text">{task.text}</div>
        )}
        <EditBtn enableEdit={enableEdit} edit={setEdit} />
      </div>

      <DeleteBtn delete={() => dispatch({type: 'deleteFromList', payload: task.id})} />
    </li>
  );
};

export default Item;

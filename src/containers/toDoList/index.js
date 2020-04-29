import React, { useContext, useEffect } from "react";
import { ToDoContext } from "../app/context";
import Item from "../item/index";
import "./index.sass";

const ToDoList = ({}) => {
  const { valuesArray } = useContext(ToDoContext);

  useEffect(() => {
    let numberOfTasks = valuesArray.length;
    document.title = numberOfTasks ? numberOfTasks + " task(s)" : "ToDo App";
  }, [valuesArray]);

  return (
    <div className="list-wrapper">
      <ul>
        {valuesArray.map((task) => (
          <Item key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;

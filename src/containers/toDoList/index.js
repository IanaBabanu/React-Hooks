import React, { useContext, useEffect, useMemo } from "react";
import { ToDoListContext } from "../app/listItemsProvider";
import Item from "../item/index";
import "./index.sass";

const ToDoList = ({}) => {
  const { valuesArray } = useContext(ToDoListContext);

  useEffect(() => {
    let numberOfTasks = valuesArray.length;
    document.title = numberOfTasks ? numberOfTasks + " task(s)" : "ToDo App";
  }, [valuesArray]);

  const items = useMemo(() => {
    return valuesArray.map((task) => <Item key={task.id} task={task} />);
  }, [valuesArray]);

  return (
    <div className="list-wrapper">
      <ul>{items}</ul>
    </div>
  );
};

export default ToDoList;

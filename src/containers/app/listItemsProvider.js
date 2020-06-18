import React, { useReducer, createContext } from "react";

export const ToDoListContext = createContext({});

const reducer = (state, action) => {
  switch (action.type) {
    case "addToList":
      return addToList(state, action.payload);
    case "deleteFromList":
      return deleteFromList(state, action.payload);
    case "editFromList":
      return editFromList(state, action.payload);
    default:
      return state;
  }
};

const addToList = (state, inputVal) => {
  return [...state, { id: Date.now(), text: inputVal }];
};

const deleteFromList = (state, id) => {
  return state.filter((task) => task.id !== id);
};

const editFromList = (state, { id, newValue }) => {
  return state.map((task) => {
    return task.id === id ? { id, text: newValue } : task;
  });
};

const ListItemProvider = ({ children }) => {
  const [valuesArray, dispatch] = useReducer(reducer, []);

  const contextValue = { valuesArray, dispatch };

  return (
    <ToDoListContext.Provider value={contextValue}>
      {children}
    </ToDoListContext.Provider>
  );
};

export default ListItemProvider;

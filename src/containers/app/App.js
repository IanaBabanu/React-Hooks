import React from "react";
import ToDoList from "../toDoList";
import Input from "../input/index";
import ListItemProvider from "./listItemsProvider";
import Title from "../title";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="wrapper">
        <Title>Todo App</Title>
        <ListItemProvider>
          <Input />
          <ToDoList />
        </ListItemProvider>
      </div>
    </div>
  );
};

export default App;

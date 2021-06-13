import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from './compornents/InputTodo'
import { IncompTodos } from "./compornents/IncompTodos";
import { CompTodos } from "./compornents/CompTodos";

export const App = () => {
  const [todoText, setTodoText] = useState('');
  const [incompTodos, setIncompTodos] = useState([]);
  const [compTodos, setCompTodos] = useState([]);
  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onClickAdd = () => {
    if(todoText === "") return;
    const newTodos = [...incompTodos,todoText];
    setIncompTodos(newTodos)
    setTodoText('')
  };
  const onClickDelete = (index) => {
    const newTodos = [...incompTodos]
    newTodos.splice(index, 1)
    setIncompTodos(newTodos)
  }
  const onClickComp = (index) => {
    const newIncompTodos = [...incompTodos]
    newIncompTodos.splice(index, 1)
    const newCompTodos = [...compTodos, incompTodos[index]]
    setIncompTodos(newIncompTodos)
    setCompTodos(newCompTodos)
  }
  const onClickBack = (index) => {
    const newCompTodos = [...compTodos]
    newCompTodos.splice(index, 1)
    const newIncompTodos = [...incompTodos, compTodos[index]]
    setCompTodos(newCompTodos)
    setIncompTodos(newIncompTodos)
  }
  
  return (
    <>
      <InputTodo 
        todoText={todoText} 
        onChange={onChangeTodoText} 
        onClick={onClickAdd} 
        disabled ={incompTodos.length >= 5 }
      />
      {incompTodos.length >= 5 && (
        　<p style={{color: "red"}}>
          登録できるtodoは5コまでだよ、消化しろ
        </p>
      )}
      
      <IncompTodos todos = {incompTodos} onClickComp={onClickComp} onClickDelete={onClickDelete}/>
      <CompTodos todos = {compTodos} onClickBack={onClickBack} />
    </>
  );
};

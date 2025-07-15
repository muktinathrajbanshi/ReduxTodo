import React, { useState } from 'react';
import {useDispatch} from "react-redux";
import {addTodo} from "../actions/index";
import "./todo.css";


const Todo = () => {

    const [inputData, setInputData] = useState("");
    const dispatch = useDispatch();

  return (
    <>
      <div className="main-div">
        <div className="child-div">
        <figure>
          <figcaption> Add Your List Here ✌️</figcaption>
        </figure>
          <div className="addItems">
            <input type="text" placeholder="✍️ Add Items.."
            value={inputData} 
            onChange={(event) => setInputData(event.target.value)}
             />
            <i className="fa-solid fa-plus" onClick={() =>dispatch(addTodo(inputData), setInputData(""))}></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;

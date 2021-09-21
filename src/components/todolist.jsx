import React from "react";
import { useState } from "react";
import "./style.css";
import List from "./list";

const Todolist = () => {
  const [inputList, setInputList] = useState("");
  const [item, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  const deleteItems = (id) => {
    console.log("Deleted");

    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>TODO LIST</h1>
          <br />
          <input
            type="text"
            placeholder="Add a Items"
            value={inputList}
            onChange={itemEvent}
          />

          <button onClick={listOfItems}> + </button>

          <ol>
            {item.map((itemval, index) => {
              return (
                <List
                  key={index}
                  id={index}
                  text={itemval}
                  onSelect={deleteItems}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};
export default Todolist;

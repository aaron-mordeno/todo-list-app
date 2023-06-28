import React, { useState } from "react";
import "./App.css";

function App() {
  const [newItem, setNewItem] = useState("");
  const [itemList, setItemList] = useState([]);

  function addItem() {
    if (!newItem) {
      alert("Please input an item");
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };

    setItemList((prevList) => [...prevList, item]);
    setNewItem("");
  }

  function deleteItem(itemId) {
    const updatedList = itemList.filter((item) => item.id !== itemId);
    setItemList(updatedList);
  }

  function clearAll() {
    setItemList([]);
  }

  return (
    <>
      <div className="header">
        <h1>To-Do List</h1>
      </div>

      <div className="input">
        <input
          type="text"
          className="item-input"
          placeholder="Add new item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        ></input>
        <button className="add-button" onClick={() => addItem()}>
          Add
        </button>
      </div>

      <div className="items-list">
        <ul>
          {itemList.map((item) => {
            return (
              <li key={item.id} className="item">
                {item.value}{" "}
                <button
                  className="delete-button"
                  onClick={() => deleteItem(item.id)}
                >
                  X
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <div>
        <button className="clear-all-button" onClick={clearAll}>
          Clear All
        </button>
      </div>
    </>
  );
}

export default App;

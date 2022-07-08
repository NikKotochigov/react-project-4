import React, { useState } from "react";
import Item from "./Item.js";
import AddItem from "./AddItem.js";
import ItemsList from "./ItemsList.js";
import { v1 as uuid } from "uuid";

export default function Shop() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const [discription, setDiscription] = useState("");

  function handleSubmitItem(event) {
    event.preventDefault();
    if (name !== "" && discription !== "") {
      const item = { id: uuid(), name: name, desc: discription };
      setItems([...items, item]);
      setName("");
      setDiscription("");
      setMsg("");
    } else {
      const msg = `${name === "" ? "Не заполнено название товара \n" : ""} ${discription === "" ? "Не заполнено описание товара" : ""
        }`;
      setMsg(msg);
    }
  }

  function handleSetName(event) {
    setName(event.target.value);
  }

  function handleSetDiscription(event) {
    setDiscription(event.target.value)
  }

  return (
    <>
      <AddItem onSubmitItem={handleSubmitItem} name={name} discription={discription} onSetName={handleSetName}
        onSetDiscription={handleSetDiscription} msg={msg}/>
      <div>
        {items.length === 0 && (
          <p className="ui-title">Добавьте первый товар</p>
        )}
      </div>
      <ItemsList items={items} onSetItems={setItems}/>
    </>
  );
}

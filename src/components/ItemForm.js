import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
const [newValue, setNewValue] = useState("")
const [newCategory, setNewCategory] = useState("Produce")

  function handleSubmit(event){
    event.preventDefault();
    const newItem = {
      id: uuid(),
      name: newValue,
      category: newCategory,
    };
    onItemFormSubmit (newItem)
    setNewValue("")
    setNewCategory("Produce")
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" required value={newValue} onChange={ e => setNewValue(e.target.value) }/>
      </label>

      <label>
        Category:
        <select name="category" value={newCategory} onChange={ e => setNewCategory(e.target.value)} >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
import { useState } from "react";



export default function Form() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };
    console.log(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <div>
      <h2 className="form__title">What do you need for your trip?</h2>
      <form onSubmit={handleSubmit} className="form">
        <select
          className="form__select"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="item..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="form__input"
        ></input>
        <button className="form__btn">Add</button>
      </form>
    </div>
  );
}

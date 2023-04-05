import { useState } from "react";

function InputForm({ CATEGORIES }) {

  const [text, settext] = useState("");
  const [source, setSource] = useState("");
  const [category, setCategory] = useState("");

  return (
    <form>
      <div className="input-form">
        <input
          type="text"
          placeholder="Input the fact here"
          value={text}
          onChange={(event) => settext(event.target.value)}
        />
        <span>{200-text.length}</span>
        <input
          type="text"
          placeholder="Input the URL to the source"
          value={source}
          onChange={(event) => setSource(event.target.value)}
        />
        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="">Choose a category</option>
          {CATEGORIES.map((cat) => (
            <option value={cat.name}>{cat.name.toUpperCase()}</option>
          ))}
        </select>
        <button className="btn btn-post">
          Post fact
        </button>
      </div>
    </form>
  );
}

export default InputForm;

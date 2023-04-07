import { useState } from "react";
import supabase from "./db.js";

function isURL(string) {
  let url;

  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }
  return url.protocol === "http:" || url.protocol === "https:";
}

function InputForm(props) {
  const CATEGORIES = props.CATEGORIES;
  const setFacts = props.setFacts;

  const [text, setText] = useState("");
  const [source, setSource] = useState("");
  const [category, setCategory] = useState("");

  async function submitFact(event) {
    event.preventDefault();

    if (text && isURL(source) && category) {

      const { data: newFact, error } = await supabase
        .from("Facts")
        .insert([{ text, source, category }])
        .select();

      setFacts((facts) => [newFact[0], ...facts]);
      setText("");
      setSource("");
      setCategory("");
    }
  }

  return (
    <form onSubmit={submitFact}>
      <div className="input-form">
        <input
          type="text"
          placeholder="Input the fact here"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <span>{text.length}</span>
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
        <button className="btn btn-post">Post fact</button>
      </div>
    </form>
  );
}

export default InputForm;

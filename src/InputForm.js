import { useState } from "react";

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
  const setShowForm = props.setShowForm;

  const [text, setText] = useState("");
  const [source, setSource] = useState("");
  const [category, setCategory] = useState("");

  function submitFact(event) {
    event.preventDefault();

    if (text && isURL(source) && category && text.length <= 200) {
      const newFact = {
        id: Math.round(Math.random() * 1000000),
        text: text,
        source: source,
        category: category,
        votesInteresting: 0,
        votesMindblowing: 0,
        votesFalse: 0,
        createdIn: new Date().getFullYear(),
      };
      setFacts((facts) => [newFact, ...facts]);
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
        <span>{200 - text.length}</span>
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

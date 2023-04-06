import "./styles.css";
import Header from "./Header.js";
import CategoryFilter from "./CategoryFilter";
import InputForm from "./InputForm";
import FactList from "./FactList";
import CATEGORIES from "./HashtagColor.js";
import initialFacts from "./initialFacts.js";
import { useState } from "react";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [facts, setFacts] = useState(initialFacts);

  return (
    <>
      <Header status={showForm} onButtonClick={setShowForm} />
      {showForm ? (
        <InputForm CATEGORIES={CATEGORIES} setFacts={setFacts} />
      ) : null}
      <main>
        <div className="main-body">
          <CategoryFilter CATEGORIES={CATEGORIES} />
          <FactList categories={CATEGORIES} initialFacts={facts} />
        </div>
      </main>
    </>
  );
}

export default App;

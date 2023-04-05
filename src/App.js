import "./styles.css";
import Header from "./Header.js";
import CategoryFilter from "./CategoryFilter";
import InputForm from "./InputForm";
import FactList from "./FactList";
import CATEGORIES from "./HashtagColor.js";
import { useState } from "react";

function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Header onButtonClick={setShowForm} />
      {showForm ? <InputForm CATEGORIES={CATEGORIES} /> : null}
      <main>
        <div className="main-body">
          <CategoryFilter CATEGORIES={CATEGORIES} />
          <FactList CATEGORIES={CATEGORIES} />
        </div>
      </main>
    </>
  );
}

export default App;

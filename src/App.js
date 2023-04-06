import "./styles.css";
import Header from "./Header.js";
import CategoryFilter from "./CategoryFilter";
import InputForm from "./InputForm";
import FactList from "./FactList";
import CATEGORIES from "./HashtagColor.js";
import supabase from "./db.js";
import { useState, useEffect } from "react";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [facts, setFacts] = useState([]);

  useEffect(function () {
    async function getData() {
      const { data: facts, error } = await supabase.from("Facts").select("*");
      setFacts(facts);
    }
    getData();
  }, []);

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

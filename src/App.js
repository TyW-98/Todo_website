import "./styles.css";
import Header from "./Header.js";
import CategoryFilter from "./CategoryFilter";
import InputForm from "./InputForm";
import FactList from "./FactList";
import CATEGORIES from "./HashtagColor.js";
import supabase from "./db.js";
import Loader from "./Loader.js";
import { useState, useEffect } from "react";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [facts, setFacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function getData() {
      setIsLoading(true);
      const { data: facts, error } = await supabase.from("Facts").select("*").order("votesInteresting", {ascending: false}).limit(100);
      setFacts(facts);
      setIsLoading(false);
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
          {isLoading ? (
            <Loader />
          ) : (
            <FactList categories={CATEGORIES} initialFacts={facts} />
          )}
        </div>
      </main>
    </>
  );
}

export default App;

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
  const [currentCategory, setCurrentCategory] = useState("all");

  useEffect(function () {
    async function getData() {
      setIsLoading(true);

      let query = supabase.from("Facts").select("*");

      if (currentCategory !== "all") {
        query = query.eq("category", currentCategory)
      } ; 

      const { data: facts, error } = await query
        .order("votesInteresting", { ascending: false })
        .limit(100);
      setFacts(facts);
      setIsLoading(false);

      console.log(error);
    }
    getData();
  }, [currentCategory]);

  return (
    <>
      <Header status={showForm} onButtonClick={setShowForm} />
      {showForm ? (
        <InputForm CATEGORIES={CATEGORIES} setFacts={setFacts} />
      ) : null}
      <main>
        <div className="main-body">
          <CategoryFilter CATEGORIES={CATEGORIES} setCurrentCategory={setCurrentCategory} />
          {isLoading ? (
            <Loader />
          ) : (
            <FactList categories={CATEGORIES} initialFacts={facts} setFacts={setFacts}/>
          )}
        </div>
      </main>
    </>
  );
}

export default App;

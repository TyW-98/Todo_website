import "./styles.css";
import Header from "./Header.js";
import CategoryFilter from "./CategoryFilter";
import InputForm from "./InputForm";
import FactList from "./FactList";
import CATEGORIES from "./HashtagColor.js";

function App() {
  return (
    <>
      <Header />
      <InputForm />
      <main>
        <div className="main-body">
          <CategoryFilter />
          <FactList CATEGORIES={CATEGORIES} />
        </div>
      </main>
    </>
  );
}

export default App;

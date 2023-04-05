import "./styles.css";
import Header from "./Header.js";
import CategoryFilter from "./CategoryFilter";
import InputForm from "./InputForm";
import FactList from "./FactList";

function App() {
  return (
    <>
      <Header />
      <InputForm />
      <main>
        <div className="main-body">
          <CategoryFilter />
          <FactList />
        </div>
      </main>
    </>
  );
}

export default App;

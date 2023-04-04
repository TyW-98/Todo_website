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
      <CategoryFilter />
      <FactList />
    </>
  );
}

export default App;

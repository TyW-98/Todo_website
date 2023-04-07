import Voting from "./Voting.js";

function FactList(props) {
  const CATEGORIES = props.categories;
  const facts = props.initialFacts;
  const setFacts = props.setFacts;

  return (
    <section id="main-content">
      <ul className="task-list">
        {facts.map((fact) => (
          <Fact key={fact.id} fact={fact} CATEGORIES={CATEGORIES} setFacts={setFacts}/>
        ))}
      </ul>
      <p className="loading-text">
        The total number of Facts currently on the website is {facts.length}.
      </p>
    </section>
  );
}

function Fact(props) {
  const { fact, CATEGORIES, setFacts } = props;

  return (
    <li className="task-item">
      <p>{fact.text}</p>
      <a href={fact.source} target="_blank" className="source">
        (Source)
      </a>
      <span
        className="hashtag"
        style={{
          backgroundColor: `${
            CATEGORIES.find((cat) => cat.name === fact.category.toLowerCase())
              .color
          }`,
        }}
      >
        {fact.category}
      </span>
      <div className="emoji-buttons">
        <Voting fact={fact} setFacts={setFacts}/>
      </div>
    </li>
  );
}

export default FactList;

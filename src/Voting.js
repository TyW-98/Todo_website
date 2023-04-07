import supabase from "./db.js";

function Voting(props) {

  const fact = props.fact;
  const setFacts = props.setFacts;

  async function handleVotes(btnName) {
    const { data: updatedFact, error } = await supabase
      .from("Facts")
      .update({ votesInteresting: fact.votesInteresting + 1 })
      .eq("id", fact.id)
      .select();

      if (!error) {
        setFacts((facts) => facts.map ((f) => f.id === fact.id ? updatedFact[0] : f))
      }
  }

  return (
    <>
      <button type="button" onClick={handleVotes}>
        👍 <strong>{fact.votesInteresting}</strong>
      </button>
      <button type="button">
        🚀 <strong>{fact.votesMindblowing}</strong>
      </button>
      <button type="button">
        👎 <strong>{fact.votesFalse}</strong>
      </button>
    </>
  );
}

export default Voting;

import supabase from "./db.js";
import { useState } from "react";

function Voting(props) {

  const fact = props.fact;
  const setFacts = props.setFacts;
  const [updatingBtn, setUpdatingBtn] = useState(false);

  async function handleVotes(selectedBtn) {
    setUpdatingBtn(true);
    const { data: updatedFact, error } = await supabase
      .from("Facts")
      .update({ [selectedBtn]: fact[selectedBtn] + 1 })
      .eq("id", fact.id)
      .select();

    setUpdatingBtn(false);

      if (!error) {
        setFacts((facts) => facts.map ((f) => f.id === fact.id ? updatedFact[0] : f))
      };
  }

  return (
    <>
      <button type="button" onClick={() => handleVotes("votesInteresting")} disabled={updatingBtn}>
        👍 <strong>{fact.votesInteresting}</strong>
      </button>
      <button type="button" onClick={() => handleVotes("votesMindblowing")} disabled={updatingBtn}>
        🚀 <strong>{fact.votesMindblowing}</strong>
      </button>
      <button type="button" onClick={() => handleVotes("votesFalse")} disabled={updatingBtn}>
        👎 <strong>{fact.votesFalse}</strong>
      </button>
    </>
  );
}

export default Voting;

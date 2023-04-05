function Voting({fact}) {
  return (
    <>
      <button type="button">
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

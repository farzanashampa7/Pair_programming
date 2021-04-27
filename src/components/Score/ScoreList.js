import ScoreItem from "./ScoreItem";

function ScoreList({ scores }) {
  return (
    <ul className="scores__list">
      {scores
        .sort((a, b) => b.score - a.score)
        .map((score, i) => {
          return <ScoreItem key={i} name={score.name} score={score.score} />;
        })}
    </ul>
  );
}

export default ScoreList;

function ScoreItem({ name, score }) {
  return (
    <li className="scores__item">
      <p className="scores__name-text">{name}</p>
      <p className="scores__score-text">{score}</p>
    </li>
  );
}

export default ScoreItem;

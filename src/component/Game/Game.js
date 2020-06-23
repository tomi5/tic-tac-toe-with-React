import React, { useState } from "react";
import Board from "../Board/Board";

import { calculateWinner } from "../../helpers";

const style = {
  width: "400px",
  margin: "20px auto",
  fontSize: "30px",
};

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);

  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);

  const handleClick = (i) => {
    const timeInHistory = history.slice(0, stepNumber + 1);
    const currrent = timeInHistory[stepNumber];
    const squeres = [...currrent];

    // if user clicked an occupied field or if game is won, return,
    if (winner || squeres[i]) return;
    // Put X or O in the clicked field
    squeres[i] = xIsNext ? "X" : "O";
    setHistory([...timeInHistory, squeres]);
    setStepNumber(timeInHistory.length);
    setXisNext(!xIsNext);
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setXisNext(step % 2 === 0);
  };

  const renderMoves = () =>
    history.map((_step, move) => {
      const destination = move ? `Go to move#${move}` : `Go to start`;
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{destination}</button>
        </li>
      );
    });

  return (
    <>
      <Board squares={history[stepNumber]} onClick={handleClick} />
      <div style={style}>
        <p>
          {winner ? `Winner: ${winner}` : `Next Player: ${xIsNext ? `X` : `O`}`}
        </p>
        {renderMoves()}
      </div>
    </>
  );
};

export default Game;

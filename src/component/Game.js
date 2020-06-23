import React, { useState } from "react";
import Board from "./Board";

import { calculateWinner } from "../helpers";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null)); // start with empty board
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (i) => {
    const boardCopy = [...board]; // we cannot mutete board directly so that is why copy is created
    // if user clicked an occupied field or if game is won, return,
    if (winner || boardCopy[i]) return;
    // Put X or O in the clicked field
    boardCopy[i] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXisNext(!xIsNext);
  };

  const jumpTo = () => {};

  const renderMoves = () => {};

  return <Board squares={board} onClick={handleClick} />;
};

export default Game;

import React, { useEffect, useRef, useState } from 'react';
import Board from '../Board/Board';
import HistoryList from '../HistoryList/HistoryList';
import './Game.scss';

import { boardSize } from '../../constants/general';

const Game = () => {
  const createBoard = (size = boardSize) =>
    Array.from(Array(size), () => new Array(size).fill(null));

  const getMoveId = (step) => (step % 2 ? 'O' : 'X');

  const [board, setBoard] = useState(createBoard(boardSize));
  const [history, setHistory] = useState([]);
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState(`Next player: ${getMoveId(step)}`);

  const calcBoardStep = (board) => {
    const applyElements = [].concat.apply([], board);
    const filterElements = applyElements.filter(
      (el) => el === 'X' || el === 'O'
    );
    return filterElements.length;
  };

  useEffect(() => {
    const newStep = calcBoardStep(board);

    const moveId = getMoveId(newStep);
    const prevMoveId = getMoveId(step);

    const winner = calculateWinner(board, boardSize);

    setStatus(
      winner
        ? `Winner: ${prevMoveId}`
        : newStep < boardSize ** 2
        ? `Next player: ${moveId}`
        : 'A draw'
    );
    setStep(newStep);
  }, [board]);

  const changeBoard = (board, moveId, positionI, positionJ) => {
    board[positionI][positionJ] = moveId;
    return setBoard([...board]);
  };

  const addHistoryItem = (moveId, positionI, positionJ) => {
    setHistory([...history.slice(0, step), { moveId, positionI, positionJ }]);
  };

  const doMove = (positionI, positionJ) => {
    if (
      Number.isInteger(positionI) &&
      Number.isInteger(positionJ) &&
      board[positionI][positionJ] === null &&
      status.includes('Next player')
    ) {
      changeBoard(board, getMoveId(step), positionI, positionJ);
      addHistoryItem(getMoveId(step), positionI, positionJ);
    }
  };

  const getPositionI = (position, size = boardSize) =>
    Math.floor(position / size);
  const getPositionJ = (position, size = boardSize) => position % size;

  const calculateWinner = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    const getVal = (position, squares = board) => {
      return squares[getPositionI(position)][getPositionJ(position)];
    };

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if (getVal(a) && getVal(a) === getVal(b) && getVal(a) === getVal(c)) {
        return getVal(a);
      }
    }
    return null;
  };

  const goToStep = (index, board) => {
    setStep(index);
    history.forEach((item, itemIndex) => {
      if (itemIndex < index)
        board[item.positionI][item.positionJ] = item.moveId;
      else board[item.positionI][item.positionJ] = null;
    });
    return setBoard([...board]);
  };

  return (
    <div className="Game">
      <div className="Game-board">
        <Board
          board={board}
          move={doMove}
          lastElHistory={step - 1 >= 0 && history[step - 1]}
        />
      </div>

      <div className="Game-info">
        <div>{status}</div>

        <HistoryList history={history} goToStep={goToStep} board={board} />
      </div>
    </div>
  );
};

Game.propTypes = {};

Game.defaultProps = {};

export default Game;

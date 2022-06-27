import React from 'react';
import PropTypes from 'prop-types';
import './Board.scss';
import BoardRow from './BoardRow';

const Board = ({ board, move, lastElHistory }) => {
  return (
    <div className="Board">
      {board.map((elemArrI, positionI) => (
        <BoardRow
          move={move}
          elemArrI={elemArrI}
          positionI={positionI}
          key={positionI}
          lastElHistory={lastElHistory}
        />
      ))}
    </div>
  );
};

Board.propTypes = {};

Board.defaultProps = {};

export default Board;

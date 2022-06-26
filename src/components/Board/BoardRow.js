import React from 'react';
import PropTypes from 'prop-types';
import './Board.scss';
import Square from '../Square/Square';

const BoardRow = ({ move, elemArrI, positionI }) => (
  <div className="Board-row">
    {elemArrI.map((elemArrJ, positionJ) => (
      <Square
        value={elemArrJ}
        positionI={positionI}
        positionJ={positionJ}
        move={move}
        key={positionJ}
      />
    ))}
  </div>
);

BoardRow.propTypes = {};

BoardRow.defaultProps = {};

export default BoardRow;

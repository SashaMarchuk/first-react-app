import React from 'react';
import './Square.scss';

const Square = ({ value, positionI, positionJ, move, last }) => {
  return (
    <button
      disabled={value}
      onClick={() => move(positionI, positionJ)}
      className={`Square ${!!value && 'active'} ${!!last && 'last'}`}
    >
      {value}
    </button>
  );
};
Square.propTypes = {};

Square.defaultProps = {};

export default Square;

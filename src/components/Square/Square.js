import React from 'react';
import './Square.scss';

const Square = ({ value, positionI, positionJ, move }) => {
  return (
    <button
      disabled={value}
      onClick={() => move(positionI, positionJ)}
      className="Square"
    >
      {value}
    </button>
  );
};
Square.propTypes = {};

Square.defaultProps = {};

export default Square;

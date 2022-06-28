import React from 'react';
import PropTypes from 'prop-types';
import styles from './HistoryList.scss';

const HistoryList = ({ history, goToStep, board }) =>
  !!history.length && (
    <ol className="HistoryList">
      <li>
        <button onClick={() => goToStep(0, board)}>Return to Start</button>
      </li>
      {history.map((item, index) => (
        <li key={index}>
          <button onClick={() => goToStep(index + 1, board)}>
            Return to #{index + 1}
          </button>
          <div>
            Position I: {item.positionI + 1}, Position J: {item.positionJ + 1}
          </div>
        </li>
      ))}
    </ol>
  );

HistoryList.propTypes = {};

HistoryList.defaultProps = {};

export default HistoryList;

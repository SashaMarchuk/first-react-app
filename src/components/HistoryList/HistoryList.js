import React from 'react';
import PropTypes from 'prop-types';
import styles from './HistoryList.scss';

const HistoryList = ({ history, goToStep, board }) =>
  !!history.length && (
    <ol className="HistoryList">
      <li>
        <button onClick={() => goToStep(0, board)}>Return to #0</button>
      </li>
      {history.map((item, index) => (
        <li key={index}>
          <button onClick={() => goToStep(index + 1, board)}>
            Return to #{index + 1}
          </button>
        </li>
      ))}
    </ol>
  );

HistoryList.propTypes = {};

HistoryList.defaultProps = {};

export default HistoryList;

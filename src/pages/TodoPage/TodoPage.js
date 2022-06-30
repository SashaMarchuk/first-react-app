import React from 'react';
import PropTypes from 'prop-types';
import './TodoPage.scss';
import Todo from '../../components/Todo/Todo';

const TodoPage = () => (
  <div className="TodoPage">
    <Todo />
  </div>
);

TodoPage.propTypes = {};

TodoPage.defaultProps = {};

export default TodoPage;

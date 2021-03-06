import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { List } from 'semantic-ui-react';

import styles from './Todo.scss';

/**
 * Renders a single todo
 * @param {Object} props - component props
 * @param {Function} props.onClick - function to call when todo is clicked
 * @param {boolean} props.completed - boolean indicating completion status of todo
 * @param {string} props.text - text describing todo
 */
const Todo = ({ onClick, completed, text }) => {
  const className = classNames(
    styles.todo,
    { [styles.completed]: completed },
  );

  return (
    <List.Item
      className={className}
      onClick={onClick}
    >
      {text}
    </List.Item>
  );
};

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;

import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

const Button = ({ children, disabled, onClick, type }) => {
  const btnCls = disabled ? styles.disabled : styles.button;

  return (
    <button className={btnCls} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => {},
  disabled: false,
  type: 'button',
};

export default Button;

import React from 'react';
import PropTypes from 'prop-types';
import css from './Notification.module.css';

const Notification = ({ message }) => {
  return <section className={css.message}>{message}</section>;
};
export default Notification;

Notification.propTypes = {
  message: PropTypes.string,
};

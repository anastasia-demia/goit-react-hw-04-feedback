import PropTypes from 'prop-types';
import css from './Notification.module.css'

export const Notification = ({ message }) => {
  return (
    <div>
      <p className={css.text}>{message}</p>
    </div>
  )
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
}

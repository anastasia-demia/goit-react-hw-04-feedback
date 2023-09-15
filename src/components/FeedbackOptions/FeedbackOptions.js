import PropTypes from 'prop-types';
import css from './Feedback.module.css'

export const FeedbackOptions = ({
  options, onButtonClick
}) => {
  return (
    <ul className={css.list}>
      {options.map(option => (
        <li className={css.item} key={option}>
          <button
            className={css.button}
            type="button"
            name={option}
            onClick={onButtonClick}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>

  )
}

FeedbackOptions.protoTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

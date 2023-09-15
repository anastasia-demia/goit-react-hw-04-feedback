import PropTypes from 'prop-types';
import css from './Statistics.module.css'

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <ul className={css.list}>
      <li className={css.item}>
        <p className={css.text}>
          Good: {good}
        </p>
      </li>
      <li className={css.item}>
        <p className={css.text}>
          Neutral: {neutral}
        </p>
      </li>
      <li className={css.item}>
        <p className={css.text}>
          Bad: {bad}
        </p>
      </li>
      <li className={css.item}>
        <p className={css.text}>
          Total: {total}
        </p>
      </li>
      <li className={css.item}>
        <p className={css.text}>
          Positive feedback: {positivePercentage}
        </p>
      </li>
    </ul>
    </div>
  )
};

Statistics.defaultProps = {
  good: 0,
  neutral: 0,
  bad: 0,
  total: 0,
  positivePercentage: 0,
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

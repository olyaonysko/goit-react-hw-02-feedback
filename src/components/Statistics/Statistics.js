import PropTypes from 'prop-types';
import Section from '../Section';
import Notification from './Notification';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <Section title={'Statistics'}>
      {total ? (
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad:{bad}</li>
          <li>Total: {total}</li>
          <li>Positive feedback: {positivePercentage}%</li>
        </ul>
      ) : (
        <Notification message={'No feedback given'} />
      )}
    </Section>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;

import PropTypes from 'prop-types';
import Section from '../Section';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Section title={'Please leave feedback'}>
      {options.map(feedback => (
        <button
          type="button"
          key={feedback}
          name={feedback}
          onClick={() => onLeaveFeedback(feedback)}
        >
          {feedback}
        </button>
      ))}
    </Section>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;

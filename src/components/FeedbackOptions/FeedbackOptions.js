import PropTypes from 'prop-types';
import Section from '../Section';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Section title={'Please leave feedback'}>
      {Object.keys(options).map(key => (
        <button
          type="button"
          key={key}
          name={key}
          onClick={() => onLeaveFeedback(key)}
        >
          {key}
        </button>
      ))}
    </Section>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;

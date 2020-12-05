import React, { Component } from 'react';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = nameBtn => {
    this.setState({ [nameBtn]: this.state[nameBtn] + 1 });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, stat) => {
      acc += stat;
      return acc;
    }, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={this.handleFeedback}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </>
    );
  }
}

export default App;

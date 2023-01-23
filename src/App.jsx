import { Component } from 'react';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Section from 'components/Section/Section';
import Statistics from 'components/Statistic/Statistic';
import Notification from 'components/Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  statePropNames = Object.keys(this.state);

  onLeaveFeedback = feedback => {
    this.setState(prevState => ({
      [feedback]: prevState[feedback] + 1,
    }));
  };

  countTotalFeedback = () => {
    let total = 0;
    for (const statePropName of this.statePropNames) {
      total += this.state[statePropName];
    }
    return total;
  };
  countPositiveFeedbackPercentage = () => {
    const positiveFidback = Math.round(
      (this.state.good * 100) / this.countTotalFeedback()
    );
    return positiveFidback || '';
  };

  render() {
    return (
      <>
        <Section title="Please leave the feedback">
          <FeedbackOptions
            options={this.statePropNames}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        {this.countTotalFeedback() !== 0 && (
          <Section title="Statistics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          </Section>
        )}
        {this.countTotalFeedback() === 0 && (
          <Notification message="There is no feedback"></Notification>
        )}
      </>
    );
  }
}

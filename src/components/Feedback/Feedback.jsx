import { Component } from 'react';
import { Section } from '../Section/Section';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Statistics } from '../Statistics/Statistics';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onLeaveFeedback = name => {
    this.setState(prevState => {
      // console.log(prevState);
      return { [name]: prevState[name] + 1 };
    });
  };
  isTotal = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  isPositivePercentage = total => {
    return Number(((this.state.good / total) * 100).toFixed(0));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.isTotal();
    const positivePercentage = this.isPositivePercentage(total);
    return (
      <section>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            'There is no feedback'
          )}
        </Section>
      </section>
    )
  }
}

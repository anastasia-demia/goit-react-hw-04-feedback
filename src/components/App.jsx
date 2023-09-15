import { Component } from 'react';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = (e) => {
    const button = e.target.name
    if (button) {
    this.setState(prevState => ({
      [button]: prevState[button] + 1,
      }))
    }
    console.log(button);
    console.log(this.state.good);
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedback = () => {
    const totalFeedback = this.countTotalFeedback();
    const goodFeedback = this.state.good;
    let result = 0;

    if (totalFeedback > 0) {
      result = Math.ceil((goodFeedback / totalFeedback) * 100);
    }

    return `${result}%`;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);


    return(
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onButtonClick={this.handleClick}/>
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedback()}
            /> ) :
            ( <Notification message="No feedback yet."/>
          )}
        </Section>
      </>
    )
  }
};

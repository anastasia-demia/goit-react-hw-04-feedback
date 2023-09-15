import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { useState } from 'react';

export const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClick = (e) => {
    const button = e.target.name
    if ( button === 'good' ) {
      setGood(prevState => prevState + 1);
      return;
    } if ( button === 'neutral' ) {
      setNeutral(prevState => prevState + 1);
      return;
    } else (
      setBad(prevState => prevState + 1)
    )
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedback = () => {
    const totalFeedback = countTotalFeedback();
    const goodFeedback = good;
    let result = 0;

    if (totalFeedback > 0) {
      result = Math.ceil((goodFeedback / totalFeedback) * 100);
    }

    return `${result}%`;
  };

  const options = ['good', 'neutral', 'bad'];

  return (
    <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onButtonClick={handleClick}/>
        </Section>
        <Section title="Statistics">
          {countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedback()}
            /> ) :
            ( <Notification message="No feedback yet."/>
          )}
        </Section>
      </>
  );
};

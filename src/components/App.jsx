import { useState} from 'react';
import FeedbackOptions from './Feedback';
import Statistics from './Statistics';
import Section from './Section';
import Notification from './Notification';


export function App() {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];

  const countTotalFeedback = () => {
    return good + neutral + bad;
  }

  const countPositiveFeedbackPercentage = () => {
    const positiveFeedback = good;
    const totalFeedback = countTotalFeedback();

    if (positiveFeedback) {
      const positiveFeedbackPercentage = Math.round((positiveFeedback * 100) / totalFeedback);
      return positiveFeedbackPercentage;
    } else {
      return 0;
    };
  }

 

  const onLeaveFeedback = (e) => {
    const name = e;

      switch (name) {
        case 'good':
          setGood(good + 1);
          break;
        
        case 'neutral':
          setNeutral(neutral + 1);
          break;
        
        case 'bad':
          setBad(bad + 1);
          break;
      
        default:
          break;
      }
  }

  



  return (
    <>
      <Section title='Please leave feedback'>
        <FeedbackOptions onLeaveFeedback={onLeaveFeedback} options={options} />
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback"></Notification>
        ) : (
            <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback} positivePercentage={countPositiveFeedbackPercentage} />
        )}
        
      </Section>
    </>
  );
}

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   }

  // countTotalFeedback = () => {
  //   const feedbackValues = Object.values(this.state);
  //   return feedbackValues.reduce((acc, value) => {
  //     acc += value;
  //     return acc;
  //   }
  //   )
  // }

  // countPositiveFeedbackPercentage() {
  //   const positiveFeedback = this.state.good;
  //   const totalFeedback = this.countTotalFeedback();

  //   if (positiveFeedback) {
  //     const positiveFeedbackPercentage = Math.round((positiveFeedback * 100) / totalFeedback);
  //     return positiveFeedbackPercentage;
  //   } else {
  //     return 0;
  //   }
  // }

  // onLeaveFeedback = (key) => {
  //   this.setState(prevState => ({
  //     [key]: prevState[key] + 1,
  //   }));
  // }

//   render() {
//     const options = Object.keys(this.state);

//     return (
      // <>
      //   <Section title='Please leave feedback'>
      //     <FeedbackOptions
      //       options={options}
      //       onLeaveFeedback={this.onLeaveFeedback} />

          // {this.countTotalFeedback() === 0 ? (
          //   <Notification message="There is no feedback"></Notification>
          // ) : (
          //   <Statistics
          //     feedbackType={this.state}
          //     total={this.countTotalFeedback()}
          //     positivePersantage={this.countPositiveFeedbackPercentage()}
          //   />
          // )}
      //   </Section>
      // </>
//     )
//   }
// }


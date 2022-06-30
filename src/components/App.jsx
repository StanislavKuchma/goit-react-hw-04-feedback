import React, { useState} from "react";
import Statistics from "./Feedback/Statistics";
import FeedbackOptions from "./Feedback/FeedbackOptions";
import Section from "./Feedback/Section";
import Notification from "./Feedback/Notification";
import PropTypes from 'prop-types'

const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const onLeaveFeedback = ({ data }) => {
        if (data === 'good') { setGood(state=>state+1) }
        if (data === 'neutral') { setNeutral(state=>state+1) }
        if(data === 'bad'){setBad(state=>state+1)}
    }

const countTotalFeedback = ({good, neutral, bad}) => {
        let total = good + neutral + bad
        return total
    }

const countPositiveFeedbackPercentage = ({good,neutral,bad}) => {
        let percentage = Math.round(good * 100 / (good + neutral + bad))
        return percentage
    }
             return (
                 <div
                     style={{
                     height: '100vh',
                     justifyContent: 'center',
                     alignItems: 'center',
                     fontSize: 40,
                     color: '#010101'
                 }}>
                     <Section title="Please leave feedback" children={[<FeedbackOptions />, <Notification />]}>
                         <FeedbackOptions
                             options={['good', 'neutral', 'bad']}
                             onLeaveFeedback={onLeaveFeedback}
                         />
                         { good  +  neutral  + bad === 0 ?
                             <Notification message="There is no feedback" /> :
                             < Statistics
                                 good={good}
                                 neutral={neutral}
                                 bad={bad}
                                 total={countTotalFeedback({good, neutral, bad})}
                                 positivePercentage={countPositiveFeedbackPercentage({good, neutral, bad})}
                                />}
                        </Section>
                 </div>
             )
}
App.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
};
export default App;
import React from "react";
import Statistics from "./Feedback/Statistics";
import FeedbackOptions from "./Feedback/FeedbackOptions";
import Section from "./Feedback/Section";
import Notification from "./Feedback/Notification";
import PropTypes from 'prop-types'


 export class App extends React.Component{
    constructor() {
        super();
        this.state = {
            good: 0,
            neutral: 0,
            bad: 0
        }
}

    onLeaveFeedback = ({ data }) => {
    this.setState(prevState=>{return{[data]: prevState[data] + 1}})
    }

    countTotalFeedback = ({good, neutral, bad}) => {
        let total = good + neutral + bad
        return total

    }

    countPositiveFeedbackPercentage = () => {
        let percentage = Math.round(this.state.good * 100 / (this.state.good + this.state.neutral + this.state.bad))
        return percentage
    }

         render(){
             return (
                 <div style={{
                     height: '100vh',
                     justifyContent: 'center',
                     alignItems: 'center',
                     fontSize: 40,
                     color: '#010101'
                 }}>
                     <Section title="Please leave feedback" children={[<FeedbackOptions />, <Notification />]}>
                         <FeedbackOptions
                             options={['good', 'neutral', 'bad']}
                             onLeaveFeedback={this.onLeaveFeedback}
                         />
                         {this.state.good + this.state.neutral + this.state.bad === 0 ?
                             <Notification message="There is no feedback" /> :
                             < Statistics
                                 good={this.state.good}
                                 neutral={this.state.neutral}
                                 bad={this.state.bad}
                                 total={this.countTotalFeedback(this.state)}
                                 positivePercentage={this.countPositiveFeedbackPercentage(this.state)}
                        
                             />}
   
                     </Section>
                 </div>
             )

         }

}
     App.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
};

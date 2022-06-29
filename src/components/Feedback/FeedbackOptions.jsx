import React from "react";
import PropTypes from 'prop-types'
const FeedbackOptions = ({ options, onLeaveFeedback }) => {

    return <>
        {options.map(data =>       
            <button key={data}
                style={{
                width: 100,
                height: 50,
                marginRight: 20
                }}
                onClick={()=>onLeaveFeedback({data})} className="button">{data}</button>
      )}     
    </>
}


FeedbackOptions.propTypes = {
    options: PropTypes.array,
    onLeaveFeedback: PropTypes.func,
};
export default FeedbackOptions;

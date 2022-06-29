import React from "react";
import PropTypes from 'prop-types'

const Section = ({title, children}) => {
    
    return <>
        <p>{title}</p>
        {children}

    </>
}
Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.array,
};


export default Section;
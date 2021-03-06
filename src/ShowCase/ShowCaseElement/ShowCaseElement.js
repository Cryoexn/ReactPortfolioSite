import React from 'react'
import './ShowCaseElement.css'

const showCaseElement = (props) => {
    return (
        <div className="sc-element" >
            <a className="repo-link" href={props.link}>
            <img className="sc-image" src={props.image} alt={props.alt}/>
            <div className="element-details">
                <h2 className="sc-title">{props.title}</h2>
                <p className="sc-desc">{props.desc}</p>
            </div>
            </a>
        </div>
    );
}

export default showCaseElement;

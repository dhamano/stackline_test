import React from 'react';

import Tags from './Tags';

import IconHome from '../imgs/icon-home.png';
import IconGraph from '../imgs/icon-graph.png';

const Sidebar = (props) => {
    console.log('SIDEBAR PROPS', props);
    return (
        <div className="sidebar">
            <img src={props.image} alt={props.title} title={props.title} />
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
            <div className="tags">
                {
                    props.tags.map( (tagName, i) => {
                        return <Tags name={tagName} key={`tag-${i}`} />
                    })
                }
            </div>
            <ul className="views">
                <li className="overview">Overview</li>
                <li className="sales active">Sales</li>
            </ul>
        </div>
    )
}

export default Sidebar;
import React from 'react';
import PropTypes from 'prop-types';
// import * as d3 from 'd3';

const GraphDisplay = props => {

    // TODO: d3 Graph work

    return (
        <div className="graph-display">
            <h2>Retail Sales</h2>
            <svg width="100%" height="500" style={{border:'solid 1px #eee',borderBottom:'solid 1px #ccc'}} />
        </div>
    )

}

GraphDisplay.propTypes = {
    sales:  PropTypes.arrayOf(PropTypes.shape({
        weekEnding:     PropTypes.string,
        retailSales:    PropTypes.number,
        wholesaleSales: PropTypes.number,
        unitsSold:      PropTypes.number,
        retailerMargin: PropTypes.number
    })),
    keys:   PropTypes.arrayOf(PropTypes.string)
}

export default GraphDisplay;
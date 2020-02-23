import React from 'react';
import * as d3 from 'd3';

class Graph extends React.Component {

    componentDidMount(){
        this.draw();
    }

    draw() {
        const svg = d3.select("svg");
        const margin = {top: 50, right: 20, bottom: 50, left: 50};
        const width = 960 - margin.left - margin.right;
        const height = 500 - margin.top - margin.bottom;
        const g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        let firstDate = "2000-1-1";
        let length = this.props.sales.length - 1;
        let lastDate = "2000-1-1";

        if (this.props.sales.length > 0) {
            firstDate = this.props.sales[0]['weekEnding'];
            length = this.props.sales.length - 1;
            lastDate = this.props.sales[length]['weekEnding'];
            console.log(lastDate, firstDate);
        }

        const x = d3.scaleTime().domain([ new Date(2012, 0, 1), new Date(2012, 11, 31) ]).range([ 0, width ]);
        const y = d3.scaleLinear().rangeRound([ height, 0 ]);

        const make_x_grid_lines = () => {
            return d3.axisBottom(x).ticks(10);
        }

        // const make_y_grid_lines = () => {
        //     return d3.axisLeft(y).ticks(10);
        // }

        const lineCount = d3.line()
                            .x( function(d) { return x(d.date) })
                            .y( function(d) { return y(d.money) });

        // g.append("g")
        //     .attr("class", "grid")
        //     .attr("transform", "translate(0," + height + ")")
        //     .call(make_x_grid_lines()
        //         .tickSize(-height)
        //         .tickFormat("")
        //     )

        // g.append("g")
        //     .attr("class", "grid")
        //     .call(make_y_grid_lines()
        //         .tickSize(-width)
        //         .tickFormat("")
        //     )

        g.append("g")
            .attr("class", 'axis axis--x')
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x));

        // g.append("g")
        //     .attr("class", 'axis axis--y')
        //     .call(d3.axisLeft(y));
    }

    render() {
        return (
            <div>
                d3 Chart
                <svg width="100%" height="500" style={{border:'solid 1px #eee',borderBottom:'solid 1px #ccc'}} />
            </div>
        )        
    }

}

export default Graph;
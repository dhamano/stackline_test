import React, { useState, useEffect } from 'react';

import ListingRow from './ListingRow';

const Listings = props => {
    const [theList, setTheList] = useState(props.sales);

    useEffect( () => {
        setTheList(props.sales);
    }, [props])

    const orderHandler = e => {
        let key = e.target.getAttribute('name');
        let largest, smallest;
        let sortList = theList.slice();
        let whichWay = 'desc';

        if (key === 'weekEnding') {
            largest = Math.max.apply(Math, theList.map(item => Date.parse(item[key])));
            smallest = Math.min.apply(Math, theList.map(item => Date.parse(item[key])));
            if( Date.parse(theList[0][key]) === largest) {
                whichWay = 'asc';
            } else if ( Date.parse(theList[0][key]) === smallest ) {
                whichWay = 'desc';
            }
        } else {
            largest = Math.max.apply(Math, theList.map(item => item[key]));
            smallest = Math.min.apply(Math, theList.map(item => item[key]));
            if( theList[0][key] === largest) {
                whichWay = 'asc';
            } else if ( theList[0][key] === smallest ) {
                whichWay = 'desc';
            }
        }
        if(whichWay === 'desc') {
            sortList.sort( (a, b) => {
                let itemA, itemB;
                if (key === 'weekEnding') {
                    itemA = Date.parse(a[key]);
                    itemB = Date.parse(b[key]);
                } else {
                    itemA = a[key];
                    itemB = b[key];
                }
                if( itemA > itemB ) {
                    return -1
                } else {
                    return 1
                }
            })
        } else {
            sortList.sort( (a, b) => {
                let itemA, itemB;
                if (key === 'weekEnding') {
                    itemA = Date.parse(a[key]);
                    itemB = Date.parse(b[key]);
                } else {
                    itemA = a[key];
                    itemB = b[key];
                }
                if( itemA > itemB ) {
                    return 1
                } else {
                    return -1
                }
            })
        }
        setTheList(sortList);
    }

    return (
        <table className="listing">
            <thead>
                <tr>
                    <td><span onClick={orderHandler} name={props.keys[0]}>Week Ending</span></td>
                    <td><span onClick={orderHandler} name={props.keys[1]}>Retail Sales</span></td>
                    <td><span onClick={orderHandler} name={props.keys[2]}>Wholesale Sales</span></td>
                    <td><span onClick={orderHandler} name={props.keys[3]}>Units Sold</span></td>
                    <td><span onClick={orderHandler} name={props.keys[4]}>Retailer Margin</span></td>
                </tr>
            </thead>
            <tbody>
            {
                theList.map( (item, i) => {
                    return <ListingRow item={item} key={`data-${i}`} />
                })
            }
            </tbody>
        </table>
    )
}

export default Listings;
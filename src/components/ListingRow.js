import React from 'react';

const ListingRow = props => {

    const currencyFormat = new Intl.NumberFormat('en-US', {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0
    })

    return (
        <tr>
            <td>{props.item.weekEnding}</td>
            <td>{currencyFormat.format(props.item.retailSales)}</td>
            <td>{currencyFormat.format(props.item.wholesaleSales)}</td>
            <td>{props.item.unitsSold}</td>
            <td>{currencyFormat.format(props.item.retailerMargin)}</td>
        </tr>
    )
}

export default ListingRow;
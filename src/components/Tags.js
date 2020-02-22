import React from 'react';

const ItemTags = props => {
    console.log('TAGS', props)
    return (
        <div>{props.name}</div>
    )
}

export default ItemTags;
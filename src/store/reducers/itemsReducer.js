import {
    GET_ITEM_LIST_START,
    GET_ITEM_LIST_SUCCESS,
    GET_ITEM_LIST_FAIL
} from '../actions';

const initialState = {
    id:         null,
    title:      "",
    image:      "",
    subtitle:   "",
    brand:      "",
    reviews:    [],
    retailer:   "",
    details:    [],
    tags:       [],
    sales:      []
}

export const itemReducer = ( state = initialState, action) => {
    switch(action.type) {
        case GET_ITEM_LIST_START:
            return {
                ...state,
                error:      "",
                id:         "",
                title:      "",
                image:      "",
                subtitle:   "",
                brand:      "",
                reviews:    [],
                retailer:   "",
                details:    [],
                tags:       [],
                sales:      [],
                isFetching: true
            };
        case GET_ITEM_LIST_SUCCESS:
            return {
                ...state,
                error:      "",
                id:         action.payload.id,
                title:      action.payload.title,
                image:      action.payload.image,
                subtitle:   action.payload.subtitle,
                brand:      action.payload.brand,
                reviews:    action.payload.reviews,
                retailer:   action.payload.retailer,
                details:    action.payload.details,
                tags:       action.payload.tags,
                sales:      action.payload.sales,
                isFetching: false
            };
        case GET_ITEM_LIST_FAIL:
            return {
                error:      action.payload,
                isFetching: false
            };
        default:
            return state;
    }
}
import jsonMockData from '../../data/Webdev_data2.json';

export const GET_ITEM_LIST_START    = "GET_ITEM_LIST_START";
export const GET_ITEM_LIST_SUCCESS  = "GET_ITEM_LIST_SUCCESS";
export const GET_ITEM_LIST_FAIL     = "GET_ITEM_LIST_FAIL"; // not needed since we're using a file

export const getItemList = () => dispatch => {
    dispatch({ type: GET_ITEM_LIST_START });
    let mockData = jsonMockData[0];
    dispatch({
        type: GET_ITEM_LIST_SUCCESS,
        payload: mockData
    })
}
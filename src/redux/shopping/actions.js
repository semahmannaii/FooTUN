import * as actionTypes from "./types"

export const addItem = (itemID) => {
    return {
        type: actionTypes.ADD_ITEM,
        payload: {
            id: itemID
        }
    }
}

export const removeItem = (itemID) => {
    return {
        type: actionTypes.REMOVE_ITEM,
        payload: {
            id: itemID
        }
    }
}

export const adjustQty = (itemID, value) => {
    return {
        type: actionTypes.ADJUST_QTY,
        payload: {
            id: itemID,
            qty: value
        }
    }
}

export const loadCurrentItem = (item) => {
    return {
        type: actionTypes.LOAD_CURRENT_ITEM,
        payload: item
    }
}
const itemsLoaded = (newItems) => {
    return {
        type: 'ITEMS_LOADED',
        payload: newItems
    }
}


export const deleteItem = (itemId) => {
    return {
        type: 'ITEM_REMOVED_FROM_CATALOG',
        payload: itemId
    }
}

export const deleteAllItems = (itemId) => {
    return {
        type: 'ALL_ITEMS_REMOVED_FROM_CATALOG',
        payload: itemId
    }
}

export const addItemToCatalog = (payload) => {
    return {
      type: 'ADD_ITEM_TO_CATALOG',
      payload
    };
  };


export {
    itemsLoaded
};
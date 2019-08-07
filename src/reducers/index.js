const initialState = {
    items: []
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ITEMS_LOADED':
            return {
                ...state,
                items: action.payload
            };


        case 'ITEM_REMOVED_FROM_CATALOG':
            return deleteItem(state, action.payload);

        case 'ADD_ITEM_TO_CATALOG':
            return addItemToCatalog(state, action);

        default:
            return state;
    }

}


const deleteItem = (state, itemId) => {
    const { items } = state;

    return {
        items: [
            ...items.slice(0, itemId),
            ...items.slice(itemId + 1),
        ]
    };
};


const addItemToCatalog = (state, { payload }) => {
    const { items } = state;
    const newItem = {
        id: items.length,
        title: payload.title,
        price: +payload.price,
        coverImage: "http://eriomem.nl/wp-content/uploads/2018/12/coming-soon.png"
    };

    return {
        items: [
            ...items,
            newItem
        ]
    };
};


export default reducer;
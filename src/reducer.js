const initialState = {
    products: [{
        number: 1,
        name: 'Milk',
        comments: 'Not skim!',
        price: 1.05,
        tax: 7
    }, {
        number: 2,
        name: 'Eggs',
        comments: '',
        price: 2.5,
        tax: 7
    }]
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default reducer;

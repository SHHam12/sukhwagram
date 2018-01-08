// imports

// actions

// action creators

// initial state

const iniialState = {
    isLoggedIn: localStorage.getItem("jwt") || false
};

// reducer

function reducer(state = iniialState, action) {
    switch (action.type){
        default:
            return state;
    }    
}
// reducer functions

// exports

// reducer export

export default reducer;
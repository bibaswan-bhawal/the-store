import DIR_DATA from "./directory.data";

const INTIAL_STATE = {
    sections: DIR_DATA
};

const directoryReducer = (state = INTIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default directoryReducer;
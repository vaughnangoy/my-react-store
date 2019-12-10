import { ActionType } from '../state.constants';

const INITIAL_STATE = { currentUser: null };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionType.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload,
            };
        default:
            return state;
    }
};

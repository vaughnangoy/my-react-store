import { ActionType } from '../state.constants';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionType.SNIPPET:
            return {
                ...state,
                snippet: action.payload,
            };
        default:
            return state;
    }
};

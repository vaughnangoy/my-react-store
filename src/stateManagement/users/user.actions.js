import { ActionType } from '../state.constants';

export const userAction = payload => ({
    type: ActionType.SET_CURRENT_USER,
    payload,
});

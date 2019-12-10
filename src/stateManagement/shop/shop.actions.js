import { ActionType } from '../state.constants';

export const snippetAction = payload => ({
    type: ActionType.SNIPPET,
    payload,
});

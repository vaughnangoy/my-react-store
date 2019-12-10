import { createSelector } from 'reselect';

const select = state => state;

export const selectData = createSelector([select], data => data);

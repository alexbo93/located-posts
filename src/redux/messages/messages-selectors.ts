import { State } from '../types';

export const selectMessages = (state: State) => state.messages;
export const selectSuccessMessages = (state: State) => selectMessages(state).success;
export const selectErrorMessages = (state: State) => selectMessages(state).error;

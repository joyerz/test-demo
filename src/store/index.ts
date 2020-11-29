
import { createStore } from 'little-state-machine';

createStore({
  history: null,
  data: null,
});

export default {};

/**
 * update store
 * @param state
 * @param payload
 */
export function updateState(state, payload) {
  return {
    ...state,
    data: payload.data,
    history: state.history instanceof Array
      ? [...state.history, payload.history]
      : [payload.history],
  };
}


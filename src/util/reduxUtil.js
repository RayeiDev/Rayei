

/**
 * Convenience method to simplify action class setup
 */
export const createAction = (type, payload) => {
  if (!type) {
    throw new Error('Action Type must be truthy');
  }
  if (payload && payload.type) {
    throw new Error(
      "Action payload cannot have a 'type' field - it would overwrite the Action's type"
    );
  }
  return { type, ...payload };
};

/**
 * Convenience method to simplify reducer setup
 */
export const createReducer = (initialState, config) => {
  return (state = initialState, action) => {
    if (config[action.type]) {
      return config[action.type](state, action);
    }
    return state;
  };
};
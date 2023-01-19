const initialState = {
  other: null
};

export default function initialStateFunc (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'SET_OTHER':
      return {
        ...state,
        other: payload
      }
  }

  return state;
}

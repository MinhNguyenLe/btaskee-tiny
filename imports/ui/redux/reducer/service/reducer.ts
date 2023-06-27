const initialState = {
  data: [],
  total: 0,
};

export function testDispatch(params) {
  return {
    type: "TEST",
    payload: params,
  };
}

const serviceReducer = (state: any = initialState, { type, payload }) => {
  const newState = { ...state };
  switch (type) {
    case "TEST":
      newState.total = payload;
      return newState;
    default: {
      return newState;
    }
  }
};

export default serviceReducer;

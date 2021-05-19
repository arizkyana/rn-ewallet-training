import ACTIONS from '@libraries/actions';

interface IRootStates {
  isLoading: boolean;
}

const initialState: IRootStates = {
  isLoading: false,
};

export default function reducer(
  state: IRootStates = initialState,
  action: { type: string },
): IRootStates {
  const { LOADING } = ACTIONS;
  const { type } = action;
  switch (type) {
    case LOADING:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
}

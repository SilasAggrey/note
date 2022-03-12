import { V4 as uuid } from "uuid";

const initialState = {
  notes: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_NOTE":
      return {
        ...state,
        notes: [...state.notes, action],
      };
    default:
      return state;
  }
};

export default reducer;

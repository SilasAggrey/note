const initialState = {
  notes: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };
    case "DELETE_NOTE":
      const updatedNotes = state.notes.filter(
        (note) => note.id !== action.payload
      );
      return {
        ...state,
        notes: updatedNotes,
      };
    case "EDIT_NOTE":
      let notes = state.notes.map((note) => {
        if (note.id === action.payload.id) return action.payload;
        return note;
      });
      return {
        ...state,
        notes,
      };
    default:
      return state;
  }
};

export default reducer;

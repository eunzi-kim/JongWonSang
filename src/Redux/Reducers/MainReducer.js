import MAIN_CATEGORY from "../Type/MainType";

const initialState = "main";

const MainReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case MAIN_CATEGORY:
      return payload;
    default:
      return state;
  }
};

export default MainReducer;

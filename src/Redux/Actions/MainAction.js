import MAIN_CATEGORY from "../Type/MainType";

const ActiveCategory = (category) => {
  return {
    type: MAIN_CATEGORY,
    payload: category,
  };
};

export default ActiveCategory;

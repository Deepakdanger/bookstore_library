import { CHANGE_FILTER } from '../actions/index';

const filterReducer = (state = 'All', action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      console.log(action);
      return action.filter;
    default:
      return state;
  }
};
export default filterReducer;

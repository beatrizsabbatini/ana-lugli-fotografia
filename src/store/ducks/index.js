import { combineReducers } from "redux";

import bannerItems from './bannerItems';
import register from './register';
import login from './login';

export default combineReducers({
  register,
  login,
  bannerItems,
});

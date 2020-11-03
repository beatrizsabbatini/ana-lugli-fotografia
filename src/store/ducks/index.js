import { combineReducers } from "redux";

import bannerItems from './bannerItems';
import register from './register';
import login from './login';
import fileSearch from './fileSearch';

export default combineReducers({
  register,
  login,
  bannerItems,
  fileSearch
});

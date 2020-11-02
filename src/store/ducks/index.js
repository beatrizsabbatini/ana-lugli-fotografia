import { combineReducers } from "redux";

import users from "./users";
import bannerItems from './bannerItems';

export default combineReducers({
  users,
  bannerItems
});

import {combineReducers} from "redux";
import DashboardReducer from "./DashboardReducer";

const RootReducer = combineReducers({
  recordList: DashboardReducer,
});

export default RootReducer;
import { combineReducers } from "redux";
import kontak from "./kontak/kontakReducer";

export default combineReducers({ kontakIndexReducer: kontak });

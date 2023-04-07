import { combineReducers } from "@reduxjs/toolkit";
import { userRecuder } from "./UserReducer";

const reducer = combineReducers({
    user: userRecuder
})

export { reducer };

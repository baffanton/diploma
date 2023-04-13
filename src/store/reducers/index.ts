import { combineReducers } from "@reduxjs/toolkit";
import { userRecuder } from "./UserReducer";
import { tableRecuder } from "./TableReducer";

const reducer = combineReducers({
    user: userRecuder,
    table: tableRecuder,
})

export { reducer };

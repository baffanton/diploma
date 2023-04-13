import { combineReducers } from "@reduxjs/toolkit";
import { userRecuder } from "./UserReducer";
import { tableRecuder } from "./TableReducer";
import { modalRecuder } from "./ModalReducer";

const reducer = combineReducers({
    user: userRecuder,
    table: tableRecuder,
    modal: modalRecuder,
})

export { reducer };

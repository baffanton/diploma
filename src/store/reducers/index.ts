import { combineReducers } from "@reduxjs/toolkit";
import { userRecuder } from "./UserReducer";
import { tableRecuder } from "./TableReducer";
import { modalRecuder } from "./ModalReducer";
import { homePageReducer } from "./HomePageReducer";

const reducer = combineReducers({
    user: userRecuder,
    table: tableRecuder,
    modal: modalRecuder,
    homePage: homePageReducer,
})

export { reducer };

import { combineReducers } from "@reduxjs/toolkit";
import { userRecuder } from "./UserReducer";
import { tableReducer } from "./TableReducer";
import { modalRecuder } from "./ModalReducer";
import { homePageReducer } from "./HomePageReducer";

const reducer = combineReducers({
    user: userRecuder,
    table: tableReducer,
    modal: modalRecuder,
    homePage: homePageReducer,
})

export { reducer };

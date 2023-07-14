
import { configureStore } from "@reduxjs/toolkit";
import currentPageReducer from "./currentpage_slice";

export const store = configureStore({
    reducer: {
        currentPage: currentPageReducer,
    },
});

//missing

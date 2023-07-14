import { createSlice } from "@reduxjs/toolkit";
import { PAGES } from "@/data/Data";
const initialState = {
    currentPage: PAGES[0],

}

const currentPageSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setCurrentPage: (state, action) => {

            state.currentPage = action.payload
        },

    },
});
export const { setCurrentPage } = currentPageSlice.actions;
export default currentPageSlice.reducer;
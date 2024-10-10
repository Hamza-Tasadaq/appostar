import { createSlice } from "@reduxjs/toolkit";

export const initialState: any = {
    isOnChatDetailsPage: false
};

const chatLayoutSlice = createSlice({
    name: "chatLayout",
    initialState,
    reducers: {
        toggleIsOnChatDetailsPageAction(state) {
            state.isOnChatDetailsPage = !state?.isOnChatDetailsPage
        }
    },
});


export const {
    toggleIsOnChatDetailsPageAction
} = chatLayoutSlice.actions;

export default chatLayoutSlice.reducer;
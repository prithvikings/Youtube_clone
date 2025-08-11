import { createSlice } from "@reduxjs/toolkit";

const ChatSlice = createSlice({
    name: "chat",
    initialState: {
        messages: []
    },
    reducers: {
        addMessage: (state, action) => {
            state.messages.unshift(action.payload); // Add new message at the start
            if (state.messages.length > 10) {
                state.messages.pop(); // Remove the last message if array exceeds 10 messages
            }
        }
    }
});

export const { addMessage } = ChatSlice.actions;
export default ChatSlice.reducer;

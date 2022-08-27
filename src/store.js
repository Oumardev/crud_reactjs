import { configureStore } from "@reduxjs/toolkit"
import { postSlice } from "./slices/PostSlice"
import { profileSlice } from "./slices/ProfileSlice"
import { commentSlice } from "./slices/CommentsSlice"

export default configureStore({
  reducer: {
    post: postSlice.reducer,
    profile : profileSlice.reducer,
    comment : commentSlice.reducer
  }
})
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import apiInstance from '../services/axios.config'
import { COMMENT_URL } from "../services/api_urls"

export const getComments = createAsyncThunk(
  'comments/getComments',
  async (thunkAPI) => {
    try {
    
      const response = await apiInstance.get(COMMENT_URL);

      let data = response.data
       
      if (response.status === 200) {
        
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      console.log('Error', e.response.data);

      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const createComments = createAsyncThunk(
  'comments/createComments',
  async (values ,thunkAPI) => {
    try {
     
      const response = await apiInstance.post(COMMENT_URL, values);

      let data = response.data
       
      if (response.status === 200) {

        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      console.log('Error', e.response.data);

      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const editComments = createAsyncThunk(
  'comments/editComments',
  async (values ,thunkAPI) => {
    try {

      const response = await apiInstance.patch(COMMENT_URL + `${values.user.id}/`, values);

      let data = response.data
       
      if (response.status === 200) {
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      console.log('Error', e.response.data);

      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const deleteComments = createAsyncThunk(
  'comments/deleteComments',
  async (id ,thunkAPI) => {
    try {

      const response = await apiInstance.delete(COMMENT_URL + `${id}/`);

      let data = response.data
       
      if (response.status === 200) {
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {

      console.log('Error', e.response.data);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const commentSlice = createSlice({
  name: "comment",

    initialState: {
        comments: [],
        commentsUpdated: false,
        isFetching: false
    },

    reducers: {
        clearState: (state) => {
            state.comments= [];
            state.commentsUpdated= false;
            state.isFetching= false;

            return state;
        },
    },

    extraReducers: {

          [getComments.fulfilled]: (state, { payload }) => {
            state.comments = payload
            state.isFetching = false;
            return state;
          },
          [getComments.rejected]: (state) => {
            state.isFetching = false
          },
          [getComments.pending]: (state) => {
            state.isFetching = true;
          },
        
          [createComments.fulfilled]: (state) => {
            state.commentsUpdated = false;
            return state;
          },
          [createComments.rejected]: (state) => {
            state.commentsUpdated = false;
          },
          [createComments.pending]: (state) => {
            state.commentsUpdated = true;
          },
        
          [editComments.fulfilled]: (state) => {
            state.commentsUpdated = false;
            return state;
          },
          [editComments.rejected]: (state) => {
            state.commentsUpdated = false;
          },
          [editComments.pending]: (state) => {
            state.commentsUpdated = true;
          },

          [deleteComments.fulfilled]: (state) => {
            state.commentsUpdated = false;
            return state;
          },
          [deleteComments.rejected]: (state) => {
            state.commentsUpdated = false;
          },
          [deleteComments.pending]: (state) => {
            state.commentsUpdated = true;
          },

        },
    
})

export const { clearState } = commentSlice.actions;
export const commentSelector = state => state.comment
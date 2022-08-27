import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import apiInstance from '../services/axios.config'
import { POST_URL } from "../services/api_urls"

export const getPost = createAsyncThunk(
  'post/getPost',
  async (thunkAPI) => {
    try {
    
      const response = await apiInstance.get(POST_URL);

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

export const createPost = createAsyncThunk(
  'post/createPost',
  async (values ,thunkAPI) => {
    try {
     
      const response = await apiInstance.post(POST_URL, values);

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

export const editPost = createAsyncThunk(
  'users/editPost',
  async (values ,thunkAPI) => {
    try {

      const response = await apiInstance.patch(POST_URL + `${values.user.id}/`, values);

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

export const deletePost = createAsyncThunk(
  'users/deletePost',
  async (id ,thunkAPI) => {
    try {

      const response = await apiInstance.delete(POST_URL + `/${id}`);

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

export const postSlice = createSlice({
  name: "post",

    initialState: {
        posts: [],
        postUpdated: false,
        isFetching: false
    },

    reducers: {
        clearState: (state) => {
            state.posts= [];
            state.postUpdated= false;
            state.isFetching= false;

            return state;
        },
    },

    extraReducers: {

          [getPost.fulfilled]: (state, { payload }) => {
            state.posts = payload
            state.isFetching = false;
            return state;
          },
          [getPost.rejected]: (state) => {
            state.isFetching = false
          },
          [getPost.pending]: (state) => {
            state.isFetching = true;
          },
        
          [createPost.fulfilled]: (state) => {
            state.postUpdated = false;
            return state;
          },
          [createPost.rejected]: (state) => {
            state.postUpdated = false;
          },
          [createPost.pending]: (state) => {
            state.postUpdated = true;
          },
        
          [editPost.fulfilled]: (state) => {
            state.postUpdated = false;
            return state;
          },
          [editPost.rejected]: (state) => {
            state.postUpdated = false;
          },
          [editPost.pending]: (state) => {
            state.postUpdated = true;
          },

          [deletePost.fulfilled]: (state) => {
            state.postUpdated = false;
            return state;
          },
          [deletePost.rejected]: (state) => {
            state.postUpdated = false;
          },
          [deletePost.pending]: (state) => {
            state.postUpdated = true;
          },

        },
    
})

export const { clearState } = postSlice.actions;
export const postSelector = state => state.post
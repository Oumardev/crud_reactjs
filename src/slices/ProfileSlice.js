import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import apiInstance from '../services/axios.config'
import { PROFILE_URL } from "../services/api_urls"

export const getProfile = createAsyncThunk(
  'post/getProfile',
  async (thunkAPI) => {
    try {
    
      const response = await apiInstance.get(PROFILE_URL);

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

export const createProfile = createAsyncThunk(
  'post/createProfile',
  async (values ,thunkAPI) => {
    try {
     
      const response = await apiInstance.post(PROFILE_URL, values);
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

export const editProfile = createAsyncThunk(
  'users/editProfile',
  async (values ,thunkAPI) => {
    try {

      const response = await apiInstance.patch(PROFILE_URL + `${values.user.id}/`, values);
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

export const deleteProfile = createAsyncThunk(
  'users/deleteProfile',
  async (id ,thunkAPI) => {
    try {

      const response = await apiInstance.delete(PROFILE_URL + `${id}/`);
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

export const profileSlice = createSlice({
  name: "profile",

    initialState: {
        profiles: [],
        profileUpdated: false,
        isFetching: false
    },

    reducers: {
        clearState: (state) => {
            state.profiles= [];
            state.profileUpdated= false;
            state.isFetching= false;

            return state;
        },
    },

    extraReducers: {

          [getProfile.fulfilled]: (state, { payload }) => {
            state.profiles = payload
            state.isFetching = false;
            return state;
          },
          [getProfile.rejected]: (state) => {
            state.isFetching = false
          },
          [getProfile.pending]: (state) => {
            state.isFetching = true;
          },
        
          [createProfile.fulfilled]: (state) => {
            state.profileUpdated = false;
            return state;
          },
          [createProfile.rejected]: (state) => {
            state.profileUpdated = false;
          },
          [createProfile.pending]: (state) => {
            state.profileUpdated = true;
          },
        
          [editProfile.fulfilled]: (state) => {
            state.profileUpdated = false;
            return state;
          },
          [editProfile.rejected]: (state) => {
            state.profileUpdated = false;
          },
          [editProfile.pending]: (state) => {
            state.profileUpdated = true;
          },


          [deleteProfile.fulfilled]: (state) => {
            state.profileUpdated = false;
            return state;
          },
          [deleteProfile.rejected]: (state) => {
            state.profileUpdated = false;
          },
          [deleteProfile.pending]: (state) => {
            state.profileUpdated = true;
          },

        },
    
})

export const { clearState } = profileSlice.actions;
export const profileSelector = state => state.profile
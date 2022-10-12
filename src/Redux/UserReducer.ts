import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { inputFieldPost, LoginField, LoginReducer, updateFieldPost } from "../App/Interfaces";

const initialState: LoginReducer = {
  person: [],
  error: [],
  posts: [],
  postCrud: [],
};

export const loginAuth = createAsyncThunk(
  "loginUser",
  async (data: LoginField, { rejectWithValue, fulfillWithValue }) => {
    console.log(data);
    const body = {
      email: data.email,
      password: data.password,
    };
    try {
      const res = await axios.post(
        "https://secondmorelive.herokuapp.com/login",
        body
      );
      localStorage.setItem("type_token", res.data.token);
      return fulfillWithValue(res);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const signupUser = createAsyncThunk(
  "signupUser",
  async (data: LoginField, { rejectWithValue, fulfillWithValue }) => {
    const body = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    try {
      const res = await axios.post(
        "https://secondmorelive.herokuapp.com/register",
        body
      );
      return fulfillWithValue(res);
    } catch (err) {
      rejectWithValue(err);
    }
  }
);

export const showPosts = createAsyncThunk(
  "showPosts",
  async (token: LoginField, { rejectWithValue, fulfillWithValue }) => {
    try {
      const res = await axios.get("https://secondmorelive.herokuapp.com/get", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      return fulfillWithValue(res);
    } catch (err) {
      rejectWithValue(err);
    }
  }
);

export const createPost = createAsyncThunk(
  "createPost",
  async (data: inputFieldPost, { rejectWithValue, fulfillWithValue }) => {
    console.log(65, data);
    const token: any = localStorage.getItem("type_token");
    const body = {
      name: data.name,
      age: data.age,
      city: data.city,
    };
    try {
      const res = await axios.post(
        "https://secondmorelive.herokuapp.com/post",
        body,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(63, res);
      return fulfillWithValue(res);
    } catch (err) {
      rejectWithValue(err);
    }
  }
);

export const deletePost = createAsyncThunk(
  "deletePost",
  async (id: LoginField, { rejectWithValue, fulfillWithValue }) => {
    const token: any = localStorage.getItem("type_token");
    try {
      const res = await axios.delete(
        `https://secondmorelive.herokuapp.com/delete/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return fulfillWithValue(res);
    } catch (err) {
      rejectWithValue(err);
    }
  }
);

export const updatePost = createAsyncThunk(
  "updatePost",
  async ( data: updateFieldPost,{ rejectWithValue, fulfillWithValue }) => {
    console.log(65,data)
    const body = {
      name: data.oldName,
      age: data.oldAge,
      city: data.oldCity,
    };
     console.log(75,body);
    const token: any = localStorage.getItem("type_token");
    try {
      const res = await axios.put(
        `https://secondmorelive.herokuapp.com/update/${data._id}`,body,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      console.log(63,res);
      return fulfillWithValue(res);
    } catch (err) {
      rejectWithValue(err);
    }
  }
);

export const userSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginAuth.fulfilled, (state, action) => {
      state.person = action.payload;
    });
    builder.addCase(loginAuth.rejected, (state, action) => {
      state.error = action.payload;
    });

    builder.addCase(signupUser.fulfilled, (state, action) => {
      state.person = action.payload;
    });
    builder.addCase(signupUser.rejected, (state, action) => {
      state.error = action.payload;
    });

    builder.addCase(showPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
    });
    builder.addCase(showPosts.rejected, (state, action) => {
      state.error = action.payload;
    });

    builder.addCase(createPost.fulfilled, (state, action) => {
      state.postCrud = action.payload;
    });
    builder.addCase(createPost.rejected, (state, action) => {
      state.error = action.payload;
    });

    builder.addCase(deletePost.fulfilled, (state, action) => {
      state.postCrud = action.payload;
    });
    builder.addCase(deletePost.rejected, (state, action) => {
      state.error = action.payload;
    });

    builder.addCase(updatePost.fulfilled, (state, action) => {
      state.postCrud = action.payload;
    });
    builder.addCase(updatePost.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export const {} = userSlice.actions;
export default userSlice.reducer;
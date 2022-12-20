import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import api from "../../api/folders";
import { IFolder } from "../../types/types";

// TODO

interface FolderState {
    loading: boolean;
    error: null | string;
    data: [] | IFolder[]
}

// ACTIONS 
export const getFolders = createAsyncThunk(
    "folders/getFolders",
    async (data, thunkApi) => {
        try {
            const response = await api.getFolders();
            return response.data;
        } catch (e: any) {
            return thunkApi.rejectWithValue(e.message);
        }
    }
)

export const getFolder = createAsyncThunk(
    "folders/getFolder",
    async (id, thunkApi) => {
        try {
            const response = await api.getFolder(id);
            return response.data;
        } catch (e: any) {
            return thunkApi.rejectWithValue(e.message);
        }
    }
)

export const createFolder = createAsyncThunk(
    "folders/createFolder",
    async (id, thunkApi) => {
        try {
            const response = await api.createFolder(id);
            return response.data;
        } catch (e: any) {
            return thunkApi.rejectWithValue(e.message);
        }
    }
)

export const updateFolder = createAsyncThunk(
    "folders/updateFolder",
    async (id, thunkApi) => {
        try {
            const response = await api.getFolder(id);
            return response.data;
        } catch (e: any) {
            return thunkApi.rejectWithValue(e.message);
        }
    }
)

const initialState = {
    loading: false,
    error: null,
    data: []
} as FolderState;

//SLICE
const folderSlice = createSlice({
    name: "folder",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getFolders.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getFolders.fulfilled, (state, action: PayloadAction<IFolder[]>) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(getFolders.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(createFolder.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(createFolder.fulfilled, (state, action: PayloadAction<IFolder[]>) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(createFolder.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(getFolder.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getFolder.fulfilled, (state, action: PayloadAction<IFolder[]>) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(getFolder.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
});

export default folderSlice.reducer;
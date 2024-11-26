import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { TopAlbums } from './types';
import Config from 'react-native-config';

export const getTopAlbumAction = createAsyncThunk<TopAlbums, { name: string, page: number }>(
    'album_artist/getTopAlbum',
    async ({ name, page }, thunkAPI) => {
        try {
            const response = await axios.get(`/?method=artist.gettopalbums&artist=${name}&page=${page}&api_key=${Config.API_KEY}&format=json`);
            return response?.data?.topalbums;
        } catch (error) {
            if (error instanceof AxiosError) {
                if (error.response && error.response.data.errors) {
                    return thunkAPI.rejectWithValue(error.response.data.errors);
                } else {
                    return thunkAPI.rejectWithValue(error.message);
                }
            }
        }
    },
);


export const getArtistInfoAction = createAsyncThunk<TopAlbums, string>(
    'album_artist/getArtistInfo',
    async (name, thunkAPI) => {
        try {
            const response = await axios.get(`/?method=artist.getinfo&artist=${name}&api_key=${Config.API_KEY}&format=json`);
            return response?.data;
        } catch (error) {
            if (error instanceof AxiosError) {
                if (error.response && error.response.data.errors) {
                    return thunkAPI.rejectWithValue(error.response.data.errors);
                } else {
                    return thunkAPI.rejectWithValue(error.message);
                }
            }
        }
    },
);

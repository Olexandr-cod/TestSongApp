import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArtistInfo, ArtistState, TopAlbums, TrackType } from './types';
import { getAlbumTracksAction, getArtistInfoAction, getTopAlbumAction } from './ArtistAction';

const initialState: ArtistState = {
  loading: false,
  topAlbumData: null,
  currentPage: 1,
  artistOneData: null,
  albumTracksData: [],
  error: null,
};

export const artistSlice = createSlice({
  name: 'album_artist',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      //get artist
      .addCase(getTopAlbumAction.pending, state => {
        state.loading = true;
      })
      .addCase(
        getTopAlbumAction.fulfilled,
        (state, action: PayloadAction<TopAlbums>) => {
          state.loading = false;
          if (state.topAlbumData) {
            state.topAlbumData.album = [
              ...state.topAlbumData.album,
              ...action.payload.album,
            ];
          } else {
            state.topAlbumData = action.payload;
          }

          const page = parseInt(action.payload['@attr'].page, 10);
          state.currentPage = page;
        },
      )
      .addCase(getTopAlbumAction.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      })
      //get artist info
      .addCase(getArtistInfoAction.pending, state => {
        state.loading = true;
      })
      .addCase(
        getArtistInfoAction.fulfilled,
        (state, action: PayloadAction<ArtistInfo>) => {
          state.loading = false;
          state.artistOneData = action?.payload;
        },
      )
      .addCase(getArtistInfoAction.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      })
      //get album tracks
      .addCase(getAlbumTracksAction.pending, state => {
        state.loading = true;
      })
      .addCase(
        getAlbumTracksAction.fulfilled,
        (state, action: PayloadAction<TrackType[]>) => {
          state.loading = false;
          state.albumTracksData = action?.payload;
        },
      )
      .addCase(getAlbumTracksAction.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// export const {} = artistSlice.actions;

export default artistSlice.reducer;

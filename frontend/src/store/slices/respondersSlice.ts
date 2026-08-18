import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Responder {
  id: string;
  name: string;
  type: 'police' | 'fire' | 'medical';
  location: { lat: number; lng: number };
  status: 'available' | 'on-duty' | 'off-duty';
}

interface RespondersState {
  responders: Responder[];
  loading: boolean;
  error: string | null;
}

const initialState: RespondersState = {
  responders: [],
  loading: false,
  error: null,
};

const respondersSlice = createSlice({
  name: 'responders',
  initialState,
  reducers: {
    setResponders: (state, action: PayloadAction<Responder[]>) => {
      state.responders = action.payload;
      state.loading = false;
    },
    updateResponder: (state, action: PayloadAction<Responder>) => {
      const index = state.responders.findIndex((r) => r.id === action.payload.id);
      if (index !== -1) {
        state.responders[index] = action.payload;
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setResponders, updateResponder, setLoading, setError } = respondersSlice.actions;
export default respondersSlice.reducer;
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Responder {
  id: string;
  name: string;
  type: 'police' | 'fire' | 'medical';
  location: { lat: number; lng: number };
  status: 'available' | 'on-duty' | 'off-duty';
}

interface ResponderState {
  responders: Responder[];
  loading: boolean;
}

const initialState: ResponderState = {
  responders: [],
  loading: false,
};

const responderSlice = createSlice({
  name: 'responders',
  initialState,
  reducers: {
    setResponders: (state, action: PayloadAction<Responder[]>) => {
      state.responders = action.payload;
    },
    updateResponder: (state, action: PayloadAction<Responder>) => {
      const index = state.responders.findIndex(r => r.id === action.payload.id);
      if (index !== -1) {
        state.responders[index] = action.payload;
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setResponders, updateResponder, setLoading } = responderSlice.actions;
export default responderSlice.reducer;

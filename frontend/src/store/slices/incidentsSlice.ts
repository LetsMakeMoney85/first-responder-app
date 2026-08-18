import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Incident {
  id: string;
  title: string;
  status: 'active' | 'resolved';
  location: { lat: number; lng: number };
  priority: 'high' | 'medium' | 'low';
}

interface IncidentsState {
  incidents: Incident[];
  loading: boolean;
  error: string | null;
}

const initialState: IncidentsState = {
  incidents: [],
  loading: false,
  error: null,
};

const incidentsSlice = createSlice({
  name: 'incidents',
  initialState,
  reducers: {
    setIncidents: (state, action: PayloadAction<Incident[]>) => {
      state.incidents = action.payload;
      state.loading = false;
    },
    addIncident: (state, action: PayloadAction<Incident>) => {
      state.incidents.push(action.payload);
    },
    updateIncident: (state, action: PayloadAction<Incident>) => {
      const index = state.incidents.findIndex((i) => i.id === action.payload.id);
      if (index !== -1) {
        state.incidents[index] = action.payload;
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

export const { setIncidents, addIncident, updateIncident, setLoading, setError } = incidentsSlice.actions;
export default incidentsSlice.reducer;
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Incident {
  id: string;
  title: string;
  status: 'active' | 'resolved';
  location: { lat: number; lng: number };
  priority: 'high' | 'medium' | 'low';
}

interface IncidentState {
  incidents: Incident[];
  selectedIncident: Incident | null;
  loading: boolean;
}

const initialState: IncidentState = {
  incidents: [],
  selectedIncident: null,
  loading: false,
};

const incidentSlice = createSlice({
  name: 'incidents',
  initialState,
  reducers: {
    setIncidents: (state, action: PayloadAction<Incident[]>) => {
      state.incidents = action.payload;
    },
    addIncident: (state, action: PayloadAction<Incident>) => {
      state.incidents.push(action.payload);
    },
    setSelectedIncident: (state, action: PayloadAction<Incident | null>) => {
      state.selectedIncident = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setIncidents, addIncident, setSelectedIncident, setLoading } = incidentSlice.actions;
export default incidentSlice.reducer;

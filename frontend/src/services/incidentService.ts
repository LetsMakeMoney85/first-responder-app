import apiClient from './apiClient';

export interface Incident {
  id: string;
  title: string;
  status: 'active' | 'resolved';
  location: { lat: number; lng: number };
  priority: 'high' | 'medium' | 'low';
}

export const incidentService = {
  getAllIncidents: async (): Promise<Incident[]> => {
    const response = await apiClient.get('/incidents');
    return response.data;
  },

  getIncidentById: async (id: string): Promise<Incident> => {
    const response = await apiClient.get(`/incidents/${id}`);
    return response.data;
  },

  createIncident: async (incident: Omit<Incident, 'id'>): Promise<Incident> => {
    const response = await apiClient.post('/incidents', incident);
    return response.data;
  },

  updateIncident: async (id: string, incident: Partial<Incident>): Promise<Incident> => {
    const response = await apiClient.put(`/incidents/${id}`, incident);
    return response.data;
  },

  resolveIncident: async (id: string): Promise<Incident> => {
    const response = await apiClient.patch(`/incidents/${id}/resolve`);
    return response.data;
  },
};

import apiClient from './apiClient';

export interface Responder {
  id: string;
  name: string;
  type: 'police' | 'fire' | 'medical';
  location: { lat: number; lng: number };
  status: 'available' | 'on-duty' | 'off-duty';
}

export const responderService = {
  getAllResponders: async (): Promise<Responder[]> => {
    const response = await apiClient.get('/responders');
    return response.data;
  },

  getResponderById: async (id: string): Promise<Responder> => {
    const response = await apiClient.get(`/responders/${id}`);
    return response.data;
  },

  updateResponderLocation: async (id: string, location: { lat: number; lng: number }): Promise<Responder> => {
    const response = await apiClient.patch(`/responders/${id}/location`, location);
    return response.data;
  },

  updateResponderStatus: async (id: string, status: 'available' | 'on-duty' | 'off-duty'): Promise<Responder> => {
    const response = await apiClient.patch(`/responders/${id}/status`, { status });
    return response.data;
  },

  dispatchResponder: async (id: string, incidentId: string): Promise<Responder> => {
    const response = await apiClient.post(`/responders/${id}/dispatch`, { incidentId });
    return response.data;
  },
};

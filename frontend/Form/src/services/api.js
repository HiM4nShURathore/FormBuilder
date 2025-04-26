import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api/',
});

// Form APIs
export const getForms = () => api.get('forms');
export const getFormById = (formId) => api.get(`forms/${formId}`);
export const deleteForm = (formId) => api.delete(`forms/${formId}`);

// Response API
export const submitResponse = (data) => api.post('responses', data);

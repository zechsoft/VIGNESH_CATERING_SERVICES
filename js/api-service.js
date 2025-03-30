// js/api-service.js
const API_BASE_URL = 'https://catering-backend-6dyl.onrender.com/api';

class ApiService {
  constructor() {
    this.headers = {
      'Content-Type': 'application/json',
    };
  }

  async request(endpoint, method = 'GET', body = null) {
    const url = `${API_BASE_URL}${endpoint}`;
    const options = {
      method,
      headers: this.headers,
    };

    if (body) {
      options.body = JSON.stringify(body);
    }

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'API request failed');
      }
      
      return data;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  // Media API Methods
  async uploadMedia(file, title, description) {
    const formData = new FormData();
    formData.append('media', file);
    formData.append('title', title);
    formData.append('description', description);

    const response = await fetch(`${API_BASE_URL}/media/upload`, {
      method: 'POST',
      body: formData,
    });
    return await response.json();
  }

  async getMedia(type = null) {
    const endpoint = type ? `/media/${type}` : '/media';
    return this.request(endpoint);
  }

  // Menu API Methods
  async getMenuItems() {
    return this.request('/menu');
  }

  async getMenuByCategory(category) {
    return this.request(`/menu/category/${category}`);
  }

  // Event API Methods
  async getUpcomingEvents() {
    return this.request('/events/upcoming');
  }
}

// Create singleton instance
const apiService = new ApiService();
export default apiService;
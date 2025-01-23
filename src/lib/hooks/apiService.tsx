const BASE_URL = process.env.BASE_URL;

const apiService = {
  get: async (endpoint: string, options = {}) => {
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
      method: 'GET',
      ...options
    });
    return handleResponse(response);
  },

  post: async (endpoint: string, data: any, options = {}) => {
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
      ...options
    })
    return handleResponse(response);
  }
}

const handleResponse = async (response: Response) => {
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Something went wrong")
  }
  return response.json();
}

export default apiService;
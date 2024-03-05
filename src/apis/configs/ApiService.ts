interface ApiResponse<T> extends Response {
  data: T;
}

const apiService = {
  async get<T>(url: string): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      return { ...response, data };
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  },
};

export default apiService;

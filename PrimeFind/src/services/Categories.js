import axios from "axios";

const API_URL = "https://fakestoreapi.com/products/categories";

export const getCategories = async () => {
  try {
    const response = await axios.get(`${API_URL}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

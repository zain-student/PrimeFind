import axios from "axios";
import { useState } from "react";
// import { ActivityIndicator } from "react-native";

const API_URL = "https://fakestoreapi.com";

export const getProducts = async () => {
  // const [isLoading, setIsLoading] = useState(true);
  try {
    const response = await axios.get(`${API_URL}/products`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  } finally {
    // setIsLoading(false);
  }
  // getProducts();
};

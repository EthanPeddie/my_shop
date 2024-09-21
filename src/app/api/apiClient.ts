// api/client.ts
import axios from "axios";

const api = axios.create({
  baseURL: "https://dummyjson.com",
  headers: {
    "Content-Type": "application/json",
  },
});

// All Products
export const fetchProducts = async (limit?: number) => {
  try {
    const response = await api.get("/products", {
      params: {
        limit,
      },
    });
    return response.data.products;
  } catch (error) {
    console.error("Failed to fetch products", error);
    throw error;
  }
};

// All Categories
export const fetchCategories = async () => {
  try {
    const response = await api.get("/products/categories");
    // console.log("categories", JSON.stringify(response.data));

    return response.data;
  } catch (error) {
    console.error("Failed to fetch categories", error);
    throw error;
  }
};

//

export const fetchLaptopProducts = async (limit?: number) => {
  try {
    const response = await api.get("/products/category/laptops", {
      params: { limit },
    });
    return response.data;
  } catch (error) {
    console.error("Failed to fetch laptops products", error);
    throw error;
  }
};
export const fetchBeautyProducts = async (limit?: number) => {
  try {
    const response = await api.get("/products/category/beauty", {
      params: { limit },
    });
    return response.data;
  } catch (error) {
    console.error("Failed to fetch laptops products", error);
    throw error;
  }
};

// export const fetchMenClothingProduct = async () => {
//   try {
//     const response = await api.get<Main[]>("/products/category/men's clothing");
//     return response.data;
//   } catch (error) {
//     console.error("Failed to fetch men's clothing products", error);
//     throw error;
//   }
// };

// Login to store token
// api.interceptors.request.use(async (config) => {
//   const token = await AsyncStorage.getItem("token");
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

export default api;

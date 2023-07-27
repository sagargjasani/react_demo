import { createSlice, current } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
const initialState = {
  allProducts: [],
  filters: {
    name: "",
    category: "",
    sort: "name",
  },
  categories: [],
  filteredProducts: [],
  selectedProducts: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    initializeProducts: (state, action) => {
      state.allProducts = action.payload.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
      state.filteredProducts = state.allProducts;

      let categories = [];
      state.filteredProducts.forEach((item) => {
        if (!categories.includes(item.category)) {
          categories.push(item.category);
        }
      });

      state.categories = categories.map((item) => ({
        value: item,
        name: item,
      }));
    },
    selectProduct: (state, action) => {
      const { checked, id } = action.payload;
      if (checked) {
        state.selectedProducts = [...state.selectedProducts, id];
      } else {
        state.selectedProducts = state.selectedProducts.filter(
          (item) => item !== id
        );
      }
    },
    deleteSelectedProduct: (state) => {
      state.allProducts = state.allProducts.filter(
        (item) => !state.selectedProducts.includes(item.id)
      );
      state.filteredProducts = state.allProducts;
    },
    addProducts: (state, action) => {
      if (action.payload.id) {
        //update the product
        state.allProducts = [
          ...state.allProducts.filter((item) => item.id !== action.payload.id),
          action.payload,
        ];
      } else {
        // add new product
        state.allProducts = [
          ...state.allProducts,
          { id: uuidv4(), ...action.payload },
        ];
      }
      state.filteredProducts = state.allProducts;
      state.filters = initialState.filters;
    },
    removeProducts: (state, action) => {
      state.allProducts = state.allProducts.filter(
        (product) => product.id !== action.payload
      );
      state.filteredProducts = state.allProducts;
    },
    handleFilter: (state, action) => {
      const { type, value } = action.payload;
      state.filters[type] = value;
      let filtered = state.allProducts;

      if (state.filters.name) {
        filtered = filtered.filter((item) =>
          item.title.toLowerCase().includes(state.filters.name.toLowerCase())
        );
      }
      if (state.filters.category) {
        filtered = filtered.filter(
          (item) => item.category === state.filters.category
        );
      }
      switch (state.filters.sort) {
        case "name":
          state.filteredProducts = filtered.sort((a, b) =>
            a.title.localeCompare(b.title)
          );
          break;
        case "price":
          state.filteredProducts = filtered.sort((a, b) =>
            a.price > b.price ? 1 : -1
          );
          break;
        case "category":
          state.filteredProducts = filtered.sort((a, b) =>
            a.category.localeCompare(b.category)
          );
          break;

        default:
          break;
      }
    },
  },
});

export const productsActions = productsSlice.actions;

export default productsSlice;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fetchAllProducts, fetchProductsByFilters } from "./productListAPI"

const initialState = {
    products: [],
    status: "idle"
}

export const fetchAllProductsAsync = createAsyncThunk(
    "product/fetchAllProductsAsync",

    async () => {
        const response = await fetchAllProducts();
        return response.data;
    }
)

export const fetchProductsByFiltersAsync = createAsyncThunk(
    "product/fetchProductsByFiltersAsync",

    async (filter) => {
        const response = await fetchProductsByFilters(filter);
        return response.data;
    }
)

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        // increment: (state) => {
        //     state.value += 1
        // }
    },
    extraReducers: (builder) => {
        builder

            //Fetch all products
            .addCase(fetchAllProductsAsync.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchAllProductsAsync.fulfilled, (state, action) => {
                state.status = 'idle',
                    state.products = action.payload
            })

            //Fetch products by filter  
            .addCase(fetchProductsByFiltersAsync.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchProductsByFiltersAsync.fulfilled, (state, action) => {
                state.status = 'idle',
                    state.products = action.payload
            })
    }
})

// export const { increment } = counterSlice.actions;

export const selectAllProducts = (state) => state.product.products;

export default productSlice.reducer;
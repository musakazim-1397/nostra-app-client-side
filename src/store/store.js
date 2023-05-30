import { configureStore, createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        id: "",
        name: "",
        email: "",
        picture: "",
        products: [],
        cart: [],
        orders: [],
    },
    reducers: {
        login(state, action) {
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.picture = action.payload.picture;
            state.products = action.payload.products;
            state.cart = action.payload.cart;
            state.orders = action.payload.orders;
            
        },
        logout(state) {
            state.id = "";
            state.name = "";
            state.email = "";
            state.picture = "";
            state.products = [];
            state.cart = [];
            state.orders = [];
        },
        addProduct(state, action) {
            state.products.push(...action.payload);
        },
        addCart(state, action) {
            //first check whether the product is already in the cart or not
            const index = state.cart.findIndex((product) => product._id === action.payload._id);
            if (index !== -1) {
                state.cart[index].quantity += 1;
            } else{
            state.cart.push({...action.payload, quantity: 1});
            }
        }
        , 
        removeCart(state, action) {
            const index = state.cart.findIndex((product) => product._id === action.payload._id);
            if (index !== -1) {
                state.cart.splice(index, 1);
            }
        }
    }
})

const productsSlice = createSlice({
    name: "products",
    initialState: [],
    reducers: {
        addProduct(state, action) {
            state.push(...action.payload);
        },
        removeProduct(state, action) {
            const index = state.findIndex((product) => product.id === action.payload);
            state.splice(index, 1);
        },
        updateProduct(state, action) {
            const index = state.findIndex((product) => product.id === action.payload.id);
            state[index] = action.payload;
        },
    }
})

const ordersSlice = createSlice({
    name: "orders",
    initialState: [],
    reducers: {
        addOrder(state, action) {
            state.push(action.payload);
        },
        removeOrder(state, action) {
            const index = state.findIndex((order) => order.id === action.payload);
            state.splice(index, 1);
        },
        updateOrder(state, action) {
            const index = state.findIndex((order) => order.id === action.payload.id);
            state[index] = action.payload;
        },
    }
})


export const userActions = userSlice.actions;
export const productsActions = productsSlice.actions;  
export const ordersActions = ordersSlice.actions; 
const store = configureStore({
    reducer: { user: userSlice.reducer, products: productsSlice.reducer, orders: ordersSlice.reducer }

})
export default store;
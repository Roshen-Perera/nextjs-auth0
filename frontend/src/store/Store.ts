import {configureStore} from "@reduxjs/toolkit";
import CustomerSlice from "@/slice/CustomerSlice";

export const store = configureStore({
    reducer: {
        customer: CustomerSlice
    }
});

export type AppDispatch = typeof store.dispatch;

import axios from "axios";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import Customer from "@/model/Customer";

export const initialState: Customer[] = [];

const api = axios.create({
  baseURL: "http://localhost:3030",
})

export const addCustomer = createAsyncThunk(
  'customer/addCustomer',
  async (customer: Customer) => {
    try {
      const response = await api.post('/customer/add', customer)
      return response.data;
    } catch (error) {
      return console.error('error', error);
    }
  }
)

export const updateCustomer = createAsyncThunk(
  'customer/updateCustomer',
  async (customer: Customer) => {
    try {
      const response = await api.put(`customer/update/${customer.email}`, customer);
      return response.data;
    } catch (error) {
      return console.log('error', error);
    }
  }
);

export const deleteCustomer = createAsyncThunk(
  'customer/deleteCustomer',
  async (email: string) => {
    try {
      const response = await api.delete(`customer/delete/${email}`);
      return response.data;
    } catch (error) {
      return console.log('error', error);
    }
  }
);

export const getCustomer = createAsyncThunk(
  'customer/getCustomer',
  async () => {
    try {
      const response = await api.get(`/view`);
      return response.data;
    } catch (error) {
      return console.log('error', error);
    }
  }
);

const CustomerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    addCustomers: (state, action: PayloadAction<Customer>) => {
      state.push(action.payload);
    },
    updateCustomers: (state, action: PayloadAction<Customer>) => {
      const index = state.findIndex((customer) => customer.email === action.payload.email);
      if (index > -1) {
        state[index] = action.payload;
      }
    },
    deleteCustomers: (state, action: PayloadAction<string>) => {
      state.filter((customer: Customer) => customer.email !== action.payload);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(addCustomer.fulfilled, (state, action) => {
        console.log("Adding customer : ", action.payload);
        state.push(action.payload);
      })
      .addCase(addCustomer.rejected, (state, action) => {
        console.log('Failed to add customer : ', action.payload);
      })
      .addCase(addCustomer.pending, (state, action) => {
        console.log("Pending customer : ", action.payload);
      })
    builder
      .addCase(updateCustomer.fulfilled, (state, action) => {
        state.map((customer) => {
          if (customer.email === action.payload.email) {
            customer.name = action.payload.name;
            customer.email = action.payload.email;
            customer.address = action.payload.address;
            customer.number = action.payload.number;
          }
        });
      })
      .addCase(updateCustomer.rejected, (state, action) => {
        console.log('Failed to update Customer : ', action.payload);
      })
      .addCase(updateCustomer.pending, (state, action) => {
        console.log('Pending updating Customer : ', action.payload);
      });
    builder
      .addCase(deleteCustomer.fulfilled, (state, action) => {
        return state.filter(customer => customer.email !== action.payload);
      })
      .addCase(deleteCustomer.rejected, (state, action) => {
        console.log('Failed to delete Customer : ', action.payload);
      })
      .addCase(deleteCustomer.pending, (state, action) => {
        console.log('Pending deleting Customer : ', action.payload);
      });
    builder
      .addCase(getCustomer.fulfilled, (state, action) => {
        action.payload.map((customer: Customer) => state.push(customer));
      })
      .addCase(getCustomer.rejected, (state, action) => {
        console.log('Failed to get Customer : ', action.payload);
      })
      .addCase(getCustomer.pending, (state, action) => {
        console.log('Pending getting Customer : ', action.payload);
      });
  }
})

export default CustomerSlice.reducer;
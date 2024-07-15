import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fullName: '',
  nationalID: '',
  createdAt: '',
};

const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    createCustomer: {
      prepare(fullName, nationalID) {
        return {
          payload: {
            fullName,
            nationalID,
            createdAt: new Date().toISOString(),
          },
        };
      },
      reducer(state, action) {
        state.fullName = action.payload.fullName;
        state.nationalID = action.payload.nationalID;
        state.createdAt = action.payload.createdAt;
      },
    },
    updateName(state, action) {
      state.fullName = action.payload;
    },
  },
});

export const { createCustomer, updateName } = customerSlice.actions;

export default customerSlice.reducer;

/*
export default function customerReducer(state = initialState, action) {
  switch (action.type) {
    case 'customer/create':
      return {
        ...state,
        fullName: action.fullName,
        nationalID: action.nationalID,
        createdAt: action.createdAt,
      };

    case 'customer/updateName':
      return {
        ...state,
        fullName: action.fullName,
      };

    default:
      return state;
  }
}

export function createCustomer(fullName, nationalID) {
  return {
    type: 'customer/create',
    fullName,
    nationalID,
    createdAt: new Date().toISOString(),
  };
}

export function updateCustomer(fullName) {
  return { type: 'customer/updateName', fullName };
}
*/

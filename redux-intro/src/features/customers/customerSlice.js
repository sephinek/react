const initialStateCustomer = {
  fullName: '',
  nationalID: '',
  createdAt: '',
};

export default function customerReducer(state = initialStateCustomer, action) {
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

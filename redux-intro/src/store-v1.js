import { combineReducers, createStore } from 'redux';

const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: '',
};

const initialStateCustomer = {
  fullName: '',
  nationalID: '',
  createdAt: '',
};

function accountReducer(state = initialStateAccount, action) {
  switch (action.type) {
    case 'account/deposit':
      return { ...state, balance: state.balance + action.amount };

    case 'account/withdraw':
      return { ...state, balance: state.balance - action.amount };

    case 'account/requestLoan':
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.amount,
        loanPurpose: action.purpose,
        balance: state.balance + action.amount,
      };

    case 'account/payLoan':
      return {
        ...state,
        loan: 0,
        loanPurpose: '',
        balance: state.balance - state.loan,
      };

    default:
      return state;
  }
}

function customerReducer(state = initialStateCustomer, action) {
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

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);

// store.dispatch({ type: 'account/deposit', amount: 500 });
// store.dispatch({ type: 'account/withdraw', amount: 200 });
// console.log(store.getState());

// store.dispatch({
//   type: 'account/requestLoan',
//   amount: 1000,
//   purpose: 'Buy a car',
// });
// console.log(store.getState());

// store.dispatch({ type: 'account/payLoan' });
// console.log(store.getState());

// const ACCOUNT_DEPOSIT = 'account/deposit';

function deposit(amount) {
  return { type: 'account/deposit', amount };
}

function withdraw(amount) {
  return { type: 'account/withdraw', amount };
}

function requestLoan(amount, purpose) {
  return {
    type: 'account/requestLoan',
    amount,
    purpose,
  };
}

function payLoan() {
  return { type: 'account/payLoan' };
}

store.dispatch(deposit(500));
console.log(store.getState());
store.dispatch(withdraw(100));
console.log(store.getState());
store.dispatch(requestLoan(1000, 'Buy a car'));
console.log(store.getState());
store.dispatch(payLoan());
console.log(store.getState());

function createCustomer(fullName, nationalID) {
  return {
    type: 'customer/create',
    fullName,
    nationalID,
    createdAt: new Date().toISOString(),
  };
}

function updateCustomer(fullName) {
  return { type: 'customer/updateName', fullName };
}

store.dispatch(createCustomer('Sephine Kang', '20394802'));
console.log(store.getState());
store.dispatch(updateCustomer('Sephine Kang'));
console.log(store.getState());

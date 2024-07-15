const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: '',
  isLoading: false,
};

export default function accountReducer(state = initialStateAccount, action) {
  switch (action.type) {
    case 'account/deposit':
      return {
        ...state,
        balance: state.balance + action.amount,
        isLoading: false,
      };

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

    case 'account/convertingCurrency':
      return {
        ...state,
        isLoading: true,
      };

    default:
      return state;
  }
}

export function deposit(amount, currency) {
  if (currency === 'USD') return { type: 'account/deposit', amount };

  return async function (dispatch, getState) {
    dispatch({ type: 'account/convertingCurrency' });

    // API call
    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
    );
    const data = await res.json();
    const converted = data.rates.USD;

    // return action
    dispatch({ type: 'account/deposit', amount: converted });
  };
}

export function withdraw(amount) {
  return { type: 'account/withdraw', amount };
}

export function requestLoan(amount, purpose) {
  return {
    type: 'account/requestLoan',
    amount,
    purpose,
  };
}

export function payLoan() {
  return { type: 'account/payLoan' };
}

import { combineReducers, createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';

// const initialState = {
//   contacts: [],
//   filter: '',
// };
const accountInitialState = {
  balance: 300,
};
const localeInitialState = {
  lang: 'uk',
};
const accountReducer = (state = accountInitialState, action) => {
  switch (action.type) {
    case 'account/deposit':
      return {
        account: {
          ...state.account,
          balance: state.account.balance + action.payload,
        },
      };
    case 'account/withdraw':
      return {
        account: {
          ...state.account,
          balance: state.account.balance - action.payload,
        },
      };
    default:
      return state;
  }
};
const localeReducer = (state = localeInitialState, action) => {
  switch (action.type) {
    case 'locale/changeLang':
      return {
        locale: {
          ...state.locale,
          lang: action.payload,
        },
      };
    default:
      return state;
  }
};


export const deposit = value => {
  return {
    type: 'account/deposit',
    payload: value,
  };
};

export const withdraw = value => {
  return {
    type: 'account/withdraw',
    payload: value,
  };
};

export const changeLang = value => {
  return {
    type: 'locale/changeLang',
    payload: value,
  };
};

const rootReducer = combineReducers({
  account: accountReducer,
  locale: localeReducer,
});

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);

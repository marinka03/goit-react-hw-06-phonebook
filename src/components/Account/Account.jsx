import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { deposit, withdraw } from 'redux/accountSlice';

function Account() {
  // const dispatch = useDispatch();
  // const balance = useSelector(state => state.account.balance);
  // const lang = useSelector(state => state.locale.lang);
  // onClick={() => dispatch(deposit(10))}
  // onClick={() => dispatch(withdraw(5))}
  // {lang}
  return (
    <div>
      <p>
        <b>Balance: </b>
        {/* {balance} credits */}
      </p>
      <button >Deposit</button>
      <button >Withdraw</button>
      <p>Carrent language: </p>
    </div>
  );
}

export default Account;

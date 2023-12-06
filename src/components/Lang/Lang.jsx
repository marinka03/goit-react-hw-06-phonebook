import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeLang } from 'redux/store';

function Lang() {
  const lang = useSelector(state => state.locale.lang);
  const dispatch = useDispatch();
  return (
    <div>
      <select value={lang} onChange={e => dispatch(changeLang(e.target.value))}>
        <option value="uk">uk</option>
        <option value="en">en</option>
        <option value="pl">pl</option>
      </select>
    </div>
  );
}

export default Lang;

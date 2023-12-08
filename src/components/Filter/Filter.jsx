import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from '../../redux/filterSlice';
import style from '../Filter/Filter.module.css';

function Filter() {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  return (
    <>
      <label className={style.findContact__label} value={filter}>
        Find contact by name
        <input
          className={style.findContact__input}
          onChange={e => dispatch(filterContact(e.target.value))}
          type="text"
          name="find"
        />
      </label>
    </>
  );
}

export default Filter;

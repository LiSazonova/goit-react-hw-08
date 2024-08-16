import { useDispatch, useSelector } from 'react-redux';
import s from './SearchBox.module.css';
import { changeFilter } from '../../redux/filters/slice';
import { selectFilter } from '../../redux/filters/selectors';

const SearchBox = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChange = evt => {
    dispatch(changeFilter(evt.target.value));
  };

  return (
    <>
      <p className={s.label}>Find contacts by name or number</p>
      <input
        className={s.input}
        type="text"
        placeholder="Search by name or number..."
        value={filter}
        onChange={handleChange}
      />
    </>
  );
};

export default SearchBox;

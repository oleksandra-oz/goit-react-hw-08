import { useDispatch, useSelector } from "react-redux";
import s from "./SearchBox.module.css";
import { selectNameFilter } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);
  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={s.searchForm}>
      <p>Find contacts by name</p>
      <input
        className={s.searchInput}
        type="text"
        name="name"
        value={filter}
        onChange={handleChange}
      ></input>
    </div>
  );
};

export default SearchBox;

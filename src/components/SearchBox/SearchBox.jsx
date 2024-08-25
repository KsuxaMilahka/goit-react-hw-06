import styles from './SearchBox.module.css';

const SearchBox = ({ filterValue, onFilterChange }) => {
  return (
    <div className={styles.searchBox}>
      <label className={styles.label}>Find contacts by name</label>
      <input
        type="text"
        value={filterValue}
        onChange={onFilterChange}
        className={styles.input}
      />
    </div>
  );
};

export default SearchBox;

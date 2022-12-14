import { Component } from 'react';
import './search-box.styles.css';

class SearchBox extends Component {
  render() {
    const { placeholder, className, onSearchChangeHandler } = this.props;

    return (
      <input
        className={`search-box ${className}`}
        type='search'
        placeholder={placeholder}
        onChange={onSearchChangeHandler}
      />
    );
  }
}

export default SearchBox;

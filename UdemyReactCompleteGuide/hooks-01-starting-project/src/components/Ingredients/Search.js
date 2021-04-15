import React, {useState, useEffect, useRef} from 'react';

import Card from '../UI/Card';
import './Search.css';
import useHttp from '../../hooks/http';
import ErrorModal from '../UI/ErrorModal';

const Search = React.memo(props => {
  const {onFilteredIngredients} = props;
  const [enteredFilter, setEnteredFilter] = useState("");
  const {isLoading, data, error, sendRequest, clearError} = useHttp();
  const inputRef = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (enteredFilter === inputRef.current.value) {
        const queryParams = enteredFilter.length === 0 ? "" : `?orderBy="title"&equalTo="${enteredFilter}"`;
        sendRequest(`https://myreacthooks-6c6c3-default-rtdb.firebaseio.com/ingredients.json${queryParams}`, "get")
      }

      return clearTimeout(timer);
    }, 500);
  }, [enteredFilter, inputRef, sendRequest]);

  useEffect(() => {
    if (!isLoading && !error && data) {
      const loadedIngredinets = [];
      for (const key in data) {
        loadedIngredinets.push({
          id: key,
          title: data[key].title,
          amount: data[key].amount
        });
      }
      onFilteredIngredients(loadedIngredinets);
    }
  }, [isLoading, error, data, onFilteredIngredients]);

  return (
    <section className="search">
      {error && <ErrorModal onClose={clearError}>{error}</ErrorModal>}
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          {isLoading && <span>Searching...</span>}
          <input type="text" ref={inputRef} value={enteredFilter} onChange={event => setEnteredFilter(event.target.value)} />
        </div>
      </Card>
    </section>
  );
});

export default Search;

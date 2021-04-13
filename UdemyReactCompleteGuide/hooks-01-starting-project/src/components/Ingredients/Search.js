import React, {useState, useEffect, useRef} from 'react';

import Card from '../UI/Card';
import './Search.css';

const Search = React.memo(props => {
  const {onFilteredIngredients} = props;
  const [enteredFilter, setEnteredFilter] = useState("");
  const inputRef = useRef();
  useEffect(() => {
    const timer = setTimeout(() => {
      if (enteredFilter === inputRef.current.value) {
        const queryParams = enteredFilter.length === 0 ? "" : `?orderBy="title"&equalTo="${enteredFilter}"`;
        fetch(`https://myreacthooks-6c6c3-default-rtdb.firebaseio.com/ingredients.json${queryParams}`)
          .then(response => response.json())
          .then(responseData => {
            const loadedIngredinets = [];
            for (const key in responseData) {
              loadedIngredinets.push({
                id: key,
                title: responseData[key].title,
                amount: responseData[key].amount
              });
            }
            onFilteredIngredients(loadedIngredinets);
          });
      }

      return clearTimeout(timer);
    }, 500);
  }, [enteredFilter, onFilteredIngredients, inputRef]);

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input type="text" ref={inputRef} value={enteredFilter} onChange={event => setEnteredFilter(event.target.value)} />
        </div>
      </Card>
    </section>
  );
});

export default Search;

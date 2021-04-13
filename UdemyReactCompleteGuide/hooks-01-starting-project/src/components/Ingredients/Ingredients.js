import React, {useState, useEffect, useCallback} from 'react';
import ErrorModal from "../UI/ErrorModal";
import IngredientList from './IngredientList';
import IngredientForm from './IngredientForm';
import Search from './Search';

function Ingredients() {
  const [userIngredients, setUserIngredients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    console.log("Loading ingredients", userIngredients);
  }, [userIngredients]);

  const addIngredientHandler = ingredient => {
    setIsLoading(true);
    fetch("https://myreacthooks-6c6c3-default-rtdb.firebaseio.com/ingredients.json", {
      method: "POST",
      body: JSON.stringify(ingredient),
      headers: {"Content-Type": "application/json"}
    }).then(response => response.json())
    .then(response => {
      setUserIngredients(prevIngredients => [
      ...prevIngredients,
      { id: response.name, ...ingredient }]);
      setIsLoading(false);
    }).catch(error => setError("Something wend wrong"));
  };

  const removeIngredientHandller = idToRemove => {
    setIsLoading(true);
    fetch(`https://myreacthooks-6c6c3-default-rtdb.firebaseio.com/ingredients/${idToRemove}.json`, {
        method: "DELETE"
      })
      .then(response => {
        setIsLoading(false);
        setUserIngredients(previousIngredients => previousIngredients.filter(ingr => ingr.id !== idToRemove))
      }).catch(error => setError("Something wend wrong"));
  };

  const filterIngredientsHandler = useCallback(filteredIngredients => setUserIngredients(filteredIngredients), []);

  const clearError = () => {
    setIsLoading(false);
    setError(null);
  };

  return (
    <div className="App">
      {error && <ErrorModal onClose={clearError}>{error}</ErrorModal>}
      <IngredientForm addIngredient={addIngredientHandler} loading={isLoading} />
      <section>
        <Search onFilteredIngredients={filterIngredientsHandler} />
        <IngredientList ingredients={userIngredients} onRemoveItem={removeIngredientHandller}/>
      </section>
    </div>
  );
}

export default Ingredients;

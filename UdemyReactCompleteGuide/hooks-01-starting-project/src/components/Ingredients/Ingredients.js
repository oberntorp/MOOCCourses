import React, {useState, useReducer, useEffect, useCallback} from 'react';
import ErrorModal from "../UI/ErrorModal";
import IngredientList from './IngredientList';
import IngredientForm from './IngredientForm';
import Search from './Search';

const ingredientsReducer = (currentIngredients, action) => {
  switch(action.type){
    case "SET":
      return action.ingredients;
    case "ADD":
      return [...currentIngredients, action.ingredient];
    case "DELETE":
      return currentIngredients.filter(ingr => ingr.id !== action.id);
    default:
      throw new Error("Should not get here");
  }
};

const httpReducer = (httpState, action) => {
  switch(action.type){
    case "SEND":
      return {loading: true, error: null};
    case "RESPONSE":
      return {...httpState, loading: false};
    case "ERROR":
      return {loading: false, error: action.errorMessage};
    case "CLEAR":
      return {...httpState, error: null};
    default:
      throw new Error("Something is wrong in the httpReducer");
  }
};

function Ingredients() {
  const [userIngredients, dispatch]= useReducer(ingredientsReducer, []);
  const [httpState, dispatchHttp] = useReducer(httpReducer ,{loading: false, error: null});
  // const [userIngredients, setUserIngredients] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState();

  // useEffect(() => {
  //   console.log("Loading ingredients", userIngredients);
  // }, [userIngredients]);

  const addIngredientHandler = ingredientToAdd => {
    dispatchHttp({type: "SEND"});
    fetch("https://myreacthooks-6c6c3-default-rtdb.firebaseio.com/ingredients.json", {
      method: "POST",
      body: JSON.stringify(ingredientToAdd),
      headers: {"Content-Type": "application/json"}
    }).then(response => {
      dispatchHttp({type: "RESPONSE"});
      return response.json();
    })
    .then(responseData => {
      // setUserIngredients(prevIngredients => [
      // ...prevIngredients,
      // { id: response.name, ...ingredient }]);
      console.log(responseData);
      dispatch({type: "ADD", ingredient: { id: responseData.name, ...ingredientToAdd }});
    }).catch(error => dispatchHttp({type: "ERROR", errorMessage: error.message}));
  };

  const removeIngredientHandller = idToRemove => {
    dispatchHttp({type: "SEND"});
    fetch(`https://myreacthooks-6c6c3-default-rtdb.firebaseio.com/ingredients/${idToRemove}.json`, {
        method: "DELETE"
      })
      .then(response => {
        dispatchHttp({type: "RESPONSE"});
        // setUserIngredients(previousIngredients => previousIngredients.filter(ingr => ingr.id !== idToRemove))
        dispatch({type: "DELETE", id: idToRemove})
      }).catch(error => dispatchHttp({type: "ERROR", errorMessage: error.message}));
  };

  const filterIngredientsHandler = useCallback(filteredIngredients => dispatch({type: "SET", ingredients: filteredIngredients}));

  const clearError = () => {
    dispatchHttp({type: "CLEAR"});
  };

  return (
    <div className="App">
      {httpState.error && <ErrorModal onClose={clearError}>{httpState.error}</ErrorModal>}
      <IngredientForm addIngredient={addIngredientHandler} loading={httpState.loading} />
      <section>
        <Search onFilteredIngredients={filterIngredientsHandler} />
        <IngredientList ingredients={userIngredients} onRemoveItem={removeIngredientHandller}/>
      </section>
    </div>
  );
}

export default Ingredients;

import React, {useReducer, useEffect, useCallback, useMemo} from 'react';
import ErrorModal from "../UI/ErrorModal";
import IngredientList from './IngredientList';
import IngredientForm from './IngredientForm';
import Search from './Search';
import useHttp from "../../hooks/http";

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

function Ingredients() {
  const [userIngredients, dispatch]= useReducer(ingredientsReducer, []);
  const {isLoading, error, data, sendRequest, reqExtra, reqIdentifier, clearError} = useHttp();
  // const [userIngredients, setUserIngredients] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState();

  useEffect(() => {
    console.log("EX",reqIdentifier);
    if(!isLoading && !error && reqIdentifier === "REMOVE_INGREDIENT"){
      console.log("EX",reqIdentifier);
      dispatch({type: "DELETE", id: reqExtra});
    }else if(!isLoading && !error && reqIdentifier === "ADD_INGREDIENT"){
      dispatch({type: "ADD", ingredient: { id: data.name, ...reqExtra }});
    }
  }, [data, reqExtra, reqIdentifier, isLoading, error]);

  const addIngredientHandler = useCallback(ingredientToAdd => {
    sendRequest("https://myreacthooks-6c6c3-default-rtdb.firebaseio.com/ingredients.json", "POST", JSON.stringify(ingredientToAdd), ingredientToAdd, "ADD_INGREDIENT");
  }, [sendRequest]);

  const removeIngredientHandller = useCallback(idToRemove => {
    sendRequest(`https://myreacthooks-6c6c3-default-rtdb.firebaseio.com/ingredients/${idToRemove}.json`, "DELETE", null, idToRemove, "REMOVE_INGREDIENT");
}, [sendRequest]);

  const filterIngredientsHandler = useCallback(filteredIngredients => dispatch({type: "SET", ingredients: filteredIngredients}), []);

  const ingredientsList = useMemo(() => {
    return <IngredientList ingredients={userIngredients} onRemoveItem={removeIngredientHandller}/>;
  }, [userIngredients, removeIngredientHandller]);

  return (
    <div className="App">
      {error && <ErrorModal onClose={clearError}>{error}</ErrorModal>}
      <IngredientForm addIngredient={addIngredientHandler} loading={isLoading} />
      <section>
        <Search onFilteredIngredients={filterIngredientsHandler} />
        {ingredientsList}
      </section>
    </div>
  );
}

export default Ingredients;

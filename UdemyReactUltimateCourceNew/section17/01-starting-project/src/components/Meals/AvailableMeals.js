import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import Loader from "../UI/Loader";
import { useEffect, useState } from "react";

const mealsUrl = "https://myreacthttp-default-rtdb.firebaseio.com/meals.json";

const AvailableMeals = () => {
  const [mealsList, setMealsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const fetchMeals = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const meals = await fetch(mealsUrl);

        if (meals.ok === false) {
          reject("Something bad happened!");
        }
        const mealsJson = await meals.json();

        const convertedMeals = [];

        for (const key in mealsJson) {
          convertedMeals.push({
            id: key,
            name: mealsJson[key].name,
            description: mealsJson[key].description,
            price: mealsJson[key].price,
          });
        }

        resolve(convertedMeals);
      } catch (error) {
        reject(error);
      }
    });
  };
  useEffect(() => {
    fetchMeals()
      .then((meals) => {
        setMealsList(
          meals.map((meal) => (
            <MealItem
              key={meal.id}
              id={meal.id}
              name={meal.name}
              description={meal.description}
              price={meal.price}
            />
          ))
        );
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  return (
    <section className={classes.meals}>
      <Card>
        {!isLoading && <ul>{mealsList}</ul>}
        {isLoading && <Loader />}
        {error && <p className={classes["error-text"]}>{error}</p>}
      </Card>
    </section>
  );
};

export default AvailableMeals;

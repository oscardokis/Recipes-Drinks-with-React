import { useState } from "react";
import { CardSavedDrink } from "./CardSavedDrink";
import { CardSavedFood } from "./CardSavedFood";
export function Saved(){
    const [cardsStorage, setCardsStorage] = useState(() => {
      const cardsFromStorage = window.localStorage.getItem("drinks");
      return cardsFromStorage ? JSON.parse(cardsFromStorage): []
    });
    const handlerStorage = (data) => setCardsStorage(data);
    const [cardsStorageFood, setCardsStorageFood] = useState(() => {
      const cardsFromStorage = window.localStorage.getItem("foods");
      return cardsFromStorage ? JSON.parse(cardsFromStorage): []
    });
    const handlerStorageFood = (data) => setCardsStorageFood(data); 
    return (
      <section className='text-white pb-10 mt-20 sm:mt-20'>
      <div className='sm:m-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 justify-evenly justify-items-center content-evenly'>
        {cardsStorage?.map((drink, index) => (
          <CardSavedDrink 
          title={drink.title}  
          key={index}
          image={drink.image}  
          type={drink.type}  
          instrucctions={drink.instrucctions}  
          ingredient={drink.ingredient}
          cardsStorage = { cardsStorage }
          handlerStorage = { handlerStorage }
          />
        ))}
        {cardsStorageFood?.map((food, index) => (
          <CardSavedFood
          title={food.title}  
          key={index}
          id={food.id}
          image={food.image}  
          ingredients={food.ingredients}  
          vegetarian={food.vegetarian}  
          readyInMinutes={food.readyInMinutes}  
          cardsStorageFood = { cardsStorageFood }
          handlerStorageFood = { handlerStorageFood }
          />
        ))}
      </div>
    </section>
    )
  }
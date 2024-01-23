import { useData } from "./Hooks/useData"
import { CardFood } from "./CardFood"
import { useState } from "react";
export function RandomFood(){
    const { data } =useData({url:"https://api.spoonacular.com/recipes/random?number=1&apiKey=a8055933c3944cae960ccc046b376ba6"});
    const [cards, setCards] = useState(() => {
        const cardsFromStorage = window.localStorage.getItem("foods");
        return cardsFromStorage ? JSON.parse(cardsFromStorage): []
      });
    return(
        <>
        {data.recipes?.map((food,idx) => 
            (<CardFood 
                title={food.title}  
                key={idx+1000}
                id={food.id}
                image={food.image}  
                ingredients={food.extendedIngredients}  
                vegetarian={food.vegetarian}  
                readyInMinutes={food.readyInMinutes}
                cards={cards}
                setCards={setCards}
                
            />
            ))
        }
        </>
    )
}
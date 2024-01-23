import { useData } from "./Hooks/useData"
import { useState } from "react";
import { CardDrink } from "./CardDrink"
export function RandomDrink(){
    const { data } =useData({url:"https://www.thecocktaildb.com/api/json/v1/1/random.php"});
    const [cards, setCards] = useState(() => {
        const cardsFromStorage = window.localStorage.getItem("drinks");
        return cardsFromStorage ? JSON.parse(cardsFromStorage): []
      });
    return(
        <>
        {data.drinks?.map((drink, index) => 
            (<CardDrink 
                title={drink.strDrink} 
                id={drink.idDrink}
                key={index}
                cards={cards}
                image={drink.strDrinkThumb}  
                type={drink.strAlcoholic}  
                instrucctions={drink.strInstructions}  
                ingredient={drink.strIngredient1}  
                setCards={setCards}
            />))
        }
        </>
    )
}
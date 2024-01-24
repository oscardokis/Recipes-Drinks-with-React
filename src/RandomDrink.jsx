import { useData } from "./Hooks/useData"
import { CardDrink } from "./CardDrink"
import { useLocalStorage } from "./Hooks/useLocalStorage";
export function RandomDrink(){
    const { data } =useData({url:"https://www.thecocktaildb.com/api/json/v1/1/random.php"});
    const [drinks, setDrinks] = useLocalStorage("drinks", []);
    return(
        <>
        {data.drinks?.map((drink, index) => 
            (<CardDrink 
                title={drink.strDrink} 
                id={drink.idDrink}
                key={index}
                image={drink.strDrinkThumb}  
                type={drink.strAlcoholic}  
                instrucctions={drink.strInstructions}  
                ingredient={drink.strIngredient1}  
                buttonToggle={true}
                drinks={drinks}
                setDrinks={setDrinks}
             />))
        }
        </>
    )
}
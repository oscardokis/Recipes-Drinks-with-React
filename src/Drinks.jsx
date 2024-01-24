import { useState } from "react";
import { useData } from "./Hooks/useData";
import { useLocalStorage } from "./Hooks/useLocalStorage";
import { CardDrink } from "./CardDrink";
export function Drinks(){
    const [query, Setquery] = useState("");
    const [url, setUrl] = useState("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita");
    const { data } = useData({ url });
    const [ drinks, setDrinks ] = useLocalStorage("drinks", []);
    return (
      <section className='text-white pb-10 mt-20 sm:mt-20'>
        <label className="mb-4 flex flex-col sm:flex-row items-center justify-center content-center flex-wrap gap-6 px-4 w-full sm:px-8 h-auto sm:h-20">
          <p className="text-shadow text-2xl sm:text-3xl text-center w-auto sm:w-6/12">What kind/type of drink would you like to search for: </p>
          <input 
          className="pl-6 text-xl text-black rounded-md w-auto sm:w-3/12 h-10 sm:h-10"
          type="text"
          id="searchInputDrink"
          placeholder="e.g. Margarita, Mojito..."
          value={query}
          onChange={event => {Setquery(event.target.value)}}
          onKeyUp={(event) => {
            (event.code  === "Enter") && setUrl(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`)}}
          />
          <button
          className=' p-1 w-52 sm:w-2/12 h-9 divCard rounded-lg text-md text-center hover:drop-shadow-lg '
          type='button'
          onClick={() => {
            setUrl(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`)}}
          >Search</button>
        </label>
  
        <div className='sm:m-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 justify-evenly justify-items-center content-evenly'>
          {data.drinks?.map((drink, index) => (
            <CardDrink 
            title={drink.strDrink} 
            id={drink.idDrink}
            key={index}
            image={drink.strDrinkThumb}  
            type={drink.strAlcoholic}  
            instrucctions={drink.strInstructions}  
            ingredient={drink.strIngredient1}  
            buttonToggle = {true}
            drinks={drinks}
            setDrinks={setDrinks}
            />
          ))}
        </div>
      </section>
    )
  }
import { useLocalStorage } from "./Hooks/useLocalStorage";
import { CardDrink } from "./CardDrink";
import { CardFood } from "./CardFood";
export function Saved(){
    const [ drinks, setDrinks] = useLocalStorage("drinks", []);
    const [ foods, setFoods] = useLocalStorage("foods", []);
    return (
      <section className='text-white flex justify-center pt-20'>
      {(drinks.length === 0 && foods.length === 0) && (<div className="text-4xl sm:text-5xl font-semibold text-white text-shadow text-center h-auto w-auto absolute top-96 sm:top-96"><span>Your Saved Recipes Will Appear Here</span></div>)}
      <div className='sm:m-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 justify-evenly justify-items-center content-evenly'>
        {drinks?.map((drink, index) => (
          <CardDrink 
          title={drink.title} 
          id={drink.id}
          key={index}
          image={drink.image}  
          type={drink.type}  
          instrucctions={drink.instrucctions}  
          ingredient={drink.ingredient}  
          buttonToggle = {false}
          drinks={drinks}
          setDrinks={setDrinks}
          />
        ))}
        {foods?.map((food, index) => (
          <CardFood 
          title={food.title}  
          key={index}
          id={food.id}
          image={food.image}  
          strCategory={food.strCategory}  
          originCountry={food.originCountry}
          instructions={food.instructions}
          buttonToggle = {false}
          foods ={foods}
          setFoods={setFoods}
          />
        ))}
      </div>
    </section>
    )
  }
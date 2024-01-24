import { useData } from "./Hooks/useData"
import { CardFood } from "./CardFood"
import { useLocalStorage } from "./Hooks/useLocalStorage";
export function RandomFood(){
    const { data } =useData({url:"https://www.themealdb.com/api/json/v1/1/random.php"});
    const [ foods, setFoods ] = useLocalStorage("foods", []);
    return(
        <>
        {data.meals?.map((food,idx) => 
            (
            <CardFood 
                title={food.strMeal}  
                key={idx}
                id={food.idMeal}
                image={food.strMealThumb}  
                strCategory={food.strCategory}  
                originCountry={food.strArea}
                instructions={food.strInstructions}
                foods ={foods}
                setFoods={setFoods}
                buttonToggle={true}
            />
            ))
        }
        </>
    )
}

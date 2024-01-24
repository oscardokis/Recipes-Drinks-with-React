export function CardDrink({title, image, type,instrucctions, ingredient, setDrinks, drinks, buttonToggle, id}){
    const handleSave = () => {
      const newCards = [...drinks];
      const checkRepeat = newCards.some(obj => obj.id === id);
      if(!checkRepeat) newCards.push({title, image, type, instrucctions, ingredient, id});
      setDrinks(newCards);
    }
    const handleDelete = () => {
      const newCards = [...drinks];
      const cardsDelete = newCards.filter((card) => card.title !== title);
      window.localStorage.setItem("drinks", JSON.stringify(cardsDelete));
      setDrinks(cardsDelete);
    }
    return(
      <div className='flex flex-col items-center gap-6 py-4 rounded-2xl divCard max-w-88 lg:max-w-xs 2xl:max-w-sm'>
        <p className='text-3xl text-center font-bold'>{title}</p>
        <img src={image} alt="" className='rounded-b-3xl'/>
        <p className='text-left px-4'>Type: {type}</p>
        <p className='text-left line-clamp-6 px-4'>Instructions: {instrucctions}</p>
        <p className='text-left px-4'>One ingredient is: {ingredient}.</p>
        {
          buttonToggle?(
            <button
              onClick={handleSave}
              className='last-of-type:mt-auto mx-auto w-9/12 py-2 h-auto bg-[rgba(17,0,32,.5)] hover:bg-[rgba(17,0,32,0.69)] rounded-lg hover:drop-shadow-lg'
              type='button'
              >Save
            </button>
          ):(
            <button
              onClick={handleDelete}
              className='last-of-type:mt-auto mx-auto w-9/12 py-2 h-auto bg-[rgba(32,0,0,0.5)] hover:bg-[rgba(32,0,0,0.69)] rounded-lg hover:drop-shadow-lg'
              type='button'
              >Delete
            </button>
          )
        }
      
      </div>
    )
  }

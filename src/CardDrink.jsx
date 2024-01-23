export function CardDrink({title, image, type,instrucctions, ingredient, setCards, cards, id}){
    const handleSave = () => {
      const newCards = [...cards]
      newCards.push({title, image, type, instrucctions, ingredient, id})
      setCards(newCards);
      window.localStorage.setItem("drinks", JSON.stringify(newCards));
    }
    return(
      <div className='flex flex-col items-center gap-6 py-4 rounded-2xl divCard max-w-88 lg:max-w-xs 2xl:max-w-sm'>
        <p className='text-3xl text-center font-bold'>{title}</p>
        <img src={image} alt="" className='rounded-b-3xl'/>
        <p className='text-left px-4'>Type: {type}</p>
        <p className='text-left line-clamp-6 px-4'>Instructions: {instrucctions}</p>
        <p className='text-left px-4'>One ingredient is: {ingredient}.</p>
        <button
          onClick={handleSave}
          className='last-of-type:mt-auto text-center w-9/12 py-2 h-auto bg-[rgba(17,0,32,.5)] hover:bg-[rgba(17,0,32,0.69)] rounded-lg hover:drop-shadow-lg'
          type='button'
          >Save
        </button>
      
      </div>
    )
  }

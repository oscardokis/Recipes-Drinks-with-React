export function CardSavedDrink({title, image, type,instrucctions, ingredient, handlerStorage, cardsStorage}){
    const handleDelete = () => {
      const copyArrd = [...cardsStorage];
      const cardsDelete = copyArrd.filter((card) => card.title !== title);
      window.localStorage.setItem("drinks", JSON.stringify(cardsDelete));
      handlerStorage(cardsDelete);
    }
    return(
      <div className='flex flex-col items-center gap-6 py-4 rounded-2xl divCard max-w-88 lg:max-w-xs 2xl:max-w-sm'>
        <p className='text-3xl text-center font-bold'>{title}</p>
        <img src={image} alt="" className='rounded-b-3xl'/>
        <p className='text-left px-4'>Type: {type}</p>
        <p className='text-left line-clamp-6 px-4'>Instructions: {instrucctions}</p>
        <p className='text-left px-4'>One ingredient is: {ingredient}.</p>
        <button
          onClick={handleDelete}
          className='last-of-type:mt-auto text-center w-9/12 py-2 h-auto bg-[rgba(32,0,2,0.5)] hover:bg-[rgba(32,0,5,0.69)] rounded-lg hover:drop-shadow-lg'
          type='button'
          >Delete
        </button>

      </div>
    )
  }

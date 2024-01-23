export function CardSavedFood({title, image, ingredients,vegetarian, readyInMinutes, cardsStorageFood, handlerStorageFood}){
    const handleDelete = () => {
      const copyArrd = [...cardsStorageFood];
      const cardsDelete = copyArrd.filter((card) => card.title !== title);
      window.localStorage.setItem("foods", JSON.stringify(cardsDelete));
      handlerStorageFood(cardsDelete);
    }
    return(
        <div className='flex flex-col items-center gap-6 py-4 rounded-2xl divCard max-w-88 lg:max-w-xs 2xl:max-w-sm'>
        <p className='text-3xl text-center font-bold'>{title}</p>
        <img src={image} alt="" className='rounded-b-3xl'/>
        <p className='text-left line-clamp-6 px-4'>Vegetarian: {vegetarian ? " Yes.":" No."}</p>
        <p className='text-left px-4'>Ingredients: {
        ingredients?.map((elem, idx, arr) => (
          <span key={idx}>{
            arr[idx + 1] ? `${elem.nameClean}, `:`and ${elem.nameClean}.`}
          </span>
        ))}
        </p>
        <p className='text-left px-4'>{`Ready in: ${readyInMinutes} minutes.`}</p>
        <button
          onClick={handleDelete}
          className='last-of-type:mt-auto text-center w-9/12 py-2 h-auto bg-[rgba(32,0,2,0.5)] hover:bg-[rgba(32,0,5,0.69)] rounded-lg hover:drop-shadow-lg'
          type='button'
          >Delete
        </button>
      </div>
    )
  }
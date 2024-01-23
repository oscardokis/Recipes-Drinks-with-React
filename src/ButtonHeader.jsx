export function ButtonHeader({buttonText, buttonIcon, setActiveButtons}) { 
    const handleClick = () =>{
      setActiveButtons(buttonText)
    }
    return (  
        <button 
        href="#foodSection"
        onClick={handleClick} 
        id="foodRecipes" 
        className="text-white rounded-t-lg before:ease relative h-12 w-40 overflow-hidden  before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-white before:transition-all before:duration-300 hover:text-black hover:shadow-black hover:before:-rotate-180">
        <span className="relative flex justify-center gap-1 text-xl font-medium">
          {buttonIcon}
          <span className='hidden sm:inline'>
          {buttonText}
          </span>
        </span>
        </button>
    )
  }
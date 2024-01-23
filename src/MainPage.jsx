export function MainPage({children}){
    return (
      <section className='mainSection pt-40 sm:pt-72 gap-32 flex flex-col justify-center items-center'>
        {children}
      </section>
    )
  }
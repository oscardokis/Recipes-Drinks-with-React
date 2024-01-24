import { useState } from 'react';
import { GiMartini } from "react-icons/gi";
import { GiHotMeal } from "react-icons/gi";
import { FaBook } from "react-icons/fa";
import { Modal } from './Modal';
import React from 'react';
import './App.css';
import { RandomDrink } from './RandomDrink';
import { RandomFood } from './RandomFood';
import { ButtonHeader} from './ButtonHeader';
import { Header } from './Header';
import { MainPage } from './MainPage'
import { Foods } from './Foods';
import { Drinks } from './Drinks';
import { Saved } from './Saved';


function App() {
  const [activeButtons, setActiveButtons] = useState("home");
  const [activeModal, setActiveModal] = useState(false);
  const buttonText =
  {
    Foods:"Foods",
    Drinks:"Drinks",
    SavedRecipe:"Saved"
  }
  return (
    <>
    <Header>
      <nav className="backdrop-blur-3xl bg-red-200 fixed top-0 bg-transparent gap-4 flex justify-center sm:justify-around items-center w-full	h-auto py-3">
        <a onClick={() => {setActiveButtons("home")}} href="#" className='w-6/12 sm:w-4/12 text-center'>
          <span className='text-2xl sm:text-4xl font-bold text-white'>RecipeHub</span>
        </a>
        <div className="flex justify-center w-5/12 sm:justify-end">
          <ButtonHeader 
          setActiveButtons={setActiveButtons}
          buttonText = {buttonText.Foods} 
          buttonIcon = {<GiHotMeal className='w-6 h-6'/>}/>
          <ButtonHeader 
          setActiveButtons={setActiveButtons}
          buttonText = {buttonText.Drinks} 
          buttonIcon = {<GiMartini className='w-6 h-6'/>}/>
          <ButtonHeader
          setActiveButtons={setActiveButtons}
          buttonText = {buttonText.SavedRecipe} 
          buttonIcon = {<FaBook className='w-6 h-6'/>}/>
        </div>
      </nav>
    </Header>
    {activeButtons === "home" && (
      <MainPage>
        <h2 id="mainItems" className="text-5xl sm:text-6xl text-white text-center font-semibold text-shadow">Food & Drink Recipe Ideas</h2>
        <p className="text-3xl font-semibold text-white text-shadow text-center">Search for what your palate desires</p>
        <button 
        onClick={() => {setActiveModal(state => !state)}}
        id="MainPageButton"
        className="text-2xl hover:before:bg-redborder-white relative h-[50px] w-64 overflow-hidden border border-white bg-transparent px-3 text-white shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-white before:transition-all before:duration-500 hover:text-black hover:shadow-white hover:before:left-0 hover:before:w-full">
          <span className="relative">Random Meal</span></button>
      </MainPage>
    ) }
    {activeModal && (
      <Modal>
        <div id="modalContainer" className='bg-zinc-500/60 backdrop-blur-sm relative flex flex-col w-11/12 xl:w-8/12 lg:max-w-5xl h-5/6 sm:h-auto gap-12 justify-start items-center p-2 sm:py-4 rounded-2xl'>
          <h2 className='text-white text-4xl text-shadow text-center border-t border-b py-4 w-full'>Random Meal</h2>
          <button onClick={() => setActiveModal(false)} className='text-3xl absolute top-6 sm:top-8 right-4 text-white flex h-auto w-auto'>x</button>
          <div className='flex text-white justify-center gap-10 flex-wrap overflow-y-auto sm:overflow-y-none'>
            <RandomDrink/>
            <RandomFood/>
          </div>
        </div>
      </Modal>
    )}
        
    {activeButtons === "Foods" && <Foods href="#" /> }
    {activeButtons === "Drinks" && <Drinks href="#"/> }
    {activeButtons === "Saved" && <Saved/> }
    </>
  )
}

export default App



import React from 'react'

import Dice from "../assets/icon-dice.svg"
import Desk_Divider from "../assets/pattern-divider-desktop.svg"
import Mob_Divider from "../assets/pattern-divider-mobile.svg"

const MainContent = ( {data, handleClick} ) => {
  return (
    <>
      <div className="maincontent">
        <h2 className="text-accent-300 text-[.8rem] font-extrabold tracking-[5px]">ADVICE # {data.id}</h2>
        <p className="text-[1.7rem] leading-9 py-[1.5rem] font-[800] "><q>{data.advice}</q></p>
        <picture className='my-4'>
          <source media="(min-width: 400px)" srcSet={ Desk_Divider } />
          <img src={ Mob_Divider } alt="" aria-hidden="true" />
        </picture>
        <button onClick={() =>{ handleClick() }} aria-label='search for next advice' className='w-16 h-16 bg-accent-300 grid place-content-center rounded-full absolute bottom-0 left-2/4 -translate-x-2/4 translate-y-2/4 hover:shadow-[0px_0px_30px_2px_rgba(83,255,171,1)] transition-shadow transi hover:delay-100 hover:duration-300'><img src={ Dice } alt="" /></button>
      </div>
    </>
  )
}

export default MainContent
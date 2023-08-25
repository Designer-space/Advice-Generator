import React from 'react'

const Spinner = () => {
  return (
    <div className="w-[100vmin] aspect-[21/9] grid place-content-center">
      <div className="loader w-[48px] h-[48px] m-auto relative [ before:content-[''] before:w-[48px] before:h-[5px] before:bg-accent-300 before:opacity-40 before:absolute before:top-[60px] before:left-0 before:rounded-full before:animate-shadow ]
     [ after:content-[''] after:w-full after:h-full after:bg-accent-300 after:absolute after:top-0 after:left-0 after:rounded after:animate-jump ] "></div>
    </div>
  )
}

export default Spinner
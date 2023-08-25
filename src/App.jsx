import React, { useState } from 'react'
import './App.css'
import { fetchDataFromApi } from './utils/api'
import Spinner from './components/spinner';
import MainContent from './components/MainContent';

function App() {

  const [ data, setData ] = useState({
    id: "117",
    advice: "It is easy to sit up and take notice, what's difficult is getting up and taking action."
  })
  
  const [ loading, setLoading ] = useState(false)

  const aptTesting = () =>{
    setLoading(true)
    fetchDataFromApi().then((res) => {
      setData(res.slip)
      setData(res.slip)
      setLoading(false)
    })
  }

  return (
    <>
      <main className='container w-[100%] max-w-[33.8rem] mx-auto mb-12 p-12 flex items-center justify-center bg-neutral-600 text-center rounded-2xl relative shadow-xl '>
        <h1 className="sr-only">Advice Generator</h1>
        { 
          loading ? <Spinner /> : <MainContent data={data} handleClick={aptTesting} />
        }
      </main>
    </>
  )
}

export default App

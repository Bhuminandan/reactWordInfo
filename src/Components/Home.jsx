import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import WordDetails from './WordDetails'
import addToHistoryActions from '../redux/actions/addToHistoryActions.js'
import {fetchData} from '../redux/actions/fetchActions'

const Home = () => {

  const [word, setWord] = useState('')
  const [typeError, setTypeError] = useState('')

  const {loading, data, error} = useSelector(state => state.fetchReducer)
  const dispatch = useDispatch()
  

  useEffect(() => {
    if (data.length > 0) {
      dispatch(addToHistoryActions(data[0]))
    }
  }, [data, dispatch])

    const handleSubmit = (e) => {
      e.preventDefault()
      if(!word) {
        setTypeError('Input cannot be empty...')
        return;
      }
      dispatch(fetchData(word))
      setTypeError('')
      setWord('')
    }  



  return (

    <>
      <div className='w-screen min-h-screen bg-slate-950 text-white flex flex-col items-center justify-start pt-10 gap-5 pb-40'>
      <form onSubmit={handleSubmit} className="flex items-center justify-center w-72 md:w-96">
            <input type="text"
            placeholder='Search word...'
            value={word}
            onChange={(e) => setWord(e.target.value)}
            className=' w-4/5 md:w-full py-2 px-4 rounded-l-full bg-slate-600 outline-none'
            />
            <button type='submit' className='py-2 px-4 bg-green-300 rounded-r-full active:transform active:translate-y-1 duration-300 text-stone-950 font-bold'>Search</button>
      </form>
      <div>

      {
        loading && <span className='loader m-auto'></span>
      }
      {
        error && <p className='text-bold text-2xl text-red-500 text-center m-auto w-screen'>{error}</p> 

      }
        {
          typeError ? <p className='text-bold text-2xl text-red-500 text-center m-auto w-screen'>{typeError}</p> :
  
          data.length > 0 && <WordDetails data={data}/>
      }


      </div>
</div>

    
    </>
    
  )
}

export default Home
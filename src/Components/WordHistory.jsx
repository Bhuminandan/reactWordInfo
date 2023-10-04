import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import WordDetails from './WordDetails';


const WordHistory = () => {  
   

    const dataList = useSelector(state => state.addToHistoryReducer)
    const { searchTerm } = useParams();

    const data = dataList.filter((singleObj) => singleObj?.word === searchTerm);
    return (
  
      <>
        <div className='w-screen min-h-screen bg-slate-600 text-white flex flex-col items-center justify-start pt-10 gap-5 pb-40'>
       
        <div>
          {
    
            data.length > 0 && <WordDetails data={[data[0]]}/>
        }
        </div>
  </div>
  
      
      </>
      
    )
}

export default WordHistory
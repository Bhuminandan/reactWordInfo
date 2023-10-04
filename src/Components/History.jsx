import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';



const History = () => {
  const navigate = useNavigate();
  const wordsList = useSelector((state) => state.addToHistoryReducer);
  return (
    <div className='w-screen h-screen bg-stone-950 flex flex-col items-center justify-start gap-4 pt-10 px-10'>
      <ul className='max-w-96 flex flex-wrap items-center justify-center text-center gap-5'>
        {wordsList.length > 0 &&
          wordsList.map((word) => (
            <li
              onClick={() => navigate(`/history/word/${word?.word}`)}
              className=' md:w-1/4 w-full text-white font-bold text-xl py-2 px-4 bg-green-400 rounded-full cursor-pointer'
              key={word?.id}
            >
              {word?.word}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default History;

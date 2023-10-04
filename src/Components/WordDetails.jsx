import React from 'react'
import { nanoid } from 'nanoid'

const WordDetails = ({data}) => {

  return (
    <div className=' px-10 md:px-20'>
          <h1 className='text-3xl text-white font-bold mt-20'>Word Information</h1>
              <div className=' max-w-7xl flex flex-col items-start justify-start gap-5'>
              <p className='font-bold text-2xl '>{data[0].word}</p>
              <p className='font-bold text-2xl '>{data[0].phonetic}</p>
              <audio src={data[0]?.phonetics[0]?.audio} controls></audio>
                
              {
                
                  data[0]?.meanings?.map((singleMeaning) => {
                    return (
                      <div key={nanoid()}>
                      <strong className='text-xl font-bold'>{singleMeaning.partOfSpeech}</strong>
                      {
                        <ul className=' list-disc'>
  
                          {
  
                            singleMeaning.definitions.map((singleDefination) => {
                              return (
                                <li key={nanoid()}>
                                {singleDefination.definition}
                                </li>
                              )
                            }) 
                          }
  
  
                        </ul>
                        
                      }
                      </div>
                     
                    )
                  })
                
                
                }              
        </div>
        </div>
  )
}

export default WordDetails
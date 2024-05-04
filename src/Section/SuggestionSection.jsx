import React from 'react'
import SuggestUserCard from '../Components/SuggestUserCard'

const SuggestionSection = () => {
  return (
    <div className='flex flex-col gap-1 bg-white bg-opacity-55 h-ft px-8 py-4 w-fit rounded-lg font-poppins'>
      <div className='flex flex-row w-full mb-[17px] justify-between'>
        <div className='text-[#1E3167]  font-semibold text-base '>New People</div>
        <div className='text-[#8996BC]'>see all</div>
      </div>
      <div className='flex px-2 gap-3 mb-[10px]'>
        <SuggestUserCard/>
        <SuggestUserCard/>
        <SuggestUserCard/>
        <SuggestUserCard/>
        <SuggestUserCard/>
      </div>
    </div>
  )
}

export default SuggestionSection

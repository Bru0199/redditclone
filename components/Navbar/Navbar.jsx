import React from 'react'
import SearchInput from './SearchInput'
import RightContent from './RightContent/RightContent'
const Navbar = () => {
  return (
    <div  className=' flex bg-white h-[50px] sticky w-full items-center flex-shrink-0'>
    <div className='flex items-center'>
        <img src="/images/redditFace.svg" alt="reddit face" className='h-[40px] w-[40px] mr-2 flex-shrink-0 m-6'/>
        <img src="/images/redditText.svg" alt="reddit text" className='h-[50px] w-[50px] mr-[50px] hidden md:block flex-shrink-0 '/>
    </div>
    {/* <Directories/> */}
    <SearchInput/>
    <RightContent/>
    </div>

  )
}

export default Navbar
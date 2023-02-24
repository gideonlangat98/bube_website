import React from 'react'
import { HiSearch, HiBell, HiUserCircle } from "react-icons/hi";

function NavBar() {
  return (
    <div className='flex justify-evenly
      border-solid border-2 border-white ... 
      border-l-transparent
      border-r-transparent
      bg-white mt-3 mb-10 pt-7 pb-6'>
      <div>
        <img src='https://cdn4.vectorstock.com/i/1000x1000/57/58/letter-b-logo-icon-vector-23845758.jpg' alt='logo' width='50' />
      </div>
      <div className='flex'>
        <form>
          <div className='relative flex items-center'>
          <HiSearch className='absolute mr-5 ml-40' />
            <input className='bg-gray-100 rounded-full
            pb-2 pt-2 pl-2 pr-10' type='search' name="search" 
            placeholder='Search Jobs here...  ' />
            
          </div>
        </form>
        
      </div>
      <div>
        <h6>Find Jobs</h6>
      </div>
      <div>
        <h6>My Jobs</h6>
      </div>
      <div>
        <h6>My Gigs</h6>
      </div>
      <div>
        <h6>Inbox</h6>
      </div>
      <div className='mt-2'>
        <i><HiBell /></i>
      </div>
      <div>
        <button className="bg-indigo-700 pt-1 pr-4 pl-4 pb-1 rounded-full 
        text-white">Switch to Buyer</button>
      </div>
      <div className='mt-2 text-xl'>
        <i><HiUserCircle /></i>
      </div>
    </div>
  )
}

export default NavBar;

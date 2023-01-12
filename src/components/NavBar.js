import React from 'react'
// import { HiSearch } from "react-icons/hi";

function NavBar() {
  return (
    <div className='flex justify-evenly
      border-solid border-2 border-white ... 
      border-l-transparent
      border-r-transparent
      bg-white mt-3 mb-10 pt-7 pb-6'>
      <div>
        <input className='bg-gray-100 rounded-md
        pb-2 pt-2 pl-2 pr-10' type='search' name="search" 
        placeholder='Search Jobs here...'  />
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
      <div>
        <button className="bg-indigo-700 pt-1 pr-4 pl-4 pb-1 rounded-md 
        text-white">Switch to Buyer</button>
      </div>
    </div>
  )
}

export default NavBar;

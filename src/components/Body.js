import React from 'react'
import { HiUser, HiQuestionMarkCircle, HiCreditCard, HiLockClosed} from "react-icons/hi";

function Body() {
  return (
    <div className='flex justify-evenly'>
      <div>
        <ul className='border-solid border-2 border-white ... 
    border-l-blue
    border-r-transparent rounded
    -md ml-20 bg-white mr-20 pl-6
    pr-20 pb-4 pt-4'>
      <div className='flex'>
        <div>
          <span className='mt-1 mr-1'><HiUser /></span>
        </div>
      <div>
        <li>Account</li>
      </div>
      </div>
      
      <div className='flex'>
        <div className='mr-1 mb-2'>
          <span><HiLockClosed /></span>
        </div>
      <div className='mb-2'>
        <li>Security</li>
      </div>
      </div>

      <div className='flex'>
        <div>
          <span><HiCreditCard /></span>
        </div>
      <div>
        <li>PaymentMethods</li>
      </div>
      </div>
            
        </ul>
      </div>
      
    <div className='border-solid border-2 border-white ... 
    border-l-blue
    border-r-transparent rounded
    -md mr-20 mb-12 bg-white pr-20
    '>
      <h4 className='text-center pt-5 mb-5'><strong>Need To Update Your Profile </strong><span style={{color: "blue"}}>Go To My Profile</span></h4>

      <div className='flex justify-around mb-6 ml-3'>
        
        <div>
        
          <h6><strong>Full Name</strong></h6>
          <input className='bg-gray-100 rounded-full
        pb-2 pt-2 pl-2 pr-10 mr-10' type='text' name='text' placeholder='Enter Your Full Name'/>
        </div>
      <div>
        <h6><strong>Email</strong></h6>
        <input className='bg-gray-100 rounded-full
        pb-2 pt-2 pl-2 pr-10' type='text' name='text' placeholder='Enter Your Email'/>
      </div>
      </div>
      
      <div>
        <div>
          <p className='ml-2'><strong>Online Status</strong><br></br> When Online, Your Gigs Are Visible Under The Online Search Filter</p>
          <p></p>
        </div>
        
        <div className='flex justify-around
        mb-6'>
        <div>
          <select name='online' className="bg-gray-100 pt-1 pr-4 pl-4 pb-1 rounded-full mr-10 ml-10">
            <option>Go Online For</option>
          </select>
        </div>
         <div className='ml-10 pt-15 mt-5'>
          <button className="bg-indigo-700 pt-1 pr-4 pl-4 pb-1 rounded-full
        text-white ml-10">Save Changes</button>
         </div>
         </div>
        
      </div>

      <div className='flex justify-between ml-3
      mb-10'>
        <div>
          <h6><strong>CURRENT PLAN</strong></h6>
        </div>
        <div>
          <h4>Basic Plan <span className='pr-5'><HiQuestionMarkCircle /></span><br></br> $200/ <span style={{color: "lightgray"}}>year</span></h4>
        </div>
        <div className=''>
          <button className="bg-indigo-700 pt-1 
          pr-4 pl-4 pb-1 rounded-full 
          text-white">Upgrade Plan</button>
        </div>
      </div>

      <div className='flex justify-around
       mb-10'>
        <div>
          <h6><span style={{fontSize: 14}}><strong>ACCOUNT DEACTIVATION</strong></span></h6>
        </div>
        <div>
          <p><span style={{fontSize: 11}}><strong>What Happens When You Deacticate Your Account</strong><br></br> Your Profile 
          and Gigs won't be shown on Filter anymore.<span><HiQuestionMarkCircle /></span><br></br>Active orders 
          will be canceled. <span><HiQuestionMarkCircle /></span><br></br>You won't be able to re-acticate your Gigs.</span>
          </p>
        </div>
      </div>

      <div className='flex justify-around
      mb-10 mr-19'>
        <div>
          <h6><strong>I'm Leaving Because</strong></h6>
        </div>
        <div>
        <select name='online' className="bg-gray-100 pt-1 pr-4 pl-4 pb-1 rounded-full mr-10 ml-10">
            <option>Choose A Reason</option>
        </select>
        </div>
      </div>

      <div className='text-end mb-10'>
        <button className='bg-gray-400 pt-1 
          pr-4 pl-4 pb-1 rounded-full 
          text-white'>Deactivate Account</button>
      </div>

      </div>
    </div>

  )
}

export default Body;


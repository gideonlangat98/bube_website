import React from 'react'

function Body() {
  return (
    <div className='flex justify-evenly'>
      <div>
        <ul className='border-solid border-2 border-white ... 
    border-l-blue
    border-r-transparent rounded
    -md ml-20 bg-white mr-20 pl-6
    pr-20 pb-4 pt-4'>
            <li>Account</li>
            <li>Security</li>
            <li className='mr-2'>PaymentMethods</li>
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
          <input className='bg-gray-100 rounded-md
        pb-2 pt-2 pl-2 pr-10 mr-10' type='text' name='text' placeholder='Enter Your Full Name'/>
        </div>
      <div>
        <h6><strong>Email</strong></h6>
        <input className='bg-gray-100 rounded-md
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
           <input type='select' name='text' 
           className='bg-gray-100 rounded-md
           pb-2 pt-2 pl-2 pr-10 mt-5' placeholder='Go Online For' />
          
         </div>
         <div className='ml-10 pt-15 mt-5'>
          <button className="bg-indigo-700 pt-1 pr-4 pl-4 pb-1 rounded-md 
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
          <h4>Basic Plan <br></br> $200/ year</h4>
        </div>
        <div className=''>
          <button className="bg-indigo-700 pt-1 
          pr-4 pl-4 pb-1 rounded-md 
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
          and Gigs won't be shown on Filter anymore<br></br>Active orders 
          will be canceled <br></br>You won't be able to re-acticate your Gigs.</span>
          </p>
        </div>
      </div>

      <div className='flex justify-around
      mb-10 mr-19'>
        <div>
          <h6><strong>I'm Leaving Because</strong></h6>
        </div>
        <div>
          <input className='bg-gray-100
           rounded-md
           pb-2 pt-2 pl-2 pr-10' type='select' name='text' placeholder='Choose A Reason'/>
        </div>
      </div>

      <div className='text-end mb-10'>
        <button className='bg-gray-400 pt-1 
          pr-4 pl-4 pb-1 rounded-md 
          text-white'>Deactivate Account</button>
      </div>

      </div>
    </div>

  )
}

export default Body;


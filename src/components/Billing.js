import React from 'react'

function Billing() {
  return (
    <div className='flex'>
         <div>
        <ul className='border-solid border-2 border-white ... 
    border-l-blue
    border-r-transparent rounded
    -md ml-20 bg-white
    mr-30 pb-4 pt-4 pr-20 pl-6'>
            <li>Account</li>
            <li>Security</li>
            <li className='mr-2'>PaymentMethods</li>
        </ul>
      </div>

      <div className='border-solid border-2 border-white ... 
    border-l-blue
    border-r-transparent rounded
    -md mb-10 ml-20 mr-22 pr-60 pt-5 pb-5 
     bg-white'>
      <h4 className='ml-10 mb-3'><strong>Billing & Payments</strong></h4>
      <div className='flex justify-around ml-10 '>

        <div>
          <h6><strong>Balance due</strong></h6>
          <p>Your balance due is $0.00</p>
        </div>
        <div className='ml-10'>
          <button className='mb-10 bg-gray-400 pt-1 
          pr-4 pl-4 pb-1 rounded-md 
          text-white'>Pay Now</button>
        </div>
      </div>

      <div className='flex justify-between
      mb-5 ml-25'>
        <div>
          <h4 className='ml-10'><strong>Billing Methods</strong></h4>
        </div>
        <div>
          <button className='bg-indigo-600 pt-1 
          pr-4 pl-4 pb-1 rounded-md 
          text-white'>Add Method</button>
        </div>
      </div>

      <div className='flex justify-between
      mb-5 m-10'>
        <div>
          <h4><strong>Primary</strong></h4>
          <p>Visa ending in 1234</p>
        </div>
        <div>
          <button>...</button>
        </div>
      </div>

      <div className='flex justify-between m-10'>
        <div>
          <h4><strong>Additional</strong></h4>
          <p>Bank ending in 1234</p>
        </div>
        <div>
          <button>...</button>
        </div>
      </div>
      </div>

    </div>
  )
}

export default Billing;

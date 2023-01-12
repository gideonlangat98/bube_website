import React from 'react'
import { HiDotsHorizontal, HiUser, HiCreditCard, HiLockClosed, HiLibrary } from 'react-icons/hi';

function Billing() {
  return (
    <div className='flex'>
         <div>
        <ul className='border-solid border-2 border-white ... 
    border-l-blue
    border-r-transparent rounded
    -md ml-5 bg-white mr-10 pl-6
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
          pr-4 pl-4 pb-1 rounded-full
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
          pr-4 pl-4 pb-1 rounded-full 
          text-white'>Add Method</button>
        </div>
      </div>

      <div className='flex justify-between
      mb-5 m-10'>
        <div>
          <h4><strong>Primary</strong></h4>
          <p>Visa ending in 1234</p>
        </div>
        <div className='mt-8'>
          <i><HiDotsHorizontal /></i>
        </div>
      </div>

      <div className='flex justify-between m-10'>
        <div>
          <h4><strong>Additional</strong></h4>
          <div className='flex'>
            <div className='mt-2 mr-1'>
              <img src='https://seeklogo.com/images/V/VISA-logo-A32D589D31-seeklogo.com.png' alt='visa' width='25' />
            </div>
            <div>
              <p>Additional</p>
            </div>
          </div>

          <div className='flex'>
            <div className='mt-1 mr-1'>
              <i><HiLibrary /></i>
            </div>
            <div>
              <p>Bank ending in 1234</p>
            </div>
          </div>
        </div>
        <div className='mt-8'>
          <i><HiDotsHorizontal /></i>
        </div>
      </div>
      </div>

    </div>
  )
}

export default Billing;

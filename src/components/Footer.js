import React from 'react'
// import { FaFaceBook, FaTwitterSquare, FaInstagramSquare, FaLinkedinIn } from "react-icons/fa";
import { HiMail, HiPhone } from 'react-icons/hi';

function Footer() {

  return (
    <div>
      <div className='flex justify-between
       border-solid border-2 border-white ... 
        border-l-transparent
       border-r-transparent
       bg-white mt-15 mb-10 pb-10 pt-10'>
        <div className='ml-3'>
        <div className='mb-10 ml-10'>
          <img src='https://cdn4.vectorstock.com/i/1000x1000/57/58/letter-b-logo-icon-vector-23845758.jpg' alt='logo' width='50' />
        </div>
          <h6 className='ml-10'><span style={{fontSize: 13}}>Making This The First True Generator On The Internet.
             It Uses A Dictionary <br></br> Of Over 200 Latin Words,
             Combined With A Handful Of Model Sentence <br></br>
             Structures, To Generate Lorem Ipsum Which Looks Reasonable.
             <br></br> The Generated Lorem Ipsum Is Therefore Always Free 
             From Repititon Injected <br></br> Humour, Or Non-Charasteristic
              Words Etc</span></h6>
        </div>

        <div>
          <h4 className='mb-5'><strong>Important Links</strong></h4>
          <ul>
            <li className='mb-2'>Home</li>
            <li className='mb-2'>Find Work</li>
            <li className='mb-2'>Why Bube</li>
            <li className='mb-2'>Home</li>
            <li className='mb-2'>Enterprise</li>
            <li className='mb-2'>Blog</li>
          </ul>
        </div>

        <div>
          <h4 className='mb-5'><strong>Other Links</strong></h4>
          <ul>
            <li className='mb-2'>How It Works</li>
            <li className='mb-2'>FAQs</li>
            <li className='mb-2'>Contact Us</li>
            <li className='mb-2'>Terms and Conditions</li>
            <li className='mb-2'>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <h4 className='mb-5'><strong>Need Help?</strong></h4>
          <div className='flex justify-evenly'>
            <div className='mt-1 mr-1'>
              <i><HiMail /></i>
            </div>
            <div>
              <h6 className='mb-2'>info@bube.com</h6>
            </div>
          </div>

          <div className='flex'>
            <div className='mt-1'>
              <i><HiPhone /></i>
            </div>
            <div>
              <h6 className='mb-2 ml-1'>(123) 456-7890</h6>
            </div>
          </div>
            
            <h5 className='mb-2'>Follow Us On</h5>
            <div className='flex justify-evenly mt-5'>
              <div className='rounded-full' >
                <img src='https://cdn-icons-png.flaticon.com/512/124/124010.png' alt='fb-logo' width='20' />
              </div>
              <div>
                <img src='https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png' alt='twitter-logo' width='20' />
              </div>
              <div>
                <img src='https://img.icons8.com/color/2x/linkedin-circled.png' alt='linkedin-logo'width='20' />
              </div>
              <div>
                <img src='https://cdn-icons-png.flaticon.com/128/1177/1177585.png' alt='instagram-logo' width='20' />
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

import React from 'react'

function Footer() {

    const footerText = ''

  return (
    <div>
      <div className='flex justify-between
       border-solid border-2 border-white ... 
        border-l-transparent
       border-r-transparent
       bg-white mt-15 mb-10 pb-10 pt-10'>
        <div className='ml-3'>
          <h6><span style={{fontSize: 13}}>Making This The First True Generator On The Internet.
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
            <h6 className='mb-2'>info@bube.com</h6>
            <h6 className='mb-2'>(123) 456-7890</h6>
            <h5 className='mb-2'>Follow Us On</h5>
            <ul>
              <li>facebook icon</li>
              <li>twitter</li>
              <li>LinkedIn</li>
               <li>Instagram</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer

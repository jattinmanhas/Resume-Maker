import React from 'react'
import downloadresume from "../images/downloadresume.svg"
import './Action.scss'

const Action = () => {
  return (
    <div className='action__container'>
      <h2>3 EASY STEPS TO CREATE YOUR PERFECT RESUME</h2>
      <hr/>
      <div className='action__details'>
      <div className="action__firstContainer">
        <div className='actionSvg__container'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.09 31.43">
            <g fill="#2ebe6e">
              <path d="M12.67,0H8.62L0,9V31.43H26.09V0H12.67ZM8.8,4.07l0,5L4,9.12ZM23.14,28.48H2.95V12.07L11.77,12l0-9.06h11.4V28.48h0Z"></path>
              <path d="M19.4,15.13H6.83a1,1,0,0,0,0,2H19.4A1,1,0,1,0,19.4,15.13Z"></path>
              <path d="M19.4,19.47H6.83a1,1,0,0,0,0,2H19.4A1,1,0,1,0,19.4,19.47Z"></path>
              <path d="M19.4,23.81H6.83a1,1,0,0,0,0,2H19.4A1,1,0,0,0,19.4,23.81Z"></path>
              <path d="M19,8.75a2.15,2.15,0,1,0-2.46,0A3.49,3.49,0,0,0,14.31,12h7A3.49,3.49,0,0,0,19,8.75Z"></path>
            </g>
          </svg>
          </div>
      
          <h6>CHOOSE YOUR RESUME TEMPLATE</h6>
          <p className='action__text'>
            Our resume templates are designed to follow industry guidelines and best practices employers are looking for. 
          </p>
        </div>
        <div className="action__secondContainer">
        <div className='actionSvg__container'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.87 30.66">
            <path fill="#2ebe6e" d="M21,0.79L18.79,3l-3-3L4.61,11.19,6,12.56l9.83-9.83,1.61,1.61L0.07,21.69,0,30.66l9-.07,20.9-20.9Zm4.79,8.89-4.08,4.07L16.9,9,21,4.9Zm-5.44,5.44L9.14,26.31,4.35,21.52,15.53,10.34ZM2.93,27.73l0-4.83,0,0,4.79,4.79,0,0Z"></path>
          </svg>
          </div>
          <h6>SHOW WHAT YOU'RE MADE OF</h6>
          <p className='action__text'>
            Just fill in you details in the form and showcase your abilites and your achievements.
          </p>
        </div>
        <div className="action__thirdContainer">
        <div className='actionSvg__container'>
          <img src={downloadresume} alt="download resume icon"/>
        </div>
          <h6>DOWNLOAD YOUR RESUME</h6>
          <p className='action__text'>
            Download your resume, impress your employers and land the job you are looking for.
          </p>
        </div>
        </div>
    </div>
  )
}

export default Action
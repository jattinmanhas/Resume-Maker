import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ title, info }) => {
     const [show, setShow] = useState(false);

     return (
          <article className="question__Accordian">
               <header>
                    <h4>{title}</h4>
                    <button className="btn__Accordian" onClick={() => setShow(!show)}>
                         {show ? <AiOutlineMinus /> : <AiOutlinePlus />}
                    </button>
               </header>
               {show && <p>{info}</p>}
          </article>
     );
};

export default Question;

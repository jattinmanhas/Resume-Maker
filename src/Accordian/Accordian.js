import React, { useState } from 'react';
import data from './dataAccordian';
import SingleQuestion from './Question';
import "./Accordian.css"

function Accordian() {
     const [question, setQuestion] = useState(data);

     return <main>
          <div className="container__Accordian">
               <h3>Most Frequent Questions about Resume</h3>
               <section className="info">
                    {question.map((ques) => {
                         return <SingleQuestion key={ques.id} {...ques} />
                    })}
               </section>
          </div>
     </main>;
}

export default Accordian;

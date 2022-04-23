import React from "react"
import { useState } from "react"
import './Template5.css'

export default function Template5(){
    const[variable,setVariable] = useState({
        firstName:'',
        lastName:'',
        email:'',
        mobile:'',
        profession:'',
        interests:'',
        skill1:'',
        skill2:'',
        skill3:'',
        skill4:'',
        skill5:'',
        skill6:'',
        skill7:'',
        skill8:'',
        address:'',
        higherEducation:'12th Medical/ 12th Non.Medical/12th Arts',
        school:'',
        higherEducationMarks:'',
        collegeEducation:'B.A./B.Sc./B.E./...   ',
        college:'',
        collegeEducationMarks:'',
        expTitle:'',
        experience:'',
        expTitle2:'',
        experience2:''

    })
   

function print(){


window.print();
}
  

    return(
        <div className="row">

            {/* Form Column */}
        <div className="col-lg-6 col-md-12 col-cm-12 no-print"> 
    
          
           <form>
          
                <label for="firstName">
                First Name :  </label> 
                  
                   <input type="text"
            value={variable.firstName}
            placeholder="First Name"
            onChange={event => setVariable({...variable, firstName : event.target.value})}
            />
            

                
                <label>
                   Second Name :      </label>
                   
                   <input type="text"
            value={variable.lastName}
            placeholder="Last Name"
            onChange={event => setVariable({...variable, lastName : event.target.value})}
            ></input>
       
                

              
              <label>
                   Email  : 
                   </label> 
                  
                   <input type="email"
            value={variable.email}
            onChange={event => setVariable({...variable, email : event.target.value})}
            ></input>  
            

            <label>
                   M. Number : 
                   </label> 
                   <input type="tel"
            value={variable.mobile}
            pattern="^\d{10}$"
            maxLenght="10"
            required="required"
            onChange={event => setVariable({...variable, mobile : event.target.value})}
            ></input>  
             
             <label>
                   Profession  : 
                  
                   </label>   
            <input 
            type="text"
            value={variable.profession}
            onChange={event => setVariable({...variable, profession : event.target.value})}
            ></input>
           <label>
                   Experience  : 
                  
                   </label>  
                   <label>First Job/Project Details</label> 
                   <input 
            type="text"
            value={variable.expTitle}
            placeholder="Job Title / Project Title"
            onChange={event => setVariable({...variable, expTitle : event.target.value})}
            ></input>
            <input 
            type="text"
            value={variable.experience}
            placeholder="Job Details / Project Details"
            onChange={event => setVariable({...variable, experience : event.target.value})}
            ></input>
<label>Second Job/Project Details <p className="p-alert"> (If any )</p></label>
            <input 
            type="text"
            value={variable.expTitle2}
            placeholder="Job Title / Project Title"
            onChange={event => setVariable({...variable, expTitle2 : event.target.value})}
            ></input>
            <input 
            type="text"
            value={variable.experience2}
            placeholder="Job Details / Project Details"
            onChange={event => setVariable({...variable, experience2 : event.target.value})}
            ></input>

           <label>
                   Skills  : 
                   <p className="p-alert"> (Enter skills Separately in Feilds *No Need to fill every feild* )</p>
                   </label>   
            <input 
            className="skill-input"
            type="text"
            placeholder="Enter Your Skill"
            value={variable.skill1}
            onChange={event => setVariable({...variable, skill1 : event.target.value})}
            ></input>
                        <input
                        className="skill-input" 
            type="text"
            value={variable.skill2}
            placeholder="Enter Your Skill"
            onChange={event => setVariable({...variable, skill2 : event.target.value})}
            ></input>
                        <input 
                        className="skill-input"
            type="text"
            value={variable.skill3}
            placeholder="Enter Your Skill"
            onChange={event => setVariable({...variable, skill3 : event.target.value})}
            ></input>
                        <input 
                        className="skill-input"
            type="text"
            value={variable.skill4}
            placeholder="Enter Your Skill"
            onChange={event => setVariable({...variable, skill4 : event.target.value})}
            ></input>
                        <input
                        className="skill-input" 
            type="text"
            value={variable.skill5}
            placeholder="Enter Your Skill"
            onChange={event => setVariable({...variable, skill5 : event.target.value})}
            ></input>
                        <input 
                        className="skill-input"
            type="text"
            placeholder="Enter Your Skill"
            value={variable.skill6}
            onChange={event => setVariable({...variable, skill6 : event.target.value})}
            ></input>
                        <input 
                        className="skill-input"
            type="text"
            value={variable.skill7}
            placeholder="Enter Your Skill"
            onChange={event => setVariable({...variable, skill7 : event.target.value})}
            ></input>
                        <input 
                        className="skill-input"
            type="text"
            value={variable.skill8}
            placeholder="Enter Your Skill"
            onChange={event => setVariable({...variable, skill8 : event.target.value})}
            ></input>

           <label>
                   Address  : 
                  
                   </label>   
            <input 
            type="text"
            value={variable.address}
            onChange={event => setVariable({...variable, address : event.target.value})}
            ></input>
           
            
           <label>
                   Education Details: 
                  
                   </label>   
                   <label>
                       Higher Education :
                   </label> 
                   
                     <input 
                            type="text"
                            value={variable.higherEducation}
                            placeholder="Enter Your Class Name"
                            onChange={event => setVariable({...variable, higherEducation : event.target.value})}
                            ></input>
                             <input 
                            type="text"
                            value={variable.school}
                            placeholder="Enter Your School Name Here"
                            onChange={event => setVariable({...variable, school : event.target.value})}
                            ></input>
                             <input 
                            type="text"
                            value={variable.higherEducationMarks}
                            placeholder="Enter Percentage here"
                            onChange={event => setVariable({...variable, higherEducationMarks : event.target.value})}
                            ></input>
                   <label>
                       College Education :
                   </label>
                   <input 
                         type="text"
                        value={variable.collegeEducation}
                        placeholder="Enter Your Class Name"
                        onChange={event => setVariable({...variable, collegeEducation : event.target.value})}
                        ></input>
                            <input 
                            type="text"
                            value={variable.college}
                            placeholder="Enter Your College Name Here"
                            onChange={event => setVariable({...variable, college : event.target.value})}
                            ></input>
                          <input type="text"
                        value={variable.collegeEducationMarsk}
                        placeholder="Enter Your Percentage"
                        onChange={event => setVariable({...variable, collegeEducationMarks : event.target.value})}
                        ></input>
         


         
       
            
           
           
           <label>
                   Interests : 
                  
                   </label>   
            <input 
            type="text"
            value={variable.interests}
            onChange={event => setVariable({...variable, interests : event.target.value})}
            ></input>
        
        <label> Thanks for using our Resume Builder</label>
            <input
            type="button"
            value="Print Resume as Pdf"
            className="btn-input"
            onClick={print}
            ></input>
            </form> 
          
        </div>
{/* Template column */}

        <div  className="col-lg-6 col-md-12 col-cm-12 col-preview printme">
            <div className="preview" id="toprint">
             
             <div className="preview-heading-5"
         
         >
           <h1>
           {variable.firstName} {variable.lastName} 
           </h1> 
         
          <br/>
          <h3  className="preview-h3">
             {variable.profession}</h3> 
            <br/>
        
         </div>
         
                  
           

            <div className="preview-body ">
                {/* Personal Information Column  with width = 20% */}
                <div id="personalInfo">
                <h3>Email:</h3> 
                    < span> <p>{variable.email} </p></span>
         
                 <h3 >Mobile:</h3> 
                  <span> <p> {variable.mobile}</p></span>
                      <br/>
                      <h3 className="preview-h3">
            <img src="./images/project_icon.png" width="30px" height="30px" alt="" />
                Interests : </h3> 
            <span> <p>{variable.interests} </p></span>

           

            <h3 className="preview-h3">
            <img src="./images/address_icon.png" width="30px" height="30px" alt="" />
                Address :  </h3> 
            <span> <p> {variable.address}</p></span>
                </div>



    {/* Professional Information column with width 80% */}



                <div  id="professionalInfo">

{/* Experience Details Here */}
                <h3 className="preview-h3">
            <img src="./images/project_icon.png" width="30px" height="30px" alt="" />
                Experience(Project/Job details): </h3> 
                <h3 className="preview-title-h3">{variable.expTitle} :</h3>
            <span> <p>{variable.experience} </p></span>
            <h3 className="preview-title-h3">{variable.expTitle2} </h3>
            <span> <p>{variable.experience2} </p></span>


{/* Skills Details Here */}
            <div className="skill-set">
            <h3 className="preview-h3">
            <img src="./images/skills_icon.png" width="30px" height="30px" alt="" />
                Skills </h3> 
            <ul className="row">
                <li className="skill-li"> {variable.skill1} </li>
                <li className="skill-li"> {variable.skill2} </li>
                <li className="skill-li"> {variable.skill3} </li>
                <li className="skill-li"> {variable.skill4} </li>
                <li className="skill-li"> {variable.skill5} </li>
                <li className="skill-li"> {variable.skill6} </li>
                <li className="skill-li"> {variable.skill7} </li>
                <li className="skill-li"> {variable.skill8} </li>

            </ul>



       
            </div>
            

            <h3 className="preview-h3"> <img src="./images/edu_icon.png" width="30px" height="30px" alt="" />  Eductaion Details : </h3> 
           

            <h3 className="preview-h3"> <img src="./images/colg_icon.png" width="30px" height="30px" alt="" />
            {variable.higherEducation} 
             </h3>
             <span> <p clasName="instituteName"> <b>{variable.school}</b> </p></span>

            <span> <p  > <b>Percentage :-</b>{variable.higherEducationMarks}</p></span>

            <h3 className="preview-h3"> <img src="./images/colg_icon.png" width="30px" height="30px" alt="" />
             {variable.collegeEducation} </h3> 
             <span> <p  clasName="instituteName"> <b>{variable.college}</b> </p></span>
            <span> <p>  <b>Percentage :-</b> {variable.collegeEducationMarks} </p></span>

           
            </div>
            
            </div>

            
           
        </div>

        </div>
        </div>
    )
}
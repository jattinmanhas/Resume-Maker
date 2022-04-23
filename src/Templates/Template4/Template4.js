import React from "react"
import { useState } from "react"
import './Template4.css'

export default function Template4(){
    const[variable,setVariable] = useState({
        firstName:'',
        lastName:'',
        email:'',
        mobile:'',
        profession:'',
        interests:'',
        skills:'',
        address:'',
        higherEducation:'12th Medical/ 12th Non.Medical/12th Arts',
        school:'',
        higherEducationMarks:'',
        collegeEducation:'B.A./B.Sc./B.E./...   ',
        college:'',
        collegeEducationMarks:'',
        expTitle:'',
        experience:''

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
           <label>
                   Skills  : 
                  
                   </label>   
            <input 
            type="text"
            value={variable.skills}
            onChange={event => setVariable({...variable, skills : event.target.value})}
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
             
             <div className="preview-heading-4"
         
         >
           <h1>
           {variable.firstName} {variable.lastName} 
           </h1> 
         
          <br/>
          <h3  className="preview-h3">
             {variable.profession}</h3> 
            
         <h3>Email:</h3> 
         <span> <p>{variable.email} </p></span>
         
         <h3 >Mobile:</h3> 
         <span> <p> {variable.mobile}</p></span>
         <br/>
         <hr/>
        
         </div>
         
                  
           

            <div className="preview-body ">

            <h3 className="preview-h3">
            <img src="./images/project_icon.png" width="30px" height="30px" alt="" />
                Experience(Project/Job details): </h3> 
                <h3 className="preview-title-h3">{variable.expTitle} :</h3>
            <span> <p>{variable.experience} </p></span>


            <h3 className="preview-h3">
            <img src="./images/skills_icon.png" width="30px" height="30px" alt="" />
                Skills </h3> 
            <span> <p className="skill"> {variable.skills}</p></span>

         <hr/>

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

            <h3 className="preview-h3">
            <img src="./images/project_icon.png" width="30px" height="30px" alt="" />
                Interests : </h3> 
            <span> <p>{variable.interests} </p></span>

           

            <h3 className="preview-h3">
            <img src="./images/address_icon.png" width="30px" height="30px" alt="" />
                Address :  </h3> 
            <span> <p> {variable.address}</p></span>
            </div>
            
            </div>
           
        </div>

        
        </div>
    )
}
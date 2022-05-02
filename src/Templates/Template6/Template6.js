import React from "react"
import { useState } from "react"
import './Template6.css'

export default function Template6(){
    const[variable,setVariable] = useState({
        firstName:'',
        lastName:'',
        email:'',
        mobile:'',
        linkedin:'',
        profession:'',
        interests:'',
        skills:'',
        software1:'',
        software2:'',
        software3:'',
        software4:'',
        software5:'',
        software6:'',
        language:'',
        address:'',
        higherEducation:'',
        school:'',
        higherEducationMarks:'',
        collegeEducation:'  ',
        college:'',
        collegeEducationMarks:'',
        expTitle:'',
        experience:'',
        expTitle2:'',
        experience2:'',
        diploma:'',
        certificates:'',
        diplomaName:'',
        certificatesName:''

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
                   Profession  : 
                  
                   </label>   
            <input 
            type="text"
            value={variable.profession}
            onChange={event => setVariable({...variable, profession : event.target.value})}
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
                   LinkedIn  : 
                  
            </label>   
            <input 
            type="text"
            value={variable.linkedin}
            onChange={event => setVariable({...variable, linkedin : event.target.value})}
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
                   Skills  : 
                   <p className="p-alert"> (Enter skills  here and separate them by space.* )</p>
                   </label>   
                   <input 
            type="text"
            value={variable.skills}
            onChange={event => setVariable({...variable, skills : event.target.value})}
            ></input>
            <label>
                   Software \ Interface : 
                   <p className="p-alert"> (No need to fill every input* )</p>
                   </label>   
            <input 
              className="software-input"
            type="text"
            placeholder="Enter Your Skill"
            value={variable.software1}
            onChange={event => setVariable({...variable,software1 : event.target.value})}
            ></input>
            <input 
            className="software-input"
            type="text"
            placeholder="Enter Your Skill"
            value={variable.software2}
            onChange={event => setVariable({...variable, software2 : event.target.value})}
            ></input>
                        <input
                        className="software-input" 
            type="text"
            value={variable.software3}
            placeholder="Enter Your Skill"
            onChange={event => setVariable({...variable, software3 : event.target.value})}
            ></input>
                        <input 
                        className="software-input"
            type="text"
            value={variable.software4}
            placeholder="Enter Your Skill"
            onChange={event => setVariable({...variable, software4 : event.target.value})}
            ></input>
                        <input 
                        className="software-input"
            type="text"
            value={variable.software5}
            placeholder="Enter Your Skill"
            onChange={event => setVariable({...variable, software5 : event.target.value})}
            ></input>
                        <input
                        className="software-input" 
            type="text"
            value={variable.software6}
            placeholder="Enter Your Skill"
            onChange={event => setVariable({...variable, software6 : event.target.value})}
            ></input>
                       
            <label>
                   Language : 
                  
                   </label>   
            <input 
            type="text"
            value={variable.language}
            onChange={event => setVariable({...variable, language : event.target.value})}
            ></input>
            <label>
                   Interests : 
                  
                   </label>   
            <input 
            type="text"
            value={variable.interests}
            onChange={event => setVariable({...variable, interests : event.target.value})}
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
                   Education Details: 
                  
                   </label>   
                   <label>
                   School/College/University Education :
                   </label> 
                   
                     <input 
                            type="text"
                            value={variable.higherEducation}
                            placeholder="Enter Your Class Name And Year of Study here"
                            onChange={event => setVariable({...variable, higherEducation : event.target.value})}
                            ></input>
                             <input 
                            type="text"
                            value={variable.school}
                            placeholder="Enter Your Institute Name Here"
                            onChange={event => setVariable({...variable, school : event.target.value})}
                            ></input>
                             <input 
                            type="text"
                            value={variable.higherEducationMarks}
                            placeholder="Enter Percentage / CGPA Here here"
                            onChange={event => setVariable({...variable, higherEducationMarks : event.target.value})}
                            ></input>
                   <label>
                      School/College/University Education :
                   </label>
                   <input 
                         type="text"
                        value={variable.collegeEducation}
                        placeholder="Enter Your Class Name And Year of Study here"
                        onChange={event => setVariable({...variable, collegeEducation : event.target.value})}
                        ></input>
                            <input 
                            type="text"
                            value={variable.college}
                            placeholder="Enter Your Institute Name Here"
                            onChange={event => setVariable({...variable, college : event.target.value})}
                            ></input>
                          <input type="text"
                        value={variable.collegeEducationMarsk}
                        placeholder="Enter Your Percentage / CGPA Here"
                        onChange={event => setVariable({...variable, collegeEducationMarks : event.target.value})}
                        ></input>
                     <label>
                       Certificate :
                   </label>
                   <p className="p-alert"> (If Any * )</p>
                   <input 
                         type="text"
                        value={variable.certificatesName}
                        placeholder="Enter certficate name here"
                        onChange={event => setVariable({...variable , certificatesName : event.target.value})}
                        ></input>
                   <input 
                         type="text"
                        value={variable.certificates}
                        placeholder="Enter certficate details here"
                        onChange={event => setVariable({...variable , certificates : event.target.value})}
                        ></input>
                        <label>   Diploma :
                   </label>
                   <p className="p-alert"> (If Any * )</p>
                   <input 
                         type="text"
                        value={variable.diplomaName}
                        placeholder="Enter Here Diploma Name and Duration"
                        onChange={event => setVariable({...variable ,diplomaName : event.target.value})}
                        ></input>
                   <input 
                         type="text"
                        value={variable.diploma}
                        placeholder="Enter Diploma details here"
                        onChange={event => setVariable({...variable , diploma : event.target.value})}
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
             
             <div className="preview-heading-6"
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
                <h3 className="preview-h3">Personal Information </h3><br/>
                <h3 className="preview-h3">Email:</h3> 
                    < span> <p className="PERSONAL-P">{variable.email} </p></span>
                <br/>
                 <h3 className="preview-h3" >Mobile:</h3> 
                  <span> <p className="PERSONAL-P"> {variable.mobile}</p></span>
                      <br/>
                      
                 <h3 className="preview-h3">LinkedIn:</h3> 
                  <span> <p className="PERSONAL-P"> {variable.linkedin}</p></span>
                      <br/>
                      
                 
                      <h3 className="preview-h3">
           
                     Address :  </h3> 
                 <span> <p className="PERSONAL-P"> {variable.address}</p></span>
                      <br/>

                      <h3 className="preview-h3">

                    Skills :</h3> 

                <p className="skill"> {variable.skills}</p>
                <br/>
                <h3 className="preview-h3">
                Software :</h3> 
                <ul className="row-software">
                <li className="software-li"> {variable.software1} </li>
                <li className="software-li"> {variable.software2} </li>
                <li className="software-li"> {variable.software3} </li>
                <li className="software-li"> {variable.software4} </li>
                <li className="software-li"> {variable.software5} </li>
                <li className="software-li"> {variable.software6} </li>
                

            </ul>
                <br/>
                <h3 className="preview-h3">
                Language :</h3> 

                <p > {variable.language}</p>




          
                </div>



    {/* Professional Information column with width 80% */}



                <div  id="professionalInfo">

{/* Experience Details Here */}
                <h3 className="preview-h3">
            
                Experience(Project/Job details): </h3> 
                <h3 className="preview-title-h3">{variable.expTitle} :</h3>
            <span> <p>{variable.experience} </p></span>
            <h3 className="preview-title-h3">{variable.expTitle2} </h3>
            <span> <p>{variable.experience2} </p></span>



           
            

            <h3 className="preview-h3">   Eductaion Details : </h3> 
           

            <h3 className="preview-h3"> 
            {variable.higherEducation} 
             </h3>
             <span> <p clasName="instituteName"> 
             <b className="bold-6">{variable.school}</b> </p></span>

            <span> <p  > 
                <b className="bold-6" >
            {variable.higherEducationMarks}
            </b>
            </p>
            </span>

            <h3 className="preview-h3"> 
             {variable.collegeEducation} </h3> 
             <span> <p  clasName="instituteName"> <b className="bold-6">{variable.college}</b> </p></span>
            <span> <p>
                  <b className="bold-6"> 
                   {variable.collegeEducationMarks} 
                   </b>
                   </p></span>

            <br/>
            <h3 className="preview-h3"> 
             {variable.certificatesName} </h3> 
            <span> <p className="PERSONAL-P">{variable.certificates} </p></span>
            <br/>
            <h3 className="preview-h3"> 
             {variable.diplomaName} </h3> 
            <span> <p className="PERSONAL-P">{variable.diploma} </p></span>
            
            <h3 className="preview-h3">

            Interests : </h3> 
            <span> <p className="PERSONAL-P">{variable.interests} </p></span>


            </div>
            
            </div>

            
           
        </div>

        </div>
        </div>
    )
}
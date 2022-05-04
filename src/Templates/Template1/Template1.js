import React from "react"
import { useState } from "react"
import './Template.css'

export default function Template1(){
    const[variable,setVariable] = useState({
        firstName:'',
        lastName:'',
        email:'',
        mobile:'',
        // profession:'',
        // professiondetails:'',
        interests:'',
        skill1:'',
        skill2:'',
        skill3:'',
        skill4:'',
        skill5:'',
        skill6:'',
        skill7:'',
        skill8:'',
        software1:'',
        software2:'',
        software3:'',
        software4:'',
        software5:'',
        software6:'',
        address:'',
        higherEducation:'12th Medical/ 12th Non.Medical/12th Arts',
        school:'',
        higherEducationMarks:'',
        collegeEducation:'B.A./B.Sc./B.E./...   ',
        college:'',
        collegeEducationMarks:'',
        expTitle:'',
        experience:'',
        expTitle1:'',
        experience1:'',
        certificatesName:'',
        certificates:''

    })
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

function print(){


window.print();
}
  

    return(
        <div className="row">

            {/* Form Column */}
        <div className="col-lg-6 col-md-12 col-cm-12 no-print"> 
    
          
           <form>
           <input type="file" onChange={handleChange} />
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
       
                
            {/* <label>
                   Profession  : 
                  
                   </label>   
            <input 
            type="text"
            placeholder="Enter Profession Name"
            value={variable.profession}
            onChange={event => setVariable({...variable, profession : event.target.value})}
            ></input>
              <input 
            type="text"
            placeholder="Enter Profession Details"
            value={variable.professiondetails}
            onChange={event => setVariable({...variable, professiondetails : event.target.value})}
            ></input> */}

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
                   Address  : 
                  
                   </label>   
            <input 
            type="text"
            value={variable.address}
            onChange={event => setVariable({...variable, address : event.target.value})}
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
                   <input 
            type="text"
            value={variable.expTitle}
            placeholder="Job Title / Project Title with year details also"
            onChange={event => setVariable({...variable, expTitle : event.target.value})}
            ></input>
            <input 
            type="text"
            value={variable.experience}
            placeholder="Job Details / Project Details"
            onChange={event => setVariable({...variable, experience : event.target.value})}
            ></input>
                  <input 
            type="text"
            value={variable.expTitle1}
            placeholder="Job Title / Project Title with Years Details also"
            onChange={event => setVariable({...variable, expTitle1 : event.target.value})}
            ></input>
            <input 
            type="text"
            value={variable.experience1}
            placeholder="Job Details / Project Details"
            onChange={event => setVariable({...variable, experience1 : event.target.value})}
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
                   Software \ Interface : 
                   <p className="p-alert"> (No need to fill every input* )</p>
                   </label>   
            <input 
              className="software-input"
            type="text"
            placeholder="Enter Software interface"
            value={variable.software1}
            onChange={event => setVariable({...variable,software1 : event.target.value})}
            ></input>
            <input 
            className="software-input"
            type="text"
            placeholder="Enter Software Interface"
            value={variable.software2}
            onChange={event => setVariable({...variable, software2 : event.target.value})}
            ></input>
                        <input
                        className="software-input" 
            type="text"
            value={variable.software3}
            placeholder="Enter Software Interface"
            onChange={event => setVariable({...variable, software3 : event.target.value})}
            ></input>
                        <input 
                        className="software-input"
            type="text"
            value={variable.software4}
            placeholder="Enter Software Interface"
            onChange={event => setVariable({...variable, software4 : event.target.value})}
            ></input>
                        <input 
                        className="software-input"
            type="text"
            value={variable.software5}
            placeholder="Enter software interface"
            onChange={event => setVariable({...variable, software5 : event.target.value})}
            ></input>
                        <input
                        className="software-input" 
            type="text"
            value={variable.software6}
            placeholder="Enter Software Interface"
            onChange={event => setVariable({...variable, software6 : event.target.value})}
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
                       Certificate / Diploma :
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
             
             <div className="preview-heading-1"
         
         >
             <div className="heading-40-left">
             <h3>Full Name : </h3> 
          <span> <p>{variable.firstName} {variable.lastName}</p></span>
          
          <br/>
         <h3>Email - Id : </h3> 
         <span> <p>{variable.email} </p></span>
             </div>
             <div className="heading-40-right">
             <h3 >M. Number : </h3> 
             <span> <p> {variable.mobile}</p></span>
             <h3 className="preview-h3">
           
              Address :  </h3> 
             <span> <p> {variable.address}</p></span>
           
             </div>
             <div className="heading-20-right">
                  <span>  <img src={file}  className="img-1" alt="" /></span>
                  </div>
        
         
        
         
        
         </div>
         
                  
           

            <div className="preview-body-1 ">

            <hr/>
            <h3 className="preview-h3">
         
         Experience(Project/Job details): </h3> 
         <h3 className="preview-title-h3">{variable.expTitle} </h3>
     <span> <p>{variable.experience} </p></span>
     <br/>
     <h3 className="preview-title-h3">{variable.expTitle1} </h3>
     <span> <p>{variable.experience1} </p></span>


     <h3 className="preview-h3">
   
         Skills </h3> 
     
     <ul className="row-4">
         <li className="skill-li-4"> {variable.skill1} </li>
         <li className="skill-li-4"> {variable.skill2} </li>
         <li className="skill-li-4"> {variable.skill3} </li>
         <li className="skill-li-4"> {variable.skill4} </li>
         <li className="skill-li-4"> {variable.skill5} </li>
         <li className="skill-li-4"> {variable.skill6} </li>
         <li className="skill-li-4"> {variable.skill7} </li>
         <li className="skill-li-4"> {variable.skill8} </li>

     </ul>
    
         <br/>
         <h3 className="preview-h3">
         Software </h3> 
         <ul className="row-software4">
         <li className="software-li4"> {variable.software1} </li>
         <li className="software-li4"> {variable.software2} </li>
         <li className="software-li4"> {variable.software3} </li>
         <li className="software-li4"> {variable.software4} </li>
         <li className="software-li4"> {variable.software5} </li>
         <li className="software-li4"> {variable.software6} </li>
         

     </ul>
         <br/>
      
  

     <h3 className="preview-h3"> Eductaion Details : </h3> 
    

     <h3 className="preview-h3"> 
     {variable.higherEducation} 
      </h3>
      <span> <p clasName="instituteName"> <b>{variable.school}</b> </p></span>

     <span> <p  > <b>Percentage :-</b>{variable.higherEducationMarks}</p></span>

     <h3 className="preview-h3"> 
      {variable.collegeEducation} </h3> 
      <span> <p  clasName="instituteName"> <b>{variable.college}</b> </p></span>
     <span> <p>  <b>Percentage :-</b> {variable.collegeEducationMarks} </p></span>

     
     <br/>
     <h3 className="preview-h3"> 
      {variable.certificatesName} </h3> 
     <span> <p className="PERSONAL-P">{variable.certificates} </p></span>
     
    

   

           

            </div>
            
            </div>
           
        </div>

        
        </div>
    )
}
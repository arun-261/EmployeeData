import React,{useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Employee from '../Employee';
import { useNavigate } from 'react-router-dom';

function Edit() {
  const navigate = useNavigate()
  const [empId, setId]=useState('')

  const [empName, setName]=useState('')
  const [empDesc, setDesc]=useState('')
  const [empSalary, setSalary]=useState(0)


  

 
  const handleUpdate = (event)=>{
    event.preventDefault()
    // find the index number of empId that to be updated
    let index = Employee.map((item)=>item.empId).indexOf(empId)
    let emp= Employee[index]
    console.log(emp);
     emp.empId = empId
     emp.empName=empName
     emp.empDesc = empDesc
     emp.empSalary = empSalary
   navigate('/Home')
  }
 
  

  
  


  useEffect(()=>{
    setId(localStorage.getItem('empId'))
    setName(localStorage.getItem('empName'))
    setDesc(localStorage.getItem('empDesc'))
    setSalary(JSON.parse(localStorage.getItem('empSalary')))

  },[])
//  console.log(empId);
//  console.log(empName);
//  console.log(empDesc);
//  console.log(empSalary);




  return (
    
      <div>
        <div className='container'>
          <h1 style={{ color: 'blue' ,marginTop:'20px'}}>Update Employee Details</h1>
          <p>This is a fake statement: &nbsp; Lorem ipsum, in graphical and textual context,
            refers to filler text that is placed in a document or visual presentation. Lorem ipsum is derived from the Latin
            "dolorem ipsum" roughly translated as "pain itself." Advertisements.</p>
        </div>
        <div className='container mt-5 p-5' style={{width:'800px'}}>

          <Form>
           
  
            <Form.Group className="mb-3" controlId="formBasicNamw">
              <Form.Control type="text" value={empName} placeholder="Enter Employee Name"
              onChange={(event)=>setName(event.target.value)}/>
             
            </Form.Group>
  
            <Form.Group className="mb-3" controlId="formBasicDesc">
              <Form.Control type="text" value={empDesc}  placeholder="Enter Employee Designation"
              onChange={(event)=>setDesc(event.target.value)}/>
              
             
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicSalary">
              <Form.Control type="number" value={empSalary} placeholder="Enter Employee Salary"
              onChange={(event)=>setSalary(event.target.value)}/>
              
             
            </Form.Group>
  
  
           
            <Button onClick={(event)=> handleUpdate(event)} variant="primary" type="submit">
              post
            </Button>
          </Form>
        </div>
      </div>
  )
}

export default Edit
import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import uuid from 'react-uuid'
import Employee from '../Employee';
import { useNavigate } from 'react-router-dom';

function Add() {
  const [empName, setName]=useState('')
  const [empDesc, setDesc]=useState('')
  const [empSalary, setSalary]=useState(0)
  const navigate = useNavigate()

  let handleSubmit = (event)=>{
  event.preventDefault()
    // console.log( empName);
    // console.log( empDesc);
    // console.log(empSalary);
  // generate uuid
  const ids = uuid()
  let uniqueId = ids.slice(0,7)
  // console.log(uniqueId);

  let salary = Number(empSalary)

  Employee.push(
    {
      empId:uniqueId,
      empName,
      empDesc,
      empSalary:salary
    }
   
  )
  navigate('/Home')

  }

  return (
    <div>
      <div className='container'>
        <h1 style={{ color: 'blue' ,marginTop:'20px'}}>Add Employee Details</h1>
        <p>This is a fake statement: &nbsp; Lorem ipsum, in graphical and textual context,
          refers to filler text that is placed in a document or visual presentation. Lorem ipsum is derived from the Latin
          "dolorem ipsum" roughly translated as "pain itself." Advertisements.</p>
      </div>
      <div className='container mt-5 p-5' style={{width:'800px'}}>
        <Form>
         

          <Form.Group className="mb-3" controlId="formBasicNamw">
            <Form.Control type="text" placeholder="Enter Employee Name" 
            onChange={(event)=>setName(event.target.value)}
            />
           
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicDesc">
            <Form.Control type="text" placeholder="Enter Employee Designation"
             onChange={(event)=>setDesc(event.target.value)}
            />
           
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicSalary">
            <Form.Control type="number" placeholder="Enter Employee Salary"
             onChange={(event)=>setSalary(event.target.value)}
            />
           
          </Form.Group>


          
         
          <Button onClick={(event)=>handleSubmit(event)} variant="primary" type="submit">
            post
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default Add
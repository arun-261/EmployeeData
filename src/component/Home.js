import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Employee from '../Employee'
import { useNavigate,Link } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleDelete = (empId)=>{
// console.log(empId);
let index =Employee.map((item)=>item.empId).indexOf(empId)
// console.log(index);
Employee.splice(index,1)
navigate('/Home');
  }


 const handleEdit =(empId,empName,empDesc,empSalary)=>{
  localStorage.setItem("empId",empId)
  localStorage.setItem("empName",empName)
  localStorage.setItem("empDesc",empDesc)
  localStorage.setItem("empSalary",empSalary)

 }

  
  return (
    <div style={{ margin: "5rem" }}>
      <h2 className='text-center pb-5'>List of employees &nbsp; &nbsp; &nbsp;
       <Link to={'/add'}> <Button variant='success'>Add &nbsp; <i class="fa-solid fa-user-plus"></i> </Button></Link>
      </h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            
            <th>Employee Name</th>
            <th>Employee Designation</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            Employee && Employee.length>0?
            Employee.map((item)=>(
              <tr>
             
              <td>{item.empName}</td>
              <td>{item.empDesc}</td>
              <td>{item.empSalary}</td>
              <td>
                
                
                <Link to={'/edit'}>
                <Button onClick={()=>handleEdit(item.empId,item.empName,item.empDesc,item.empSalary)}>
                  <i class="fa-solid fa-user-pen"></i>
                </Button>
                </Link>
                &nbsp;
                <Button variant='danger' onClick={()=>handleDelete(item.empId)}>
                  <i class="fa-solid  fa-trash-can"></i>
                </Button>

              </td>

            </tr>
            ))
            :"no data to display"
           
          }


        </tbody>
      </Table>

    </div>
  )
}

export default Home
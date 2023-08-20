import React, { useEffect, useState } from 'react'
import empService from '../Service/emp.service';
import { useNavigate, useParams } from 'react-router-dom';

const EditEmp = () => {

//use react hooks
const [emp,setEmp]=useState({
    id:"",
    firstName:"",
    lastName:"",
    email:"",
    address:"",
    salary:""
 })
 
 const [msg,setMsg]=useState(""); // hook

 const data=useParams();
 const navigate = useNavigate(); // directly navigate to home page after edit 

 
 useEffect(() => {
    empService
      .getEmpById(data.id)
      .then((res) => {
        setEmp(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
 
 //set value or handle changes from forms 
 const handleChange = (e) => {
   const value = e.target.value;
   setEmp({ ...emp, [e.target.name]: value });
 };

 const updateEmp = (e) => {
    e.preventDefault();
    empService
      .updateEmp(emp.id, emp)
      .then((res) => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
        <div className='container'>
          <div className="row">
             <div className="col-md-6 offset-md-3">
                 <div className="card">
                    <div className="card-header text-center fs-3">
                      Edit Emp
                     {msg && <p className="text-success"> {msg} </p>}
                     
                    </div>

                    <div className="card-body">
                          <form onSubmit={(e) => updateEmp(e)}>
                          
                              <div className="mb-3">
                                <label >Enter First Name</label>
                                <input type="text" className="form-control" name='firstName'
                                 onChange={(e)=>handleChange(e)} 
                                 value={emp.firstName}/>
                              </div>

                              <div className="mb-3">
                                <label >Enter Last Name</label>
                                <input type="text" className="form-control" name='lastName' 
                                 onChange={(e)=>handleChange(e)} 
                                value={emp.lastName}/>
                              </div>
                              <div className="mb-3">
                                <label >Enter Email</label>
                                <input type="text" className="form-control" name='email' 
                                 onChange={(e)=>handleChange(e)} 
                                value={emp.email}/>
                              </div>
                              <div className="mb-3">
                                <label >Enter Address</label>
                                <input type="text" className="form-control" name='address' 
                                 onChange={(e)=>handleChange(e)} 
                                value={emp.address}/>
                              </div>
                              <div className="mb-3">
                                <label >Enter Salary</label>
                                <input type="number" className="form-control" name='salary' 
                                 onChange={(e)=>handleChange(e)} 
                                value={emp.salary} />
                              </div>

                              <div className="text-center">
                                      <button className='btn btn-success'>Submit</button>
                                      <input type="Reset" className='btn btn-danger m-3' value="Reset"></input>
                              </div>
                              
                          </form>
                 </div>
                 </div>
             </div>
          </div>
     </div>
    </div>
  )
}

export default EditEmp
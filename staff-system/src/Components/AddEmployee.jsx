import React, { useState } from 'react'
import {BsPlusLg} from 'react-icons/bs'

export default function AddEmployee({lastId, onSendEmployeeInfo}) {

    const newData = {
        employeeFirstName: "",
        employeeLastName: "",
        startDate: "",
        jobTitle: "",
        department: "",
        location: "",
        salary: ""
    }

    const [addEmployee, setAddEmployee] = useState(false)
    const [formData, setFormData] = useState(newData);


    function newEmployee(e) {
        e.preventDefault()
        const employeeInfo = {

            id: lastId +1 ,
            employeeFirstName: formData.employeeFirstName,
            employeeLastName: formData.employeeLastName,
            startDate: formData.startDate,
            jobTitle: formData.jobTitle,
            department: formData.department,
            location: formData.location,
            salary: formData.salary
        }
        onSendEmployeeInfo(employeeInfo)
        setFormData(newData);
        setAddEmployee(addEmployee)
    }

  return (
      <div>
          <div className='text-center mt-3 px-4 md:flex md:px-8'>
              <button className='bg-green-300 w-40 md:w-96 rounded-sm text-gray-700 flex items-center justify-center hover:bg-green-400' onClick={() => {setAddEmployee(!addEmployee)}}>
                  <div className='text-gray-700'>
                      <BsPlusLg />
                </div>
                   <span className='ml-3'>Add Employee </span> 
              </button>
          </div>
          
          {
              addEmployee && (
                  <div className='w-80 my-8 bg-gray-100 py-3 rounded-md mx-4 md:mx-8 md:w-[600px]'>
              
                      <div className='md:ml-8 block md:flex items-center text-sm text-center md:text-left'>
                         <label htmlFor="employeeFirstName">First Name</label>
                            <input type="text" name="employeeFirstName" id="employeeFirstName" value={formData.employeeFirstName} className='employee-form ml-5 ' onChange={(e) => {setFormData({...formData, employeeFirstName: e.target.value})}} />
                      </div>
                      
                    <div className='employee-input'>
                        <label htmlFor="employeeLastName">Last Name</label>
                        <input type="text" name="employeeLastName" id="employeeLastName" value={formData.employeeLastName}  className='employee-form ml-5'  onChange={ (e) => {setFormData({...formData, employeeLastName: e.target.value})}}/>
                      </div>
                      
                    <div className='employee-input'>
                        <label htmlFor="jobTitle">Job Title</label>
                        <input type="text" name="jobTitle" id="jobTitle" value={formData.jobTitle} className='employee-form ml-[36px] ' onChange={ (e) => {setFormData({...formData, jobTitle: e.target.value})}}/>
                      </div>
                      
                    <div className='employee-input'>
                        <label htmlFor="department">Department</label>
                        <input type="text" name="department" id="department"  value={formData.department} className='employee-form ml-[11px]' onChange={ (e) => {setFormData({...formData, department: e.target.value})}} />
                      </div>
                      
                    <div className='employee-input '>
                        <label htmlFor="startDate">Start Date</label>
                        <input type="date" name="startDate" id="startDate" value={formData.startDate} className='employee-form ml-6' onChange={ (e) => {setFormData({...formData, startDate: e.target.value})}}/>
                      </div>
                      
                    <div className='employee-input'>
                        <label htmlFor="salary">Salary</label>
                        <input type="text" name="salary" id="salary" value={formData.salary} className='employee-form ml-[53px]' onChange={ (e) => {setFormData({...formData, salary: e.target.value})}}/>
                      </div>
                      
                    <div className='employee-input'>
                        <label htmlFor="location">Location</label>
                          <select name="location" id="location"  className=' ml-[35px] employee-form' value={formData.location} onChange={(e) => {setFormData({...formData, location: e.target.value})}}>
                              <option hidden> Select Office</option>
                              <option>London Office</option>
                              <option>Manchester Office</option>
                              <option>Nottingham Office</option>
                          </select>
                    </div>
                      <div className='px-8'>
                          
                        <button className='w-full bg-green-300 rounded-md px-3 mt-6 py-1 text-gray-700 hover:bg-green-400' onClick={newEmployee}>
                          Submit
                        </button>
                      </div>
                      
              
              
              


          </div>
              )
          }
          

          
          
    </div>
  )
}

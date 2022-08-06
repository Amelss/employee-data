import React, { useState } from 'react'
import {BsPlusLg} from 'react-icons/bs'

export default function AddEmployee() {

    const [addEmployee, setAddEmployee] = useState(false)

  return (
      <div>
          <div className='text-center mt-3 px-4 md:flex md:px-8'>
              <button className='bg-green-300 w-40 md:w-96 rounded-sm text-gray-700 flex items-center justify-center' onClick={() => {setAddEmployee(!addEmployee)}}>
                  <div className='text-gray-700'>
                      <BsPlusLg />
                </div>
                   <span className='ml-3'>Add Employee </span> 
              </button>
          </div>
          
          {
              addEmployee && (
                  <form action="" className='w-80 my-8 bg-gray-200 py-3 rounded-md mx-4 md:mx-8 md:w-[600px]'>
              
              <div className='md:ml-8 block md:flex items-center text-sm text-center md:text-left'>
                  <label htmlFor="employeeFirstName">First Name</label>
                  <input type="text" name="employeeFirstName" id="employeeFirstName"  className='employee-form ml-5 '/>
              </div>
              <div className='employee-input'>
                  <label htmlFor="employeeLastName">Last Name</label>
                  <input type="text" name="employeeLastName" id="employeeLastName"  className='employee-form ml-5'/>
              </div>
               <div className='employee-input'>
                  <label htmlFor="jobTitle">Job Title</label>
                  <input type="text" name="jobTitle" id="jobTitle"  className='employee-form ml-[36px] '/>
              </div>
               <div className='employee-input'>
                  <label htmlFor="employeeFirstName">Department</label>
                  <input type="text" name="department" id="department"  className='employee-form ml-[11px] '/>
              </div>
               <div className='employee-input '>
                  <label htmlFor="employeeFirstName">Start Date</label>
                  <input type="date" name="startDate" id="startDate"  className='employee-form ml-6 '/>
              </div>
               <div className='employee-input'>
                  <label htmlFor="salary">Salary</label>
                  <input type="number" name="salary" id="salary"  className='employee-form ml-[53px] '/>
              </div>
               <div className='employee-input'>
                  <label htmlFor="location">Location</label>
                  <input type="text" name="location" id="location"  className=' ml-[35px] employee-form'/>
              </div>
              
              
              


          </form>
              )
          }
          

          
          
    </div>
  )
}

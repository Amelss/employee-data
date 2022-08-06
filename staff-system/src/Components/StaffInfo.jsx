import React from 'react'

export default function StaffInfo({employee }) {
  return (
    <div>
      <p> <span className='font-bold'>First Name:</span>  {employee.employeeFirstName}</p>
      <p> <span className='font-bold'>Last Name: </span> {employee.employeeLastName}</p>
      <p> <span className='font-bold'>Job Title:</span>  {employee.jobTitle}</p>
      <p> <span className='font-bold'>Department:</span>  {employee.department}</p>
      <p> <span className='font-bold'>Start Date:</span>  {employee.startDate}</p>
      <p> <span className='font-bold'>Salary:</span>  {employee.salary}</p>
      <p> <span className='font-bold'>Location:</span>  {employee.location}</p>
    </div>
  );
}

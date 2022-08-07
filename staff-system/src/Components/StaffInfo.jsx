import React from 'react'


export default function StaffInfo({employee }) {
  return (
    <div>
      <div className="pl-3 block mt-2 bg-slate-100 md:flex shadow-lg rounded-lg">
        <table className="w-full">
          <thead> 
          <tr className="">
            <th className=" employee-table-head md:w-44">Name</th>
            <th className=" employee-table-head md:w-44">Job Title</th>
            <th className=" employee-table-head md:w-40">Department</th>
            <th className=" employee-table-head md:w-40">Start Date</th>
            <th className=" employee-table-head md:w-40">Salary</th>
            <th className=" employee-table-head md:w-40">Location</th>
            </tr>
          </thead>
          <thead>
          <tr>
          <td className="mx-2 pr-2 md:text-center pb-3 pt-2 text-xs md:text-lg">
            {employee.employeeFirstName} {employee.employeeLastName}
          </td>
          <td className="employee-data text-ellipsis">{employee.jobTitle} </td>
          <td className="employee-data">{employee.department} </td>
          <td className="employee-data">{employee.startDate} </td>
          <td className="employee-data">{employee.salary} </td>
            <td className="employee-data text-ellipsis">{employee.location} </td>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
}

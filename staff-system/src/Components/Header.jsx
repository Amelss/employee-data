import React, { useState } from 'react';
import { BsChevronDown, BsFilter, BsCheck } from "react-icons/bs";

export default function Header({sortBy, orderBy, onSortByChange, onOrderByChange}) {

    const [toggleMenu, setToggleMenu] = useState(false);

    const DropDown = ({ sortBy, orderBy, onSortByChange, onOrderByChange}) => {
      return (
        <div>
          {toggleMenu && (
            <div
              className="md:absolute top-30 md:mt-5 origin-top-right right-0 bg-slate-50 rounded-md shadow-lg w-60 ml-4 px-5 py-3"
              role="menu"
            >
              <div className="sort-items" role="menuitem" onClick={() => onSortByChange("employeeFirstName")}>
                <span>First Name</span> {sortBy === "employeeFirstName" && <BsCheck />}
              </div>
              <div className="sort-items" role="menuitem" onClick={() => onSortByChange("employeeLastName")}>
                <span>Last Name</span> {sortBy === "employeeLastName" && <BsCheck />}
              </div>
              <div className="sort-items" role="menuitem" onClick={() => onSortByChange("startDate")} >
                <span>Start Date</span> {sortBy === "startDate" && <BsCheck />}
              </div>
              <div
                className="sort-items border-gray-100 border-t-2 pt-2"
                role="menuitem" onClick={() => onOrderByChange("ascending")}
              >
                <span>Ascending</span> {orderBy === "ascending" && <BsCheck />}
              </div>
              <div className="sort-items" role="menuitem" onClick={() => onOrderByChange("descending")}>
                <span>Descending</span> {orderBy === "descending" && <BsCheck />}
              </div>
            </div>
          )}
        </div>
      );
    };



  return (
      <div className='text-center md:pl-8 mt-8'>
          <div className='block md:flex justify-between'>
          <h1 className='font-bold text-xl '>CaED Employee Database</h1>
          <div className='block md:flex items-center'>
              <div className='flex md:justify-end mt-6 ml-4 md:mt-0 md:px-4 md:ml-3 items-center'>
                  <button type='button' id="options-menu" aria-expanded="false" className='bg-gray-200 py-1 px-2 text-sm rounded-sm flex items-center' onClick={() => (setToggleMenu(!toggleMenu))}>
                  Sort By <BsChevronDown className='ml-1'/>
              </button>
              <button type='button' id="filter-menu" aria-expanded="false" className='bg-gray-200 py-1 px-3 text-sm rounded-sm flex items-center ml-2' >
                  Filter <BsFilter className='ml-1'/>
              </button>
              </div>
                  <DropDown
                      sortBy={sortBy}
                      onSortByChange={mySort => onSortByChange(mySort)}
                      orderBy={orderBy}
                      onOrderByChange={myOrder => onOrderByChange(myOrder) } />
          </div>
          </div>
          

    </div>
  )
}

import React, { useState } from 'react';
import { BsChevronDown, BsFilter, BsCheck } from "react-icons/bs";

export default function Header({sortBy, orderBy, onSortByChange, onOrderByChange, filterBy, onFilterByChange}) {

  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleFilter, setToggleFilter] = useState(false);

    const DropDown = ({ sortBy, orderBy, onSortByChange, onOrderByChange, filterBy, onFilterByChange}) => {
      return (
        <div>
          {toggleMenu && (
            <div
              className="md:absolute top-30 md:mt-5 origin-top-right right-0 bg-slate-50 rounded-md shadow-lg w-60 ml-4 px-5 py-3"
              role="menu"
            >
              <div className="sort-items" role="menuitem" onClick={() => onSortByChange("employeeFirstName")}>
                First Name {sortBy === "employeeFirstName" && <BsCheck />}
              </div>
              <div className="sort-items" role="menuitem" onClick={() => onSortByChange("employeeLastName")}>
                Last Name {sortBy === "employeeLastName" && <BsCheck />}
              </div>
              <div className="sort-items" role="menuitem" onClick={() => onSortByChange("startDate")} >
                Start Date {sortBy === "startDate" && <BsCheck />}
              </div>
              <div
                className="sort-items border-gray-100 border-t-2 pt-2"
                role="menuitem" onClick={() => onOrderByChange("ascending")}
              >
               Ascending {orderBy === "ascending" && <BsCheck />}
              </div>
              <div className="sort-items" role="menuitem" onClick={() => onOrderByChange("descending")}>
                Descending {orderBy === "descending" && <BsCheck />}
              </div>
            </div>
          )}
          {
            toggleFilter && (
               <div className="md:absolute top-30 md:mt-5 origin-top-right right-0 bg-slate-50 rounded-md shadow-lg w-60 ml-4 px-5 py-3"
              role="menu" >
                    <div className='sort-items' onClick={() => onFilterByChange("location")}>
                    London { filterBy === "location" &&  <BsCheck />}
                    </div>
                    <div className='sort-items' onClick={() => onFilterByChange("location")} >
                    Manchester { filterBy === "location" &&  <BsCheck />}
                    </div>
                    <div className='sort-items' onClick={() => onFilterByChange("location")}>
                    Nottingham { filterBy === "location" &&  <BsCheck />}
                    </div>
                </div>
            )
          }
               
         



        </div>
      );
    };



  return (
      <div className='text-center md:pl-8 mt-8 '>
          <div className='block md:flex justify-between'>
          <h1 className='font-bold text-xl '>CaED Employee Database</h1>
          <div className='block md:flex items-center'>
              <div className='flex md:justify-end mt-6 ml-4 md:mt-0 md:px-4 md:ml-3 items-center'>
                  <button type='button' id="options-menu" aria-expanded="false" className='bg-gray-200 py-1 px-2 text-sm rounded-sm flex items-center hover:bg-gray-300' onClick={() => (setToggleMenu(!toggleMenu))}>
                  Sort By <BsChevronDown className='ml-1'/>
              </button>
              <button type='button' id="filter-menu" aria-expanded="false" className='bg-gray-200 py-1 px-3 text-sm rounded-sm flex items-center ml-2 hover:bg-gray-300' onClick={() => (setToggleFilter(!toggleFilter))}>
                  Filter <BsFilter className='ml-1'/>
              </button>
              </div>
                  <DropDown
                      sortBy={sortBy}
                      onSortByChange={mySort => onSortByChange(mySort)}
                      orderBy={orderBy}
                      onOrderByChange={myOrder => onOrderByChange(myOrder) }
                      filterBy={filterBy}
                      onFilterByChange={mySort => onFilterByChange(mySort)} />
          </div>
          </div>
          

    </div>
  )
}

import React from 'react'
import {BsSearch} from 'react-icons/bs'
export default function Search({onQueryChange, query}) {
  return (
    <div>
      <div className="flex items-center">
        <div className="absolute px-3 pointer-events-none i">
          <BsSearch />
        </div>

        <input
        onChange={(event) => {onQueryChange(event.target.value)}}
          type="text"
          name="query"
          id="query"
          value={query}
          placeholder="Search a staff member, job title or department..."
          className="py-2 pl-9 w-56  text-xs md:w-96 rounded-md md:text-sm bg-neutral-100 placeholder:text-gray-500 text-ellipsis"
        />
      </div>
    </div>
  );
}

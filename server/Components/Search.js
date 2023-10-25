import React from 'react'
import { SearchIcon } from '@heroicons/react/outline';

function Search() {
  return (
    <div className="flex items-center justify-center py-7" data-aos="fade-up" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-once="true">
      <div className="relative w-[35rem]">
        <input
          type="text"
          placeholder="Search"
          // onChange={handleSearchTerm}
          className="rounded-lg w-full border-2 p-3 pr-10 outline-blue-600"
        />
        <button className="absolute right-3 top-3">
          <SearchIcon className="h-5 w-5 text-gray-400" />
        </button>
      </div>
      <select name="category" id="dropdown" className="rounded-md p-4 outline-none ml-4" onChange="{handleChosenCategory}">
        <option value="all" defaultValue={"all"}>All</option>
        {/* {categories.map((item) => (
          <option key={item.id}>{item.category_name}</option>
        )} */}
      </select>
    </div>
  
  )
}

export default Search

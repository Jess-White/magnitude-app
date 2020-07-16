import React from 'react'

export default function Search() {

  return (
    <div>
      <h1>Search Filter</h1>
      <form className="searchForm" >
        <input type="text" className="search" placeholder="State" />
          <ul className="suggestions">
            <li>Filter for a State</li>
          </ul>
        
      </form>
    </div>
    )
}



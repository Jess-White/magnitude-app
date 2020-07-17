import React from 'react'

export default function Search(props) {

  return (
    <div>
      <h1>Search Filter</h1>
      <form className="searchForm" >
        <input value={props.query} onChange={props.handleChange} type="text" className="search" placeholder="State" />
        <ul className="suggestions">
          <li>Filter for a State</li>
        </ul>

      </form>
    </div>
  )
}



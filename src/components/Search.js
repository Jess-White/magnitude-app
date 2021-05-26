import React from 'react'

export default function Search(props) {

  return (
    <div>
      <form align="center" >
        <input value={props.query} onChange={props.handleChange} type="text" className="search" placeholder="Search State" />
        {/* <ul className="suggestions">
          <li>Filter for a State</li>
        </ul> */}

      </form>
    </div>
  )
}



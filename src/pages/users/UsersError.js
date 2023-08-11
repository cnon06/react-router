import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
function UsersError() {
    const error = useRouteError()
    // console.log("ffgfgdg: "+error.data)
  return (
    <div>
        <h2>Error</h2>
         <p>{error.message} </p> 
        <Link to="/">Homepage</Link>
     
    </div>
  )
}

export default UsersError
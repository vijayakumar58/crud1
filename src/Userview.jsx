import React from 'react'
import { useParams } from 'react-router-dom'

function Userview() {
    const params =useParams();
     console.log (params)
  return (
    <div>{params.userid}</div>
  )
}

export default Userview
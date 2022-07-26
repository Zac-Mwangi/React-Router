import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Error() {
    const navigate = useNavigate();
  return (
    <div className='div'>
        <h2>404 Error</h2>  
        <button onClick={()=>{navigate("/")}}>GO TO HOME</button>
        </div>
  )
}

import React from 'react'
import './Line.css'
import { Link } from 'react-router-dom'

const Line = () => {
  return (
    <div className='line' >
        <div className="text">
            <h2>Hot-Selling Gadgets</h2>
        </div>
        <div className="view">
           <Link to={'./earbuds'} style={{ textDecoration: 'none', color: '#6a5cfc' }}  >View all</Link> 
        </div>
    </div>
  )
}

export default Line
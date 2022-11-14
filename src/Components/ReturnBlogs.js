import React from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css'

const ReturnBlogs = () => {
  const navigate = useNavigate()
  return (
    <button
      onClick={() => {
        navigate('/blog')
      }}
    >
      Return to Blogs Page
    </button>
  )
}

export default ReturnBlogs

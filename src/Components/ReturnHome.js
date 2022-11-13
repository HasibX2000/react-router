import React from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css'

const ReturnHome = () => {
  const navigate = useNavigate()
  return (
    <button
      onClick={() => {
        navigate('/')
      }}
    >
      Return to homepage
    </button>
  )
}

export default ReturnHome

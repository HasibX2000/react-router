import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { blogsData } from '../blogsData'
import ReturnBlogs from './ReturnBlogs'

const BlogPost = () => {
  const { title } = useParams()
  const [bodyData, setBodyData] = useState('')
  useEffect(() => {
    const blogdata = blogsData.filter((blog) => blog.title === title)
    setBodyData(blogdata[0].body)
  }, 0)
  return (
    <div>
      <h1>{title}</h1>
      <p>{bodyData.slice(0, 500)}</p>
      <p>{bodyData.slice(501, 1000)}</p>
      <p>{bodyData.slice(1001, 1500)}</p>
      <p>{bodyData.slice(1501, 2000)}</p>
      <p>{bodyData.slice(2001, 2500)}</p>
      <p>{bodyData.slice(2501, 8000)}</p>
      <ReturnBlogs />
    </div>
  )
}

export default BlogPost

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { blogsData } from '../blogsData'
import ReturnHome from './ReturnHome'
import './style.css'
const Blog = () => {
  const [blogs, setBlogs] = useState(blogsData)
  const tranculate = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + '...'
    } else {
      return num + '...'
    }
  }

  return (
    <div>
      <h1>This is our blogs page</h1>
      <section>
        {blogs.map((blog) => {
          const { id, title, body } = blog
          return (
            <article key={id}>
              <h3>{title}</h3>
              <p>{tranculate(body, 200)}</p>
              <Link to={title} className="BlogButton">
                View Blog
              </Link>
            </article>
          )
        })}
      </section>
      <ReturnHome />
    </div>
  )
}

export default Blog

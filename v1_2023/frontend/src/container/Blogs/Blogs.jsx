import React, { useEffect, useState } from 'react';
import { AiFillEye} from 'react-icons/ai';
import { motion } from 'framer-motion';


// infiles
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

import './Blogs.scss'

const Blogs = () => {
  const [activeFilter, setActiveFilter] = useState('All Blogs')
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [blogs, setBlogs] = useState([]);
  const [filterBlog, setFilterBlog] = useState([]);

  useEffect(() => {
    const query = '*[_type == "blogs"]';

    client.fetch(query).then((data) => {
      setBlogs(data);
      setFilterBlog(data);
    })
  }, [])

  const handleblogsFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterBlog(blogs);
      } else {
        setFilterBlog(blogs.filter((blog) => blog.tags.includes(item)))
      }
    }, 500)
  }

  return (
    <>
      <h2 className="head-text">
        <span>Blog: </span> Check out my collection of blog posts.
      </h2>
      <div className="app__blogs-filter">
        {['All Blogs', 'GeoAI', 'AI / ML ', "Developer's", 'Others', 'Techie'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleblogsFilter(item)}
            className={`app__blogs-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}

          </div>
        ))}
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__blogs-portfolio app__flex"
      >
        {filterBlog.map((blog, index) => (
          <div className="app__blogs-item app__flex"
            key={index}
          >
            <div className="app__blogs-img app__flex">
              <img src={urlFor(blog.imgUrl)} alt={blog.name} />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: "easeInOut", staggerChildren: 0.5 }}
                className="app__blogs-hover app_flex"
              >
                <a href={blog.blogLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>

                </a>

              </motion.div>
            </div>

            <div className="app__blogs-content app__flex">
              <h4 className="bold-text">
                {blog.title}
              </h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {blog.description}
              </p>
              <div className="app__blogs-tag app__flex" >
                <p className="p-text">{blog.tags[0]}</p>
              </div>

            </div>
          </div>
        ))}
      </motion.div>

    </>
  )
}

export default AppWrap(
  MotionWrap(Blogs, 'app__blogs'),
  'blogs',
  "app__primarybg"
);
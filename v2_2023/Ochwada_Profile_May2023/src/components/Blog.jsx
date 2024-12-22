import React, { useState } from 'react';
import { Tilt } from 'react-tilt';
import { motion, spring } from 'framer-motion';


import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { blogs } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';




const BlogCard = ({ index, name, description, date, blog_link }) => {
    return (
        <motion.div>
            <Tilt options={{ max: 30, scale: 1, speed: 100 }}
                className="bg-tertiary p-4 rounded-2xl sm:w-[360PX] w-full p-[1px] blue-text-gradient">
                <div className="mt-2">
                    <h3 className='text-black font-bold text-[16px]'>{name}</h3>
                    <p className="mt-2 text-secondary text-[12px]">
                        {description.length > 180 ? description.substring(0, 180) + "..." : description}
                    </p>
                    <p className="mt-2 text-secondary text-[10px] italic">{date}</p>
                    <button
                        onClick={() => window.open(blog_link, "_blank")}
                        className="text-black font-bold py-1 m-2 px-2 rounded text-[12px] border border-gray-200 hover:border-blue-400 transition-colors duration-300">
                        <p>READ MORE ...</p>
                    </button>
                </div>
            </Tilt>
        </motion.div>
    )
}

const Blog = () => {

    const [loadmore, setLoadmore] = useState(false)

    const loadMore = () => {
        setLoadmore(true)
    }

    const displayData = loadmore ? blogs : blogs.slice(0, 6) //display only 3 data
    //console.log(displayData)
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} `}>What I have written</p>
                <h2 className={`${styles.sectionHeadText}`}>Blogging.</h2>
            </motion.div>

            <div className='mt-20 flex flex-wrap gap-5 justify-between'>
                {displayData.map((blog, index) => (
                    <BlogCard key={`blog-${index}`} index={index} {...blog} />
                ))}
            </div>
            <div className='mt-10 gap-5 flex flex-col items-center'>
                <button className=" uppercase text-xs violet-gradient hover:bg-blue-500 text-white  py-2 px-2 border-b-4 border-blue-700 hover:border-blue-400 rounded" onClick={loadMore} >
                    Load More Blogs
                </button>
            </div>

        </>
    )
}


export default SectionWrapper(Blog, "blogs")
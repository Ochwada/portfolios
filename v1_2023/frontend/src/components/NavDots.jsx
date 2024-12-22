import React from 'react'


const NavDots = ({ active }) => {
    return (
        <div className='app__navigation'>
            {['home', 'about', 'work', 'skills', 'blogs','contact'].map(
                (item, index) => (

                <a
                    href={`#${item}`}
                    key={item + index}
                    className="app__navigation-dot"
                    style={active === item ? { backgroundColor: '#ff3092' } : {}}
                >
                </a>

            ))}
        </div>
    )
}

export default NavDots;
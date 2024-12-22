import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { socialMedia } from '../constants'; // assuming you have this
import { fadeIn, textVariant } from '../utils/motion';

const SocialMediaCard = ({ index, icon, link, name }) => {
    return (
        <motion.div variants={fadeIn("down", "spring", index * 0.5, 0.75)}>
            <Tilt options={{ max: 45, scale: 1, speed: 450 }}
                className="bg-tertiary p-3 rounded-full w-full green-pink-gradient flex justify-center items-center ">
                    <div
                        onClick={() => window.open(link, "_blank")}
                        className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                    >
                        <img
                            src={icon}
                            alt={name}
                            className="w-1/2 h-1/2 object-contain"
                        />
                        
                    </div>
                <p className="px-1 text-gray-800 text-[14px]">{name}</p>
               
            </Tilt>
        </motion.div>
    )
}

const SocialMedia = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} `}>Find me Online</p>
                <h2 className={`${styles.sectionHeadText}`}>Social Media.</h2>
            </motion.div>

            <div className='mt-20 flex flex-wrap gap-7  justify-center items-center '>
                {socialMedia.map((media, index) => (
                    <SocialMediaCard key={`media-${index}`} index={index} {...media} />
                ))}
            </div>
        </>
    )
}

export default SectionWrapper(SocialMedia, "")
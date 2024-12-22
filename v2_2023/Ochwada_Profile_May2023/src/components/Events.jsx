import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { events } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const EventCard = ({ index, title, date, topic, link }) => {
    return (

        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <table className="table-fixed w-full mt-  border-gray-800">
                <tbody>
                    <tr className="text-left border-b border-gray-800">
                        <td className="px-2 py-2 text-secondary font-bold text-[12px]">{date}</td>
                        <td className="w-1/4 text-left px-2 py-2 text-white text-[12px]">{title}</td>
                        <td className="w-1/2 px-2 py-2 text-secondary text-[12px]">{topic}</td>
                        <td className="px-2 py-2 text-blue-500 hover:text-blue-700 text-[12px]">
                            <a href={link} target="_blank" rel="noopener noreferrer">Event Link</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </motion.div>
    )
}

const Events = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} `}>Events I have participated in</p>
                <h2 className={`${styles.sectionHeadText}`}>Events.</h2>
            </motion.div>

            <div className='mt-20 flex flex-wrap gap-5 justify-between'>
                <div>
                    <h3>PANEL DISCUSSIONS & SPEAKER (In Person)</h3>
                    {events.panelDiscussions.map((event, index) => (
                        <EventCard key={`event-${index}`} index={index} {...event} />
                    ))}
                </div>

                <div>
                    <h3>PANEL DISCUSSIONS & SPEAKER (Virtual)</h3>
                    {events.virtualEvents.map((event, index) => (
                        <EventCard key={`event-${index}`} index={index} {...event} />
                    ))}
                </div>

                <div>
                    <h3>ROUNDTABLE DISCUSSIONS</h3>
                    {events.roundTableDiscussions.map((event, index) => (
                        <EventCard key={`event-${index}`} index={index} {...event} />
                    ))}
                </div>

                <div>
                    <h3>PODCAST</h3>
                    {events.podcast.map((event, index) => (
                        <EventCard key={`event-${index}`} index={index} {...event} />
                    ))}
                </div>

                <div>
                    <h3>HOSTED WORKSHOPS</h3>
                    {events.hostedWorkshops.map((event, index) => (
                        <EventCard key={`event-${index}`} index={index} {...event} />
                    ))}
                </div>

                <div>
                    <h3>PRESS (INTERVIEW)</h3>
                    {events.pressInterview.map((event, index) => (
                        <EventCard key={`event-${index}`} index={index} {...event} />
                    ))}
                </div>

                <div>
                    <h3>PRESS (NEWSPAPERS)</h3>
                    {events.pressNewspapers.map((event, index) => (
                        <EventCard key={`event-${index}`} index={index} {...event} />
                    ))}
                </div>

                <div>
                    <h3>PRESS ( MENTIONS / CELEBRATED)</h3>
                    {events.pressMentions.map((event, index) => (
                        <EventCard key={`event-${index}`} index={index} {...event} />
                    ))}
                </div>

                <div>
                    <h3>PRODUCT PRESENTATION</h3>
                    {events.productPresentation.map((event, index) => (
                        <EventCard key={`event-${index}`} index={index} {...event} />
                    ))}
                </div>

                
            </div>
        </>
    )
}

export default SectionWrapper(Events, "events")
import { testimonialsData } from '../../data/testimonialsData.js'
import { useState } from 'react'
import { motion } from 'framer-motion'
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'
import './Testimonials.css'

const Testimonials = () => {
    const transition = { type: 'spring', duration: 3 }
    const [selected, setSelected] = useState(0)
    const tLenght = testimonialsData.length

    return (
        <div className="Testimonials" id="testimonials">
            <div className="left-t">
                <span>Отзывы</span>
                <span className="stroke-text">моих клиентов</span>
                <span>которые говорят сами за себя</span>
                <motion.span
                    key={selected}
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 100 }}
                    transition={transition}
                >
                    {testimonialsData[selected].review}
                </motion.span>
                <span className="left-t__client" style={{ color: 'white' }}>
                    <span className="left-t__name">
                        {testimonialsData[selected].name}
                    </span>{' '}
                    - {testimonialsData[selected].status}
                </span>
            </div>
            <div className="right-t">
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ ...transition, duration: 2 }}
                    whileInView={{ opacity: 1, x: 0 }}
                ></motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ ...transition, duration: 2 }}
                    whileInView={{ opacity: 1, x: 0 }}
                ></motion.div>
                <motion.img
                    key={selected}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={transition}
                    src={testimonialsData[selected].image}
                    alt="Подопечный"
                />
                <div className="arrows">
                    <img
                        onClick={() => {
                            selected === 0
                                ? setSelected(tLenght - 1)
                                : setSelected((prev) => prev - 1)
                        }}
                        src={leftArrow}
                        alt="Стрелочка влево"
                    />
                    <img
                        onClick={() => {
                            selected === tLenght - 1
                                ? setSelected(0)
                                : setSelected((prev) => prev + 1)
                        }}
                        src={rightArrow}
                        alt="Стрелочка вправо "
                    />
                </div>
            </div>
        </div>
    )
}

export default Testimonials

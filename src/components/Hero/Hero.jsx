import { useCallback } from 'react'
import { motion } from 'framer-motion'
import NumberCounter from 'number-counter'
import { Link } from 'react-scroll'
import Header from '../Header/Header'
import Heart from '../../assets/heart.png'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Calories from '../../assets/calories.png'
import './Hero.css'

const Hero = () => {
    const transition = { type: 'spring', duration: 3 }
    const mobile = window.innerWidth <= 768 ? true : false

    const handleConsultationClick = useCallback(() => {
        window.open('https://t.me/Aleksey_Tigay', '_blank')
    }, [])

    return (
        <div className="hero" id="home">
            <div className="blur hero-blur"></div>
            <div className="left-h">
                <Header />
                {/* the best ad */}
                <div className="the-best-ad">
                    <motion.div
                        initial={{ left: mobile ? '160px' : '238px' }}
                        whileInView={{ left: '8px' }}
                        transition={{ ...transition, duration: 2.3 }}
                    ></motion.div>
                    <span>Лучший фитнес тренер в городе</span>
                </div>
                {/* hero heading */}
                <div className="hero-text">
                    <div>
                        <span className="stroke-text">Сделай </span>
                        <span>Свое</span>
                    </div>
                    <div>
                        <span>Идеальное тело</span>
                    </div>
                    <div>
                        <span className="hero-text-info">
                            Я помогу вам сформировать и построить идеальное
                            тело, жить и наслаждаться полной жизнью.
                        </span>
                    </div>
                </div>
                {/* figures */}
                <div className="figures">
                    <div>
                        <span>
                            <NumberCounter
                                end={40}
                                start={15}
                                delay="4"
                                postFix="+"
                            />
                        </span>
                        <span>клиентов</span>
                    </div>
                    <div>
                        <span>
                            <NumberCounter
                                end={100}
                                start={77}
                                delay="4"
                                postFix="+"
                            />
                        </span>
                        <span>людей уже попробовали на себе</span>
                    </div>
                    <div>
                        <span>
                            <NumberCounter
                                end={30}
                                start={11}
                                delay="4"
                                postFix="+"
                            />
                        </span>
                        <span>программ тренировок</span>
                    </div>
                </div>

                {/* hero buttons */}
                <div className="hero-buttons">
                    <button className="btn">
                        <Link to="join-us" smooth={true}>
                            Попробовать
                        </Link>
                    </button>
                    <button className="btn">
                        <Link to="reasons" smooth={true}>
                            Узнать больше
                        </Link>
                    </button>
                </div>
            </div>
            <div className="right-h">
                <button className="btn" onClick={handleConsultationClick}>
                    Консультация
                </button>

                <motion.div
                    whileInView={{ left: mobile ? '2.5rem' : '10rem' }}
                    transition={{ ...transition }}
                    className="heart-rate"
                >
                    <img src={Heart} alt="Иконка сердца" />
                    <span>Пульс</span>
                    <span>128 bpm</span>
                </motion.div>

                {/* hero images */}
                <img
                    src={hero_image}
                    alt="Алексей Тигай"
                    className="hero-image"
                />
                <motion.img
                    initial={{ right: '19rem' }}
                    whileInView={{ right: '28rem' }}
                    transition={{ ...transition }}
                    src={hero_image_back}
                    alt="Полоски на заднем фоне"
                    className="hero-image-back"
                />

                {/* calories */}
                <motion.div
                    initial={{
                        left: mobile ? '0rem' : '-45rem',
                        top: mobile ? '4.8rem' : '43.5rem',
                    }}
                    whileInView={{
                        left: mobile ? '5.4rem' : '-35rem',
                        top: mobile ? '4.8rem' : '43.5rem',
                    }}
                    transition={{ ...transition }}
                    className="calories"
                >
                    <img src={Calories} alt="Calories" />
                    <div>
                        <span>Сожжено калорий</span>
                        <span>1220 kcal</span>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Hero

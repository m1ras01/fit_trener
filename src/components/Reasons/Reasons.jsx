import './Reasons.css'
import image1 from '../../assets/image1.jpg'
import image2 from '../../assets/image2.jpg'
import image3 from '../../assets/image3.jpg'
import image4 from '../../assets/image4.jpg'
import tick from '../../assets/tick.png'
import fitnessFormula from '../../assets/fitnessFormula.png'
import MkSport from '../../assets/mk-sport.png'

const Reasons = () => {
    return (
        <div className="Reasons" id="reasons">
            <div className="left-r">
                <img src={image1} alt="Спортсмен с блином в руках" />
                <img src={image2} alt="Training images force" />
                <img src={image3} alt="Руки с гантелей" />
                <img src={image4} alt="Спортсмен с тренажером" />
            </div>
            <div className="right-r">
                <span>причины</span>
                <div>
                    <span className="stroke-text">почему </span>
                    <span>выбирают меня?</span>
                </div>
                <div className="details-r">
                    <div>
                        <img src={tick} alt="Галочка 1"></img>
                        <span>БОЛЕЕ 100+ ДОВОЛЬНЫХ КЛИЕНТОВ</span>
                    </div>
                    <div>
                        <img src={tick} alt="Галочка 4" />
                        <span>Мастер спорта международного класса</span>
                    </div>
                    <div>
                        <img src={tick} alt="Галочка 4" />
                        <span>
                            Абсолютный чемпион дальнего востока по пауэрлифтингу
                        </span>
                    </div>
                    <div>
                        <img src={tick} alt="Галочка 4" />
                        <span>
                            Чемпион дальнего востока по силовому экстриму
                        </span>
                    </div>
                    <div>
                        <img src={tick} alt="Галочка 3" />
                        <span>
                            Воспитал трёх мастеров спорта, 5 кмс и более 10
                            разрядников
                        </span>
                    </div>
                    <div>
                        <img src={tick} alt="Галочка 2" />
                        <span>
                            ДОСТИГАЙТЕ РЕЗУЛЬТАТОВ УМНЕЕ И БЫСТРЕЕ, ЧЕМ РАНЬШЕ
                        </span>
                    </div>
                </div>
                <span
                    style={{
                        color: 'var(--gray)',
                        fontWeight: 'normal',
                    }}
                >
                    МОИ ПАРТНЁРЫ
                </span>
                <div className="partners">
                    <img src={fitnessFormula} alt="Фитнес формула" />
                    <img src={MkSport} alt="МК-СПОРТ" />
                </div>
            </div>
        </div>
    )
}

export default Reasons

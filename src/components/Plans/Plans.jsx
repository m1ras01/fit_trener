import { useCallback } from 'react'
import { plansData } from '../../data/plansData.js'
import whiteTick from '../../assets/whiteTick.png'
import './Plans.css'

const Plans = () => {
    const handleTelegramClick = useCallback(() => {
        window.open('https://t.me/Aleksey_Tigay', '_blank')
    }, [])

    return (
        <div className="plans-container">
            <div className="blur plans-blur-1"></div>
            <div className="blur plans-blur-2"></div>
            <div className="programs-header" style={{ gap: '2rem' }}>
                <span className="stroke-text">ГОТОВЫ НАЧАТЬ</span>
                <span>СВОЮ ТРАНСФОРМАЦИЮ</span>
                <span className="stroke-text">ВМЕСТЕ СО МНОЙ</span>
            </div>

            {/* plans card */}

            <div className="plans" id="plans">
                {plansData.map((plan, i) => (
                    <div className="plan" key={i}>
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span>&#8381; {plan.price}</span>

                        <div className="features">
                            {plan.features.map((feature, i) => (
                                <div className="feature" key={i}>
                                    <img
                                        src={whiteTick}
                                        alt="Иконки плана тренировок"
                                    />
                                    <span key={i}>{feature}</span>
                                </div>
                            ))}
                        </div>
                        <div>
                            <span>Еще больше преимуществ -></span>
                        </div>
                        <button className="btn" onClick={handleTelegramClick}>
                            Узнать детали
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Plans

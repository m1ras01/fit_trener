import { useCallback } from 'react'
import './Join.css'

const Join = () => {
    const handleConsultationClick = useCallback(() => {
        window.open('https://t.me/Aleksey_Tigay', '_blank')
    }, [])

    return (
        <div className="Join" id="join-us">
            <div className="left-j">
                <hr />
                <div>
                    <span className="stroke-text">Прокачай</span>
                    <span>свое тело</span>
                </div>
                <div>
                    <span>вместе</span>
                    <span className="stroke-text">со мной!</span>
                </div>
            </div>
            <div className="right-j">
                <button className="btn btn-j" onClick={handleConsultationClick}>
                    Консультация
                </button>
            </div>
        </div>
    )
}

export default Join

import { Link } from 'react-scroll'
import { programsData } from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'
import './Programs.css'

const Programs = () => {
    return (
        <div className="Programs" id="programs">
            {/* header */}

            <div className="programs-header">
                <span className="stroke-text">Изучи</span>
                <span>Программы</span>
                <span className="stroke-text">для тренировок</span>
            </div>

            <div className="program-categories">
                {programsData.map((program, i) => (
                    <div className="category" key={i}>
                        {program.image}
                        <span>{program.heading}</span>
                        <span>{program.details}</span>
                        <div className="join-now">
                            <span>
                                <Link to="join-us" smooth={true}>
                                    Присоединиться сейчас
                                </Link>
                            </span>
                            <img src={RightArrow} alt="Right arrow" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Programs

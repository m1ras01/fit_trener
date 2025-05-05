import { Link } from 'react-scroll'
import { useState } from 'react'
import Logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
import './Header.css'

const Header = () => {
    const mobile = window.innerWidth <= 768 ? true : false
    const [menuOpened, setMenuOpened] = useState(false)

    return (
        <div className="header">
            <img src={Logo} alt="Logo" className="logo" />
            {menuOpened === false && mobile === true ? (
                <div
                    style={{
                        backgroundColor: 'var(--appColor)',
                        padding: '0.5rem',
                        borderRadius: '5px',
                    }}
                    onClick={() => setMenuOpened(true)}
                >
                    <img
                        src={Bars}
                        alt="Кнопка меню"
                        style={{ width: '1.5rem', height: '1.5rem' }}
                    />
                </div>
            ) : (
                <ul className="header-menu">
                    <li>
                        <Link
                            onClick={() => setMenuOpened(false)}
                            to="home"
                            smooth={true}
                        >
                            Главная
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={() => setMenuOpened(false)}
                            to="programs"
                            smooth={true}
                        >
                            Программа
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={() => setMenuOpened(false)}
                            to="reasons"
                            smooth={true}
                        >
                            Почему я
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={() => setMenuOpened(false)}
                            to="plans"
                            smooth={true}
                        >
                            Планы тренировок
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={() => setMenuOpened(false)}
                            to="testimonials"
                            smooth={true}
                        >
                            Отзывы
                        </Link>
                    </li>
                </ul>
            )}
        </div>
    )
}

export default Header

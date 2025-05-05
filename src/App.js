import { Helmet } from 'react-helmet'
import { useState, useEffect } from 'react'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Join from './components/Join/Join'
import Plans from './components/Plans/Plans'
import Programs from './components/Programs/Programs'
import Reasons from './components/Reasons/Reasons'
import Testimonials from './components/Testimonials/Testimonials'
import './App.css'

function App() {
    const [cookieConsent, setCookieConsent] = useState(
        localStorage.getItem('cookieConsent') === 'true'
    )

    useEffect(() => {
        localStorage.setItem('cookieConsent', cookieConsent)
    }, [cookieConsent])

    const handleAcceptCookies = () => {
        setCookieConsent(true)
    }

    const handleOpenDocument = (path) => {
        window.open(path, '_blank')
    }

    return (
        <div className="App">
            <Helmet>
                <title>Алексей Тигай | Персональный тренер</title>
                <meta
                    name="description"
                    content="Алексей Тигай - профессиональный, персональный тренер в Хабаровск. Индивидуальные программы тренировок, питания и диета. Запишитесь на первую тренировку уже сегодня!. Фитнес в Хабаровске. МК-Спорт. Спортзал."
                />
                <meta
                    name="keywords"
                    content="Персональный тренер, Алексей Тигай, Хабаровск, Фитнес, МК-Спорт, Спортзал"
                />
                <meta
                    property="og:title"
                    content="Алексей Тигай | Персональный тренер"
                />
                <meta
                    property="og:description"
                    content="Алексей Тигай - профессиональный, персональный тренер в Хабаровск. Индивидуальные программы тренировок, питания и диета. Запишитесь на первую тренировку уже сегодня!. Фитнес в Хабаровске. МК-Спорт. Спортзал."
                />
                <meta property="og:image" content="./assets/logo.png" />
            </Helmet>
            <Hero />
            <Programs />
            <Reasons />
            <Plans />
            <Testimonials />
            <Join />
            <Footer />

            {!cookieConsent && (
                <div className="cookie-consent">
                    <div className="cookie-content">
                        <p>
                            Мы используем файлы cookie и аналогичные технологии
                            для улучшения работы сайта. Продолжая использовать
                            сайт, вы соглашаетесь с
                            <span
                                onClick={() =>
                                    handleOpenDocument(
                                        '/documents/privacy-policy.html'
                                    )
                                }
                            >
                                {' '}
                                Политикой конфиденциальности{' '}
                            </span>
                            и{' '}
                            <span
                                onClick={() =>
                                    handleOpenDocument(
                                        '/documents/cookie-policy.html'
                                    )
                                }
                            >
                                {' '}
                                Политикой использования cookie
                            </span>
                            .
                        </p>
                        <button className="btn" onClick={handleAcceptCookies}>
                            Принять
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default App

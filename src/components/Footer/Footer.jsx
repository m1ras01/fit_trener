import { useCallback } from 'react'
import { FaTelegram } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io'
import { MdEmail } from 'react-icons/md'
import { PiYoutubeLogoFill } from 'react-icons/pi'
import Logo from '../../assets/logo.png'
import './Footer.css'

const Footer = () => {
    const handleTelegramLink = useCallback(() => {
        window.open('https://t.me/+W16ZsCO2ZeQyNTVi', '_blank')
    }, [])

    const handleYoutubeLink = useCallback(() => {
        window.open('https://www.youtube.com', '_blank')
    }, [])

    const handleEmailLink = useCallback(() => {
        window.open('mailto:enjoy_hill@mail.ru', '_blank')
    }, [])

    const handleWhatsAppLink = useCallback(() => {
        window.open('https://wa.me/87054670838', '_blank')
    }, [])

    const handleDocumentLink = useCallback((documentPath) => {
        window.open(documentPath, '_blank')
    }, [])

    return (
        <div className="Footer-container">
            <hr />
            <div className="footer">
                <div className="social-links">
                    <PiYoutubeLogoFill
                        className="youtube-channel"
                        size={50}
                        onClick={handleYoutubeLink}
                    />

                    <FaTelegram
                        className="telegram-icon"
                        size={50}
                        onClick={handleTelegramLink}
                    />
                    <IoLogoWhatsapp
                        className="whatsapp-icon"
                        size={50}
                        onClick={handleWhatsAppLink}
                    />
                    <MdEmail
                        className="email-icon"
                        size={50}
                        onClick={handleEmailLink}
                    />
                </div>
                <div className="logo-f">
                    <img src={Logo} alt="Footer logo icon" />
                </div>
            </div>

            <div className="legal-documents">
                <p>© 2025 Алексей Тигай. Персональный тренер.</p>
                <div className="legal-links">
                    <span
                        onClick={() =>
                            handleDocumentLink('/documents/user-agreement.html')
                        }
                    >
                        Пользовательское соглашение
                    </span>
                    <span
                        onClick={() =>
                            handleDocumentLink('/documents/privacy-policy.html')
                        }
                    >
                        Политика конфиденциальности
                    </span>
                    <span
                        onClick={() =>
                            handleDocumentLink('/documents/cookie-policy.html')
                        }
                    >
                        Политика использования cookie
                    </span>
                </div>
            </div>

            <div className="blur footer-blur-1"></div>
            <div className="blur footer-blur-2"></div>
        </div>
    )
}

export default Footer

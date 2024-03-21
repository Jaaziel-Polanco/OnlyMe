import React from 'react'
import Me from './assets/yo.jpg'

const Jaaziel = () => {
    return (
        <div className="cardJaaziel w-[280px] h-[280px] animate-flip-down animate-once animate-ease-in-out">
            <button className="mail">
                <a href="mailto:jaazielmartinez09@gmail.com"> <svg
                    className="lucide lucide-mail"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                    height="24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect rx="2" y="4" x="2" height="16" width="20" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg></a>
            </button>
            <div className="profile-pic">
                <img src={Me} alt="" />
            </div>
            <div className="bottom">
                <div className="content">
                    <span className="name">Jaaziel Polanco</span>
                    <span className="about-me">
                        Frontend Developer (Reactjs,Tailwindcss) and UI/UX
                    </span>
                </div>
                <div className="bottom-bottom">
                    <div className="social-links-container">
                        <a href="https://www.instagram.com/jaaziel_polanco?igsh=MTR3b2EzMWluZHZucQ%3D%3D&utm_source=qr"> <svg
                            viewBox="0 0 16 15.999"
                            height="15.999"
                            width="16"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                transform="translate(6 598)"
                                d="M6-582H-2a4,4,0,0,1-4-4v-8a4,4,0,0,1,4-4H6a4,4,0,0,1,4,4v8A4,4,0,0,1,6-582ZM2-594a4,4,0,0,0-4,4,4,4,0,0,0,4,4,4,4,0,0,0,4-4A4.005,4.005,0,0,0,2-594Zm4.5-2a1,1,0,0,0-1,1,1,1,0,0,0,1,1,1,1,0,0,0,1-1A1,1,0,0,0,6.5-596ZM2-587.5A2.5,2.5,0,0,1-.5-590,2.5,2.5,0,0,1,2-592.5,2.5,2.5,0,0,1,4.5-590,2.5,2.5,0,0,1,2-587.5Z"
                                data-name="Subtraction 4"
                                id="Subtraction_4" />
                        </svg></a>
                        <a href="https://www.linkedin.com/in/jaaziel-sebasti%C3%A1n-polanco-martinez-63a851288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100.3 480H7.4V180.9h92.9V480zM53.8 133.7c-31.2 0-56.4-25.3-56.4-56.4 0-31.1 25.2-56.4 56.4-56.4s56.4 25.3 56.4 56.4c-.1 31.1-25.3 56.4-56.4 56.4zm394.2 346.3h-92.8V312c0-40-1.4-91.5-55.7-91.5-55.7 0-64.2 43.6-64.2 88.6v171H143.6V180.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.4 61.9 111.4 142.3v164.3h-.1z" />
                        </svg></a>

                        <a href="https://github.com/Jaaziel-Polanco"><svg viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg">
                            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                        </svg></a>
                    </div>
                    <a href="https://wa.me/18299424252"><button className="button">Contact Me</button></a>
                </div>
            </div>
        </div>

    )
}

export default Jaaziel

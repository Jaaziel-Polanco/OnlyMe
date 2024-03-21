import React from 'react'
import { useState } from 'react';



function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className='flex justify-center items-center px-5 py-8 rounded-xl w-72 h-40 animate-flip-up animate-once animate-ease-in-out'>
                <button className='boton animate-wiggle animate-infinite animate-ease-in-out' type="button" onClick={() => setIsOpen(!isOpen)}>
                    Pulsa mi botoncito
                    <div id="clip">
                        <div id="leftTop" className="corner"></div>
                        <div id="rightBottom" className="corner"></div>
                        <div id="rightTop" className="corner"></div>
                        <div id="leftBottom" className="corner"></div>
                    </div>
                    <span id="rightArrow" className="arrow"></span>
                    <span id="leftArrow" className="arrow"></span>
                </button>
            </div>
            {isOpen ? (
                <div className="fixed rounded-3xl w-3/4 h-3/6 lg:w-1/4 lg:h-2/4 shadow-lg bg-transparent bg-opacity-100 backdrop-blur-lg text-yellow-50 z-10 animate-jump-in animate-ease-in-out">
                    <button className='right-5 absolute mt-3 font-bold text-2xl hover:text-3xl transition-all' type="button" onClick={() => setIsOpen(!isOpen)}>
                        X
                    </button>
                    <div className="navMenu py-1 w-full h-fit mt-16 flex flex-col justify-center text-center text-xl font-mono font-semibold" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        Holaaaaaa mi nombre es Jaaziel y soy un desarrollador "Frontend",
                        un poco novato pero siempre aprendiendo 😁😁
                        <p className='text-[12px] mt-10 font-serif font-extrabold animate-bounce animate-infinite animate-ease-in-out'>PostData: Necesito empleo 😢😢</p>
                        <a href='https://paypal.me/jaazi01?country.x=DO&locale.x=es_XC' className='text-[12px] mt-10 font-serif bg-red-700 rounded-full font-extrabold animate-bounce animate-infinite animate-ease-in-out'>No presiones aqui</a>
                    </div>

                </div>
            ) : null}
        </>
    )
}

export default Nav

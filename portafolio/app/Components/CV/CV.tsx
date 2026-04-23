import React from 'react';
import style from "./CV.module.css"
import Link from 'next/link';

export default function CV() {
    return (
        <> <section className={style.cv} id="cv">
            <div className={`container ${style.cv__container}`}>
                <div className={style.cv__content}>
                    <div className={style.cv__info}>
                        <span className={style.section__subtitle}>Conoce mi trayectoria</span>
                        <h2 className={style.section__title}>Mi Currículum</h2>
                        <p className={style.cv__description}>
                            Descarga mi CV para conocer mi formación académica, habilidades 
                            técnicas y experiencia. También puedes conectar conmigo en mis 
                            redes profesionales.
                        </p>
                        
                        <div className={style.cv__buttons}>
                            <Link href="https://www.overleaf.com/gallery/tagged/cv" className={style.btn + " " + style["btn--primary"] + " " + style["btn--large"]}>
                                <i className={style["fas fa-download"]}></i> Descargar CV
                            </Link>
                            <Link href="#" className={style.btn + " " + style["btn--secondary"] + " " + style["btn--large"]}>
                                <i className={style["fas fa-eye"]}></i> Ver CV Digital
                            </Link>
                        </div>
                    </div>
                    
                    <div className={style.cv__social}>
                        <h3 className={style.cv__social_title}>Conectemos</h3>
                        <div className={style.cv__social_links}>
                            <Link href="https://linkedin.com/in/estefani-lira-53764a3b1" target="_blank" rel="noopener noreferrer" className={style.social__card}>
                                <div className={style.social__icon + " " + style["social__icon--linkedin"]}>
                                    <i className="fab fa-linkedin-in"></i>
                                </div>
                                <div className={style.social__info}>
                                    <span className={style.social__name}>LinkedIn</span>
                                    <span className={style.social__user}>@estefani lira</span>
                                </div>
                                <i className={style["fas fa-arrow-right"] + " " + style.social__arrow}></i>
                            </Link>

                            <Link href="https://github.com/EstefaniDL" target="_blank" rel="noopener noreferrer" className={style.social__card}>
                                <div className={style.social__icon + " " + style["social__icon--github"]}>
                                    <i className="fab fa-github"></i>
                                </div>
                                <div className={style.social__info}>
                                    <span className={style.social__name}>GitHub</span>
                                    <span className={style.social__user}>@EstefaniDL</span>
                                </div>
                                <i className={style["fas fa-arrow-right"] + " " + style.social__arrow}></i>
                            </Link>
                            
                            <Link href="mailto:estefaniemdl@gmail.com" className={style.social__card}>
                                <div className={style.social__icon + " " + style["social__icon--email"]}>
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div className={style.social__info}>
                                    <span className={style.social__name}>Email</span>
                                    <span className={style.social__user}>estefaniemdl@gmail.com</span>
                                </div>
                                <i className={style["fas fa-arrow-right"] + " " + style.social__arrow}></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section> </>
    );
}
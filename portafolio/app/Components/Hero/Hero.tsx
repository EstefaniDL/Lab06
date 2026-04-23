import React from 'react';
import styles from "./Hero.module.css";
import Link from 'next/link';

let HeroData: String = 'Estefani Michalle Dominguez Lira'
let HeroSubtitle: String = 'Lic. en Matemáticas Aplicadas y Computación en Crecimiento'
let HeroDescription: String = 'Estudiante de desarrollo de software interesada en desarrollo web, bases de datos y tecnología.'

export default function Hero() {
    return ( 
         <section className={`${styles.hero} section`} id="home">
            <div className={`container ${styles.hero__container}`}>
                 <div className={styles.hero__content}>
                    <span className={styles.hero__greeting}>¡Hola! 👋 Soy</span>

                    <h1 className={styles.hero__title}>
                        {HeroData}</h1>

                    <h2 className={styles.hero__subtitle}>
                        <span className={styles.highlight}>{HeroSubtitle}</span>
                    </h2>
                    <p className={styles.hero__description}>
                        {HeroDescription}
                    </p>

                    <div className={styles.hero__buttons}>
                        <Link href="#projects" className={styles.btn + " " + styles["btn--primary"]}>
                            <i className="fas fa-rocket"></i>  Ver mis proyectos
                        </Link>

                        <Link href="#contact" className={styles.btn + " " + styles["btn--outline"]}>
                            <i className="fas fa-envelope"></i> Contáctame
                        </Link>
                    </div>
                </div>
                
                <div className={styles.hero__image}>
                    <div className={styles.hero__blob}>
                        <div className={styles.hero__avatar}>
                            <i className="fas fa-user-astronaut"></i>
                        </div>
                    </div>
                    <div className={styles.hero__decoration + " " + styles["hero__decoration--1"]}></div>
                    <div className={styles.hero__decoration + " " + styles["hero__decoration--2"]}></div>
                    <div className={styles.hero__decoration + " " + styles["hero__decoration--3"]}></div>
                </div>
            </div>
            
            <div className={styles.hero__scroll}>
                <Link href="#interests" className={styles.hero__scrollLink}>
                    <span>Scroll</span>
                </Link>
            </div>
        </section>
    );
}
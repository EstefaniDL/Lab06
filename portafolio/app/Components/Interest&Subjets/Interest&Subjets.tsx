import React from 'react';
import styles from "./Interest&Subjets.module.css"

export default function InterestSubjets() {
    return (
         <section className={`${styles.interests} section`} id="interests">
            <div className="container">
                <div className="section__header">
                    <span className="section__subtitle">Lo que me apasiona</span>
                    <h2 className="section__title">Intereses & Especialidades</h2>
                    <p className="section__description">
                        Áreas tecnológicas que me entusiasman y en las que busco especializarme
                    </p>
                </div>
                
                <div className={styles.interests__grid}>
                    
                    <article className={styles.interest__card}>
                        <div className={styles.card__icon}>
                        <i className="fas fa-code"></i>    
                        </div>
                        <h3 className={styles.card__title}>Desarrollo Web</h3>
                        <p className={styles.card__description}>
                            Aprender a crear aplicaciones web modernas usando HTML, CSS, JavaScript y herramientas actuales.
                        </p>
                        <div className={styles.card__tags}>
                            <span className={styles.tag}>HTML/CSS</span>
                            <span className={styles.tag}>JavaScript</span>
                            <span className={styles.tag}>Python</span>
                        </div>
                    </article>
                    
                    <article className={styles.interest__card}>
                        <div className={styles.card__icon}>
                            <i className="fas fa-robot"></i>
                        </div>
                        <h3 className={styles.card__title}>Programación</h3>
                        <p className={styles.card__description}>
                            Resolver problemas mediante algoritmos y estructuras de datos utilizando diferentes lenguajes de programación.
                        </p>
                        <div className={styles.card__tags}>
                            <span className={styles.tag}>C</span>
                            <span className={styles.tag}>Java</span>
                            <span className={styles.tag}>C++</span>
                        </div>
                    </article>
                    
                    <article className={styles.interest__card}>
                        <div className={styles.card__icon}>
                            <i className="fas fa-brain"></i>
                        </div>
                        <h3 className={styles.card__title}>Inteligencia Artificial</h3>
                        <p className={styles.card__description}>
                            Interés en aprender cómo aplicar modelos de inteligencia artificial y machine learning para resolver problemas y automatizar procesos.
                        </p>
                        <div className={styles.card__tags}>
                            <span className={styles.tag}>ChatGPT</span>
                            <span className={styles.tag}>NotebookLM</span>
                            <span className={styles.tag}>Gemini</span>
                        </div>
                    </article>
                    
                    <article className={styles.interest__card}>
                        <div className={styles.card__icon}>
                            <i className="fas fa-database"></i>
                        </div>
                        <h3 className={styles.card__title}>Bases de Datos</h3>
                        <p className={styles.card__description}>
                            Diseñar y gestionar bases de datos eficientes utilizando MySQL y otras tecnologías de almacenamiento.
                        </p>
                        <div className={styles.card__tags}>
                            <span className={styles.tag}>MySQL</span>
                            <span className={styles.tag}>PostgreSQL</span>
                        </div>
                    </article>
                    
                    <article className={styles.interest__card}>
                        <div className={styles.card__icon}>
                            <i className="fas fa-microchip"></i>
                        </div>
                        <h3 className={styles.card__title}>Tecnología e innovación</h3>
                        <p className={styles.card__description}>
                            Explorar nuevas herramientas tecnológicas como inteligencia artificial y desarrollo de software moderno.
                        </p>
                        <div className={styles.card__tags}>
                            <span className={styles.tag}>Node.js</span>
                            <span className={styles.tag}>React Native</span>
                            <span className={styles.tag}>Go</span>
                            <span className={styles.tag}>PostgreSQL</span>
                        </div>
                    </article>
                    
                    <article className={styles.interest__card}>
                        <div className={styles.card__icon}>
                            <i className="fas fa-cloud"></i>
                        </div>
                        <h3 className={styles.card__title}>Cloud Computing</h3>
                        <p className={styles.card__description}>
                            Explorar servicios en la nube para desplegar aplicaciones, gestionar bases de datos y construir soluciones escalables.
                        </p>
                        <div className={styles.card__tags}>
                            <span className={styles.tag}>AWS</span>
                            <span className={styles.tag}>Azure</span>
                        </div>
                    </article>
                </div>
                
                <div className={styles.subjects}>
                    <h3 className={styles.subjects__title}>
                        <i className="fas fa-book"></i> Materias Relevantes
                    </h3>
                    <div className={styles.subjects__list}>
                        <span className={styles.subject}>Programación Orientada a Objetos</span>
                        <span className={styles.subject}>Estructuras de Datos</span>
                        <span className={styles.subject}>Análisis de algoritmos</span>
                        <span className={styles.subject}>Computación en la nube</span>
                        <span className={styles.subject}>Ingeniería de Software</span>
                        <span className={styles.subject}>Administración de Bases de Datos</span>
                        <span className={styles.subject}>Sistemas Inteligentes</span>
                        <span className={styles.subject}>Desarrollo Web</span>
                    </div>
                </div>
            </div>
        </section> 
    );
}
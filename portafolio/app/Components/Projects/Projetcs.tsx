import React from 'react';
import styles from "./Projects.module.css"
import Link from 'next/link';

export default function Projects() {
    return (
         <section className={`section ${styles.projects}`} id="projects">
            <div className="container">
            <div className="section__header">
                    <span className="section__subtitle">Mi trabajo</span>
                    <h2 className="section__title">Proyectos Destacados</h2>
                    <p className="section__description">
                        Una selección de proyectos que demuestran mis habilidades y pasión por el desarrollo (aún no tengo :( )
                    </p>
                </div>
                
                <div className={styles.projects__more}>
                    <Link href="https://github.com/EstefaniDL" target="_blank" rel="noopener noreferrer" className={styles.btn + " " + styles["btn--outline"]}>
                        <i className={styles["fab fa-github"]}></i> Ver más en GitHub
                    </Link>
                </div>
            </div>
        </section> 
    );
}

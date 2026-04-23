import React from "react";
import styles from "./Footer.module.css"
import Link from "next/link";

let FooterData: String = 'Estefani Michalle Dominguez Lira'

export default function Footer() {
    return (
         <footer className={styles.footer} id="footer">
  <div className="container">

    <div className={styles.footer__content}>

      <div>
        <Link href="#" className={styles.footer__logo}>
          <span className="logo__bracket">&lt;</span>{FooterData}<span className={styles.bracket}>/&gt;</span>
                    </Link>
                    <p className={styles.text}>
                        Gracias por visitar mi portfolio. ¡Espero que podamos trabajar juntos pronto!
                    </p>
                </div>
                
                <div className={styles.social}>
                    <Link href="https://linkedin.com/in/estefani-lira-53764a3b1" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
                        <i className="fab fa-linkedin-in"></i>
                    </Link>
                    <Link href="https://github.com/EstefaniDL" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="GitHub">
                        <i className="fab fa-github"></i>
                    </Link>
                    <Link href="mailto:estefaniemdl@gmail.com" className={styles.socialLink} aria-label="Email">
                        <i className="fas fa-envelope"></i>
                    </Link>
                </div>
            </div>
            
            <div className={styles.bottom}>
                <p className={styles.copyright}>
                    &copy; 2026 Estefani Michalle Dominguez Lira. Todos los derechos reservados.
                </p>
                <p className={styles.made}>
                    Hecho con <i className="fas fa-heart"></i> y mucho <i className="fas fa-brain"></i>
                </p>
            </div>
        </div>
    </footer> 
    );
}
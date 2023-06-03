import styles from './landing-page.module.scss';
import classNames from 'classnames';
import { NavBar } from '../nav-bar/nav-bar';

export interface LandingPageProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-landing-pages-and-templates
 */
export const LandingPage = ({ className }: LandingPageProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <section className={styles.container}>
                <NavBar />
                <h2 className={styles.h2}>Welcome to V-TechHub</h2>
                <h4 className={styles.h4}> Where Innovation Meets Collaboration!</h4>
                <br />
                <div>
                    <p className={styles.p}>
                        Discover V-TechHub, a vibrant community where techenthusiasts,innovators,and
                        learners unite. Immerse yourself in our collaborative space, fostering
                        creativity, knowledge sharing, and meaningful connections.Explore
                        cutting-edge facilities, advanced technology, and tailored programs in AI,
                        blockchain, cybersecurity, and software development. Engage in
                        thought-provoking discussions, connect with industry leaders, and receive
                        valuable resources and mentorship from our dedicated team. Join usat
                        V-TechHub and embark on an empowering tech journey towards the future.
                    </p>
                    <div className={styles.btn_container}>
                        <button className={classNames(styles.btn, styles.lm)}>Learn More</button>
                        <button className={styles.btn}>Get Started</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

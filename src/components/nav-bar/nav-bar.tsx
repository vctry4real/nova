import styles from './nav-bar.module.scss';
import classNames from 'classnames';
import { NavLink } from '../nav-link/nav-link';

export interface NavBarProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-nav-bars-and-templates
 */
export const NavBar = ({ className }: NavBarProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.nav_container}>
                <nav className={styles.nav}>
                    <h3>V-TechHub</h3>
                    <div className={styles.navlink_container}>
                        <NavLink>Service</NavLink>
                        <NavLink>{'About us'}</NavLink>
                        <NavLink>{'Blog'}</NavLink>
                        <NavLink>Contact us</NavLink>
                        <button className={styles.login_btn}>Login</button>
                    </div>
                </nav>
            </div>
        </div>
    );
};

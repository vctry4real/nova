import styles from './nav-link.module.scss';
import classNames from 'classnames';

export interface NavLinkProps {
    className?: string;
    children?: React.ReactNode;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-nav-links-and-templates
 */
export const NavLink = ({ className, children }: NavLinkProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.container}>
                <nav>
                    <a href="/" className={styles.a}>
                        {children}
                    </a>
                </nav>
            </div>
        </div>
    );
};

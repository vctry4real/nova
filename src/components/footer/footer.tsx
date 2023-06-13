import styles from './footer.module.scss';
import classNames from 'classnames';

export interface FooterProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-footers-and-templates
 */
export const Footer = ({ className }: FooterProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <section>
                <footer>
                    <div>
                        <h2>V-TecHub</h2>
                    </div>
                </footer>
            </section>
        </div>
    );
};

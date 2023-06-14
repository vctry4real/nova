import styles from './about.module.scss';
import classNames from 'classnames';

export interface AboutProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-abouts-and-templates
 */
export const About = ({ className }: AboutProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <section>
                <div>
                    <h1>About us</h1>
                </div>
            </section>
        </div>
    );
};

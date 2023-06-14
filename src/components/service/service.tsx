import styles from './service.module.scss';
import classNames from 'classnames';

export interface ServiceProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-services-and-templates
 */
export const Service = ({ className }: ServiceProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <section>
                <div>
                    <h1>Services</h1>
                </div>
            </section>
        </div>
    );
};

import styles from './cards.module.scss';
import classNames from 'classnames';

export interface CardsProps {
    className?: string;
    children?:React.ReactNode;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-cardss-and-templates
 */
export const Cards = ({ className,children }: CardsProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.card} >{children} </div>
        </div>
    );
};

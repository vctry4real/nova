import styles from './labels.module.scss';
import classNames from 'classnames';

export interface LabelsProps {
    className?: string;
    //children?: JSX.Element | Array<JSX.Element|string> | string;
    children?: React.ReactNode;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-labelss-and-templates
 */
export const Labels = ({ className, children }: LabelsProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <label>{children}</label>
        </div>
    );
};

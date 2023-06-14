import styles from './blog.module.scss';
import classNames from 'classnames';

export interface BlogProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-blogs-and-templates
 */
export const Blog = ({ className }: BlogProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <section>
                <div>
                    <h1>Blog</h1>
                </div>
            </section>
        </div>
    );
};

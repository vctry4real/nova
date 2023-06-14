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
            <section className={styles.container}>
                <footer className={styles.footer_container}>
                    <div className={styles.footer_content}>
                        <h1 className={styles.h1}>V-TechHub</h1>
                        <h2 className={styles.h2}>Where Innovation Meet Collaboration</h2>
                        <p className={styles.p}>
                            Join us on this exciting journey as we continue to be your trusted
                            source for all things tech. Join us on this exciting journey as we
                            continue to be your trusted source for all things tech.
                        </p>
                        <div className={styles.logos} />
                        <p className={styles.tel_no}>Tel phone : +2349082346782 +2348056721334</p>
                        <div className={styles.footer_base}>
                            <p className={styles.cr}>Copyright @2023 V-TechHub</p>
                        </div>
                    </div>
                </footer>
            </section>
        </div>
    );
};

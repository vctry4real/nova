import styles from './login.module.scss';
import classNames from 'classnames';
import { Labels } from '../labels/labels';
import { Input } from '../input/input';
import { Button } from '../button/button';

export interface LoginProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-logins-and-templates
 */
export const Login = ({ className }: LoginProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.container}>
                <h2 className={styles.h2}>V-TechHub</h2>
                <h4 className={styles.h4}>Welcome Back </h4>
                <form>
                    <Labels>{'Email address'}</Labels>
                    <br />
                    <Input />
                    <br />
                    <Labels>{'Password'}</Labels>
                    <br />
                    \
                    <Input />
                    <div className={styles.rf}>
                        <input type="checkbox" className={styles.input} />
                        <p className={styles.p}>Remember me</p>
                        <a href="/" className={styles.a}>
                            Forgot password ?
                        </a>
                    </div>
                    <button className={styles.btn_submit}>Submit</button>
                    <br />
                    <Button>Google</Button>
                    <Button>Facebook</Button>
                    <div className={styles.formbot}>
                        <p>Don&apos;t have an account ? </p>
                        <a href="/">Sign up</a>
                    </div>
                </form>
            </div>
        </div>
    );
};
